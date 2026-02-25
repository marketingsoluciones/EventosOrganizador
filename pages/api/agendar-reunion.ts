import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

interface ReunionData {
  nombre: string;
  email: string;
  telefono: string;
  motivo: string;
  fecha: string;
  hora: string;
}

function getCalendarClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });

  return google.calendar({ version: 'v3', auth });
}

async function createCalendarEvent(data: ReunionData) {
  const calendar = getCalendarClient();
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const organizerEmail = process.env.GOOGLE_ORGANIZER_EMAIL;

  // Build start/end times (30-minute meeting)
  const startDateTime = `${data.fecha}T${data.hora}:00`;
  const endHour = parseInt(data.hora.split(':')[0]);
  const endMinute = parseInt(data.hora.split(':')[1]) + 30;
  const endH = endMinute >= 60 ? endHour + 1 : endHour;
  const endM = endMinute >= 60 ? endMinute - 60 : endMinute;
  const endDateTime = `${data.fecha}T${String(endH).padStart(2, '0')}:${String(endM).padStart(2, '0')}:00`;

  const event = {
    summary: `Meeting with ${data.nombre} — EventosOrganizador`,
    description: [
      `Name: ${data.nombre}`,
      `Email: ${data.email}`,
      `Phone: ${data.telefono}`,
      data.motivo ? `Subject: ${data.motivo}` : '',
      '',
      'Booked via eventosorganizador.com',
    ].filter(Boolean).join('\n'),
    start: {
      dateTime: startDateTime,
      timeZone: 'America/New_York',
    },
    end: {
      dateTime: endDateTime,
      timeZone: 'America/New_York',
    },
    attendees: [
      { email: data.email, displayName: data.nombre },
      ...(organizerEmail ? [{ email: organizerEmail }] : []),
    ],
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email' as const, minutes: 60 },
        { method: 'popup' as const, minutes: 15 },
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
    calendarId: calendarId || 'primary',
    requestBody: event,
    sendUpdates: 'all',
    conferenceDataVersion: 1,
  });

  return response.data;
}

async function checkSlotAvailability(fecha: string, hora: string): Promise<boolean> {
  try {
    const calendar = getCalendarClient();
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';

    const startDateTime = `${fecha}T${hora}:00`;
    const endHour = parseInt(hora.split(':')[0]);
    const endMinute = parseInt(hora.split(':')[1]) + 30;
    const endH = endMinute >= 60 ? endHour + 1 : endHour;
    const endM = endMinute >= 60 ? endMinute - 60 : endMinute;
    const endDateTime = `${fecha}T${String(endH).padStart(2, '0')}:${String(endM).padStart(2, '0')}:00`;

    const response = await calendar.events.list({
      calendarId,
      timeMin: new Date(`${startDateTime}-05:00`).toISOString(),
      timeMax: new Date(`${endDateTime}-05:00`).toISOString(),
      singleEvents: true,
    });

    return (response.data.items?.length || 0) > 0;
  } catch {
    return false;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nombre, email, telefono, motivo, fecha, hora }: ReunionData = req.body;

    if (!nombre || !email || !telefono || !fecha || !hora) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Check if Google Calendar is configured
    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      // Check slot availability via Google Calendar
      if (await checkSlotAvailability(fecha, hora)) {
        return res.status(400).json({
          error: 'This time slot is no longer available. Please select another.'
        });
      }

      // Create Google Calendar event with invite
      const event = await createCalendarEvent({ nombre, email, telefono, motivo, fecha, hora });

      return res.status(200).json({
        success: true,
        message: 'Meeting scheduled successfully! You will receive a calendar invite shortly.',
        meetLink: event.hangoutLink || null,
        eventId: event.id,
      });
    }

    // Fallback: if Google Calendar is not configured, return success
    return res.status(200).json({
      success: true,
      message: 'Meeting request received. Our team will confirm shortly.',
    });

  } catch (error: any) {
    console.error('Error scheduling meeting:', error?.message || error);
    return res.status(500).json({
      error: 'Error scheduling the meeting. Please try again.',
    });
  }
}
