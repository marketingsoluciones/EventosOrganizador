import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

const TIMEZONE = 'Europe/Madrid';
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'eventosorganizador.com@gmail.com';
const ORGANIZER_EMAIL = process.env.GOOGLE_ORGANIZER_EMAIL || 'eventosorganizador.com@gmail.com';

interface ReunionData {
  nombre: string;
  email: string;
  telefono: string;
  fecha: string;
  hora: string;
}

function getCalendarClient() {
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n');
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

  if (!clientEmail || !privateKey || privateKey === '') {
    throw new Error('Google Calendar credentials not configured: missing GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });

  return google.calendar({ version: 'v3', auth });
}

function getEndTime(hora: string): string {
  const [h, m] = hora.split(':').map(Number);
  const totalMinutes = h * 60 + m + 30;
  const endH = Math.floor(totalMinutes / 60);
  const endM = totalMinutes % 60;
  return `${String(endH).padStart(2, '0')}:${String(endM).padStart(2, '0')}`;
}

async function createCalendarEvent(data: ReunionData) {
  const calendar = getCalendarClient();
  const endTime = getEndTime(data.hora);

  const event = {
    summary: `Meeting with ${data.nombre} — EventosOrganizador`,
    description: [
      `Name: ${data.nombre}`,
      `Email: ${data.email}`,
      `Phone: ${data.telefono}`,
      '',
      'Booked via eventosorganizador.com/agendar-reunion',
    ].join('\n'),
    start: {
      dateTime: `${data.fecha}T${data.hora}:00`,
      timeZone: TIMEZONE,
    },
    end: {
      dateTime: `${data.fecha}T${endTime}:00`,
      timeZone: TIMEZONE,
    },
    attendees: [
      { email: data.email, displayName: data.nombre },
      { email: ORGANIZER_EMAIL },
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email' as const, minutes: 1440 }, // 24h before
        { method: 'email' as const, minutes: 60 },   // 1h before
        { method: 'popup' as const, minutes: 15 },    // 15min before
      ],
    },
    conferenceData: {
      createRequest: {
        requestId: `eo-${Date.now()}`,
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    },
  };

  const response = await calendar.events.insert({
    calendarId: CALENDAR_ID,
    requestBody: event,
    sendUpdates: 'all',
    conferenceDataVersion: 1,
  });

  return response.data;
}

async function getBookedSlots(fecha: string): Promise<string[]> {
  const calendar = getCalendarClient();

  // Use full ISO datetime with timezone name instead of hardcoded offset
  // (Madrid is +01:00 in winter CET, +02:00 in summer CEST)
  const response = await calendar.events.list({
    calendarId: CALENDAR_ID,
    timeMin: new Date(`${fecha}T17:00:00`).toLocaleString('sv', { timeZone: TIMEZONE }).replace(' ', 'T') + ':00',
    timeMax: new Date(`${fecha}T20:00:00`).toLocaleString('sv', { timeZone: TIMEZONE }).replace(' ', 'T') + ':00',
    timeZone: TIMEZONE,
    singleEvents: true,
    orderBy: 'startTime',
  });

  const bookedSlots: string[] = [];
  for (const event of response.data.items || []) {
    if (event.start?.dateTime) {
      // Extract time in Madrid timezone
      const madridTime = new Date(event.start.dateTime).toLocaleString('en-GB', {
        timeZone: TIMEZONE,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      bookedSlots.push(madridTime);
    }
  }

  return bookedSlots;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET: return booked slots for a given date
  if (req.method === 'GET') {
    const { fecha } = req.query;
    if (!fecha || typeof fecha !== 'string') {
      return res.status(400).json({ error: 'Missing fecha parameter' });
    }

    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      try {
        const bookedSlots = await getBookedSlots(fecha);
        return res.status(200).json({ bookedSlots });
      } catch (error: any) {
        console.error('Error fetching booked slots:', error?.message || error);
        // Return empty slots but log the error so we know auth is failing
        return res.status(200).json({ bookedSlots: [], warning: 'Could not connect to Google Calendar' });
      }
    }

    return res.status(200).json({ bookedSlots: [] });
  }

  // POST: create a booking
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nombre, email, telefono, fecha, hora }: ReunionData = req.body;

    if (!nombre || !email || !telefono || !fecha || !hora) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Validate the time slot is within allowed range
    const allowedSlots = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];
    if (!allowedSlots.includes(hora)) {
      return res.status(400).json({ error: 'Invalid time slot' });
    }

    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      // Check if slot is already booked
      const bookedSlots = await getBookedSlots(fecha);
      if (bookedSlots.includes(hora)) {
        return res.status(400).json({
          error: 'This time slot is no longer available. Please select another.'
        });
      }

      // Create Google Calendar event (sends invite to all attendees)
      const event = await createCalendarEvent({ nombre, email, telefono, fecha, hora });

      return res.status(200).json({
        success: true,
        message: 'Meeting scheduled successfully! You will receive a calendar invite with a Google Meet link.',
        meetLink: event.hangoutLink || null,
        eventId: event.id,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Meeting request received. Our team will confirm shortly.',
    });

  } catch (error: any) {
    const errorMsg = error?.message || String(error);
    const errorCode = error?.code || error?.response?.status;
    console.error('Error scheduling meeting:', {
      message: errorMsg,
      code: errorCode,
      details: error?.response?.data?.error || null,
    });

    // Return specific error messages based on Google API error codes
    if (errorCode === 403 || errorMsg.includes('forbidden') || errorMsg.includes('insufficient')) {
      return res.status(500).json({
        error: 'Calendar access denied. The service account does not have permission to access this calendar. Please share the calendar with the service account email.',
      });
    }
    if (errorCode === 404 || errorMsg.includes('notFound')) {
      return res.status(500).json({
        error: 'Calendar not found. Please verify the GOOGLE_CALENDAR_ID is correct.',
      });
    }
    if (errorMsg.includes('invalid_grant') || errorMsg.includes('Invalid JWT')) {
      return res.status(500).json({
        error: 'Authentication failed. The service account key may be invalid or expired.',
      });
    }

    return res.status(500).json({
      error: `Error scheduling the meeting: ${errorMsg}`,
    });
  }
}
