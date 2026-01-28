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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nombre, email, telefono, motivo, fecha, hora }: ReunionData = req.body;

    // Validaciones
    if (!nombre || !email || !telefono || !fecha || !hora) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    // Configurar Google Calendar API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
      },
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    // Crear fecha y hora del evento
    const [year, month, day] = fecha.split('-');
    const [hours, minutes] = hora.split(':');

    const startDateTime = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hours),
      parseInt(minutes)
    );

    // Reunión de 30 minutos
    const endDateTime = new Date(startDateTime.getTime() + 30 * 60000);

    // Verificar si el horario está disponible
    const existingEvents = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      timeMin: startDateTime.toISOString(),
      timeMax: endDateTime.toISOString(),
      singleEvents: true,
    });

    if (existingEvents.data.items && existingEvents.data.items.length > 0) {
      return res.status(400).json({
        error: 'Este horario ya no está disponible. Por favor selecciona otro.'
      });
    }

    // Crear evento en Google Calendar
    const event = {
      summary: `Reunión: ${nombre}`,
      description: `
📋 **Datos del Cliente:**
- Nombre: ${nombre}
- Email: ${email}
- Teléfono: ${telefono}
${motivo ? `\n📝 **Motivo:**\n${motivo}` : ''}

---
Agendado desde EventosOrganizador.com
      `.trim(),
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Europe/Madrid',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Europe/Madrid',
      },
      attendees: [
        { email: email },
        { email: process.env.GOOGLE_ORGANIZER_EMAIL || 'eventosorganizador.com@gmail.com' }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 día antes
          { method: 'popup', minutes: 60 }, // 1 hora antes
        ],
      },
      conferenceData: {
        createRequest: {
          requestId: `${Date.now()}-${nombre.replace(/\s/g, '')}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    };

    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      requestBody: event,
      conferenceDataVersion: 1,
      sendUpdates: 'all', // Envía emails a todos los asistentes
    });

    // Enviar email de confirmación adicional (opcional - usando tu propio sistema)
    // Aquí puedes integrar SendGrid, Nodemailer, etc.

    return res.status(200).json({
      success: true,
      message: 'Reunión agendada exitosamente',
      eventId: response.data.id,
      meetLink: response.data.hangoutLink,
    });

  } catch (error: any) {
    console.error('Error al agendar reunión:', error);

    return res.status(500).json({
      error: 'Error al agendar la reunión. Por favor intenta nuevamente.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
