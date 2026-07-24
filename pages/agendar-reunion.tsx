import React, { useEffect, useMemo, useState } from 'react';
import type { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  motivo: string;
  fecha: string;
  hora: string;
  userTimezone: string;
}

interface SuccessData {
  horaUsuario: string;
  horaMadrid: string;
  userTimezone: string;
}

interface ScheduleResponse extends SuccessData {
  error?: string;
}

const AVAILABLE_HOURS = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];

function getAvailableDates() {
  const dates: Date[] = [];
  const currentDate = new Date();

  while (dates.length < 30) {
    currentDate.setDate(currentDate.getDate() + 1);
    const dayOfWeek = currentDate.getDay();

    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      dates.push(new Date(currentDate));
    }
  }

  return dates;
}

function formatDate(date: Date) {
  return date.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return 'Error al agendar la reunion';
}

const AgendarReunion = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [successData, setSuccessData] = useState<SuccessData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    motivo: '',
    fecha: '',
    hora: '',
    userTimezone: 'Europe/Madrid',
  });

  const availableDates = useMemo(() => getAvailableDates(), []);
  const showTimezoneNotice =
    formData.userTimezone && formData.userTimezone !== 'Europe/Madrid';

  useEffect(() => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      if (timezone) {
        setFormData((prev) => ({ ...prev, userTimezone: timezone }));
      }
    } catch {
      // Keep default timezone when browser detection is unavailable.
    }
  }, []);

  useEffect(() => {
    if (!success) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [router, success]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (!formData.nombre || !formData.email || !formData.telefono) {
      setError('Por favor completa todos los campos obligatorios');
      return;
    }

    setError('');
    setStep(2);
  };

  const handleSubmit = async () => {
    if (!formData.fecha || !formData.hora) {
      setError('Por favor selecciona una fecha y hora');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/agendar-reunion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as ScheduleResponse;

      if (!response.ok) {
        throw new Error(data.error || 'Error al agendar la reunion');
      }

      setSuccessData({
        horaUsuario: data.horaUsuario,
        horaMadrid: data.horaMadrid,
        userTimezone: data.userTimezone,
      });
      setSuccess(true);

      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Schedule');
        (window as any).fbq('track', 'Lead', {
          content_name: 'Reunion Agendada',
          content_category: formData.motivo,
        });
      }

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'reunion_agendada',
        });
      }
    } catch (submitError) {
      setError(getErrorMessage(submitError));
    } finally {
      setLoading(false);
    }
  };

  if (success && successData) {
    const isNotMadrid = successData.userTimezone !== 'Europe/Madrid';

    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white px-6">
          <div className="mx-auto flex min-h-screen max-w-md items-center justify-center text-center">
            <div className="w-full">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-green-200 bg-green-50">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="mb-3 text-2xl font-bold text-gray-900">
                Reunion agendada
              </h2>
              <p className="mb-4 text-gray-500">
                Hemos enviado una confirmacion a{' '}
                <span className="font-medium text-gray-900">{formData.email}</span>
              </p>

              <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 p-4 text-left">
                <p className="mb-2 text-sm font-semibold text-gray-800">
                  Detalles de tu reunion:
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">
                    Tu hora local ({successData.userTimezone}):
                  </span>
                </p>
                <p className="mb-2 text-sm text-gray-600">{successData.horaUsuario}</p>
                {isNotMadrid && (
                  <p className="text-xs text-gray-400">
                    Hora en Espana: {successData.horaMadrid}
                  </p>
                )}
              </div>

              <p className="text-sm text-gray-400">
                Redirigiendo a la pagina principal...
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Agendar Reunion - EventosOrganizador</title>
        <meta
          name="description"
          content="Agenda una reunion con nuestro equipo para conocer como EventosOrganizador puede ayudarte a gestionar tus eventos."
        />
      </Head>

      <Navbar />

      <div className="w-full bg-white">
        <div className="mx-auto max-w-[700px] px-6 py-20 md:py-28">
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Agenda tu reunion
            </h1>
            <p className="text-lg text-gray-500">
              Completa el formulario y selecciona el mejor horario para ti
            </p>
            {showTimezoneNotice && (
              <p className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
                Los horarios se muestran en hora de Espana. Tu hora local se
                mostrara al confirmar.
              </p>
            )}
          </div>

          <div className="mb-10 flex items-center justify-center gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                step >= 1 ? 'bg-[#6096B9] text-white' : 'bg-gray-100 text-gray-400'
              }`}
            >
              1
            </div>
            <div
              className={`h-px w-16 ${step >= 2 ? 'bg-[#6096B9]' : 'bg-gray-200'}`}
            />
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                step >= 2 ? 'bg-[#6096B9] text-white' : 'bg-gray-100 text-gray-400'
              }`}
            >
              2
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 p-8">
            {error && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                  Tus datos
                </h2>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Nombre completo *
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[#6096B9]"
                    name="nombre"
                    onChange={handleInputChange}
                    placeholder="Juan Perez"
                    type="text"
                    value={formData.nombre}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[#6096B9]"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    type="email"
                    value={formData.email}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Telefono *
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[#6096B9]"
                    name="telefono"
                    onChange={handleInputChange}
                    placeholder="+34 600 000 000"
                    type="tel"
                    value={formData.telefono}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Motivo de la reunion (opcional)
                  </label>
                  <textarea
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[#6096B9]"
                    name="motivo"
                    onChange={handleInputChange}
                    placeholder="Cuentanos brevemente de que trata tu consulta..."
                    rows={3}
                    value={formData.motivo}
                  />
                </div>

                <button
                  className="w-full rounded-lg bg-[#6096B9] py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#4b7591]"
                  onClick={handleNextStep}
                  type="button"
                >
                  Continuar
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Selecciona fecha y hora
                  </h2>
                  <button
                    className="text-sm font-medium text-[#6096B9] hover:underline"
                    onClick={() => setStep(1)}
                    type="button"
                  >
                    Volver
                  </button>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-700">
                    Fecha *
                  </label>
                  <div className="grid grid-cols-3 gap-2 md:grid-cols-4">
                    {availableDates.slice(0, 12).map((date, index) => {
                      const dateStr = date.toISOString().split('T')[0];
                      const isSelected = formData.fecha === dateStr;

                      return (
                        <button
                          key={`${dateStr}-${index}`}
                          className={`rounded-lg border p-3 text-left transition-colors ${
                            isSelected
                              ? 'border-[#6096B9] bg-[#6096B9]/5 text-[#6096B9]'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, fecha: dateStr, hora: '' }))
                          }
                          type="button"
                        >
                          <div className="text-xs capitalize text-gray-400">
                            {date.toLocaleDateString('es-ES', { weekday: 'short' })}
                          </div>
                          <div
                            className={`text-sm font-semibold ${
                              isSelected ? 'text-[#6096B9]' : 'text-gray-900'
                            }`}
                          >
                            {date.getDate()}{' '}
                            {date.toLocaleDateString('es-ES', { month: 'short' })}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {formData.fecha && (
                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-700">
                      Hora en Espana (17:00 - 20:00) *
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {AVAILABLE_HOURS.map((hour) => {
                        const isSelected = formData.hora === hour;

                        return (
                          <button
                            key={hour}
                            className={`rounded-lg border p-3 text-sm font-medium transition-colors ${
                              isSelected
                                ? 'border-[#6096B9] bg-[#6096B9] text-white'
                                : 'border-gray-200 text-gray-700 hover:border-gray-300'
                            }`}
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, hora: hour }))
                            }
                            type="button"
                          >
                            {hour}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {formData.fecha && formData.hora && (
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="mb-1 text-sm font-medium text-gray-900">Resumen</p>
                    <p className="text-sm text-gray-600">
                      {formData.nombre} &middot; {formData.email}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {formatDate(new Date(`${formData.fecha}T00:00:00`))} a las{' '}
                      {formData.hora} (hora Espana)
                    </p>
                  </div>
                )}

                <button
                  className="w-full rounded-lg bg-[#6096B9] py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#4b7591] disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={loading || !formData.fecha || !formData.hora}
                  onClick={handleSubmit}
                  type="button"
                >
                  {loading ? 'Agendando...' : 'Confirmar reunion'}
                </button>
              </div>
            )}
          </div>

          <div className="mt-6 rounded-lg border border-gray-200 p-5">
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-[#6096B9]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="mb-1 text-sm font-medium text-gray-900">
                  Informacion
                </p>
                <ul className="space-y-0.5 text-sm text-gray-500">
                  <li>Lunes a Viernes de 17:00 a 20:00 (hora Espana)</li>
                  <li>Recibiras confirmacion por email</li>
                  <li>Duracion aproximada: 30 minutos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AgendarReunion;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}
