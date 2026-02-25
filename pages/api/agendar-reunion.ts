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

function getGoogleAuth() {
      const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
      const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;

  if (!privateKey || !clientEmail) {
          throw new Error('Google Calendar credentials not configured');
  }

  const auth = new google.auth.GoogleAuth({
          credentials: {
                    client_email: clientEmail,
                    private_key: privateKey,
          },
          scopes: ['https://www.googleapis.com/auth/calendar'],
  });

  return auth;
}

async function isSlotTaken(fecha: string, hora: string): Promise<boolean> {
      try {
              const auth = getGoogleAuth();
              const calendar = google.calendar({ version: 'v3', auth });
              const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';

        const [year, month, day] = fecha.split('-').map(Number);
              const [hour, minute] = hora.split(':').map(Number);

        const timeMin = new Date(year, month - 1, day, hour, minute, 0);
              const timeMax = new Date(year, month - 1, day, hour, minute + 30, 0);

        const response = await calendar.events.list({
                  calendarId,
                  timeMin: timeMin.toISOString(),
                  timeMax: timeMax.toISOString(),
                  singleEvents: true,
        });

        const events = response.data.items || [];
              return events.length > 0;
      } catch {
              return false;
      }
}

async function createCalendarEvent(booking: ReunionData & { createdAt: string }) {
      const auth = getGoogleAuth();
      const calendar = google.calendar({ version: 'v3', auth });
      const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';

  const [year, month, day] = booking.fecha.split('-').map(Number);
      const [hour, minute] = booking.hora.split(':').map(Number);

  const startTime = new Date(year, month - 1, day, hour, minute, 0);
      const endTime = new Date(year, month - 1, day, hour, minute + 30, 0);

  await calendar.events.insert({
          calendarId,
          requestBody: {
                    summary: `Reunion con ${booking.nombre}`,
                    description: `Nombre: ${booking.nombre}\nEmail: ${booking.email}\nTelefono: ${booking.telefono}\nMotivo: ${booking.motivo || 'No especificado'}`,
                    start: {
                                dateTime: startTime.toISOString(),
                                timeZone: 'Europe/Madrid',
                    },
                    end: {
                                dateTime: endTime.toISOString(),
                                timeZone: 'Europe/Madrid',
                    },
          },
  });
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
                  return res.status(400).json({ error: 'Faltan datos obligatorios' });
        }

        const slotTaken = await isSlotTaken(fecha, hora);
          if (slotTaken) {
                    return res.status(400).json({
                                error: 'Este horario ya no esta disponible. Por favor selecciona otro.'
                    });
          }

        await createCalendarEvent({
                  nombre,
                  email,
                  telefono,
                  motivo,
                  fecha,
                  hora,
                  createdAt: new Date().toISOString()
        });

        return res.status(200).json({
                  success: true,
                  message: 'Reunion agendada exitosamente',
        });

  } catch (error: any) {
          console.error('Error al agendar reunion:', error);
          return res.status(500).json({
                    error: 'Error al agendar la reunion. Por favor intenta nuevamente.',
          });
  }
}
