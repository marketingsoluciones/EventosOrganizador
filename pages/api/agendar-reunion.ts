import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

interface ReunionData {
          nombre: string;
          email: string;
          telefono: string;
          motivo: string;
          fecha: string;
          hora: string;
          userTimezone?: string;
}

// Convert fecha+hora (Europe/Madrid) to UTC ISO string
function madridToUTC(fecha: string, hora: string): string {
          const isoLocal = fecha + 'T' + hora + ':00';
          const tempDate = new Date(isoLocal + '+00:00');
          const madridStr = tempDate.toLocaleString('en-US', { timeZone: 'Europe/Madrid' });
          const madridDate = new Date(madridStr);
          const offsetMs = tempDate.getTime() - madridDate.getTime();
          return new Date(tempDate.getTime() + offsetMs).toISOString();
}

// Format a UTC date as local time in a given timezone
function formatInTimezone(utcISO: string, timezone: string): string {
          try {
                      const date = new Date(utcISO);
                      return date.toLocaleString('es-ES', {
                                    timeZone: timezone,
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false,
                      });
          } catch {
                      return new Date(utcISO).toLocaleString('es-ES');
          }
}

function getGoogleAuth() {
          const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
          const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
          if (!privateKey || !clientEmail) throw new Error('Google Calendar credentials not configured');
          return new google.auth.GoogleAuth({
                      credentials: { client_email: clientEmail, private_key: privateKey },
                      scopes: ['https://www.googleapis.com/auth/calendar'],
          });
}

async function isSlotTaken(fecha: string, hora: string): Promise<boolean> {
          try {
                      const calendar = google.calendar({ version: 'v3', auth: getGoogleAuth() });
                      const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';
                      const startUTC = madridToUTC(fecha, hora);
                      const endUTC = new Date(new Date(startUTC).getTime() + 30 * 60 * 1000).toISOString();
                      const response = await calendar.events.list({ calendarId, timeMin: startUTC, timeMax: endUTC, singleEvents: true });
                      return (response.data.items || []).length > 0;
          } catch (err) {
                      console.error('Error checking slot:', err);
                      return false;
          }
}

async function createCalendarEvent(booking: ReunionData & { createdAt: string }) {
          const calendar = google.calendar({ version: 'v3', auth: getGoogleAuth() });
          const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';
          const startUTC = madridToUTC(booking.fecha, booking.hora);
          const endUTC = new Date(new Date(startUTC).getTime() + 30 * 60 * 1000).toISOString();

  const userTimezone = booking.userTimezone || 'Europe/Madrid';
          const horaUsuario = formatInTimezone(startUTC, userTimezone);
          const horaMadrid = formatInTimezone(startUTC, 'Europe/Madrid');

  const description = [
              'DATOS DEL CLIENTE:',
              'Nombre: ' + booking.nombre,
              'Email: ' + booking.email,
              'Telefono: ' + booking.telefono,
              'Motivo: ' + (booking.motivo || 'No especificado'),
              '',
              'HORARIO:',
              'Hora Madrid (ES): ' + horaMadrid,
              'Hora cliente (' + userTimezone + '): ' + horaUsuario,
            ].join('\n');

  await calendar.events.insert({
              calendarId,
              requestBody: {
                            summary: 'Reunion con ' + booking.nombre,
                            description,
                            start: { dateTime: startUTC, timeZone: 'Europe/Madrid' },
                            end: { dateTime: endUTC, timeZone: 'Europe/Madrid' },
              },
  });

  return { startUTC, horaUsuario, horaMadrid, userTimezone };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
          if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
          try {
                      const { nombre, email, telefono, motivo, fecha, hora, userTimezone }: ReunionData = req.body;
                      if (!nombre || !email || !telefono || !fecha || !hora) return res.status(400).json({ error: 'Faltan datos obligatorios' });

            const slotTaken = await isSlotTaken(fecha, hora);
                      if (slotTaken) return res.status(400).json({ error: 'Este horario ya no esta disponible. Por favor selecciona otro.' });

            const eventInfo = await createCalendarEvent({ nombre, email, telefono, motivo, fecha, hora, userTimezone, createdAt: new Date().toISOString() });

            return res.status(200).json({
                          success: true,
                          message: 'Reunion agendada exitosamente',
                          horaUsuario: eventInfo.horaUsuario,
                          horaMadrid: eventInfo.horaMadrid,
                          userTimezone: eventInfo.userTimezone,
            });
          } catch (error: any) {
                      console.error('Error al agendar reunion:', error);
                      return res.status(500).json({ error: 'Error al agendar la reunion. Por favor intenta nuevamente.' });
          }
}
