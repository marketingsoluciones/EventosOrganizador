import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface ReunionData {
  nombre: string;
  email: string;
  telefono: string;
  motivo: string;
  fecha: string;
  hora: string;
}

const BOOKINGS_FILE = path.join(process.cwd(), 'data', 'reuniones.json');

function getBookings(): ReunionData[] {
  try {
    if (fs.existsSync(BOOKINGS_FILE)) {
      return JSON.parse(fs.readFileSync(BOOKINGS_FILE, 'utf-8'));
    }
  } catch {
    // ignore
  }
  return [];
}

function saveBooking(booking: ReunionData & { createdAt: string }) {
  const dir = path.dirname(BOOKINGS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const bookings = getBookings();
  bookings.push(booking as any);
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
}

function isSlotTaken(fecha: string, hora: string): boolean {
  const bookings = getBookings();
  return bookings.some((b: any) => b.fecha === fecha && b.hora === hora);
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

    // Check slot availability
    if (isSlotTaken(fecha, hora)) {
      return res.status(400).json({
        error: 'Este horario ya no está disponible. Por favor selecciona otro.'
      });
    }

    // Save booking
    saveBooking({
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
      message: 'Reunión agendada exitosamente',
    });

  } catch (error: any) {
    console.error('Error al agendar reunión:', error);
    return res.status(500).json({
      error: 'Error al agendar la reunión. Por favor intenta nuevamente.',
    });
  }
}
