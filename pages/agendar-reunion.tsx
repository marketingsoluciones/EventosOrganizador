import React, { useState } from 'react';
import { GetStaticPropsContext } from 'next';
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
}

const AgendarReunion = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    motivo: '',
    fecha: '',
    hora: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.nombre || !formData.email || !formData.telefono) {
        setError('Por favor completa todos los campos obligatorios');
        return;
      }
      setError('');
      setStep(2);
    }
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
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al agendar la reunión');
      }

      setSuccess(true);
      // Track Facebook Pixel conversion
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Schedule");
        (window as any).fbq("track", "Lead", {
          content_name: "Reunión Agendada",
          content_category: formData.motivo,
        });
      }
      // Track Google Analytics conversion
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: "reunion_agendada",
        });
      }
      setTimeout(() => router.push('/'), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);

    while (dates.length < 30) {
      currentDate.setDate(currentDate.getDate() + 1);
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        dates.push(new Date(currentDate));
      }
    }

    return dates;
  };

  const availableHours = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (success) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-white px-6">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Reunión agendada</h2>
            <p className="text-gray-500 mb-2">
              Hemos enviado una confirmación a <span className="font-medium text-gray-900">{formData.email}</span>
            </p>
            <p className="text-sm text-gray-400">Redirigiendo a la página principal...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Agendar Reunión — EventosOrganizador</title>
        <meta name="description" content="Agenda una reunión con nuestro equipo para conocer cómo EventosOrganizador puede ayudarte a gestionar tus eventos." />
      </Head>
      <Navbar />
      <div className="w-full bg-white">
        <div className="max-w-[700px] mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Agenda tu reunión
            </h1>
            <p className="text-gray-500 text-lg">
              Completa el formulario y selecciona el mejor horario para ti
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 mb-10">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 1 ? 'bg-[#6096B9] text-white' : 'bg-gray-100 text-gray-400'}`}>
              1
            </div>
            <div className={`w-16 h-px ${step >= 2 ? 'bg-[#6096B9]' : 'bg-gray-200'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 2 ? 'bg-[#6096B9] text-white' : 'bg-gray-100 text-gray-400'}`}>
              2
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                {error}
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Tus datos</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre completo *</label>
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none transition-all"
                    placeholder="Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none transition-all"
                    placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Teléfono *</label>
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none transition-all"
                    placeholder="+34 600 000 000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Motivo de la reunión (opcional)</label>
                  <textarea name="motivo" value={formData.motivo} onChange={handleInputChange} rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Cuéntanos brevemente de qué trata tu consulta..." />
                </div>
                <button onClick={handleNextStep}
                  className="w-full bg-[#6096B9] text-white py-3.5 rounded-lg text-[15px] font-medium hover:bg-[#4b7591] transition-colors">
                  Continuar
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">Selecciona fecha y hora</h2>
                  <button onClick={() => setStep(1)} className="text-sm text-[#6096B9] hover:underline font-medium">Volver</button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Fecha *</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                    {getAvailableDates().slice(0, 12).map((date, index) => {
                      const dateStr = date.toISOString().split('T')[0];
                      const isSelected = formData.fecha === dateStr;
                      return (
                        <button key={index}
                          onClick={() => setFormData(prev => ({ ...prev, fecha: dateStr, hora: '' }))}
                          className={`p-3 rounded-lg border text-left transition-colors ${isSelected ? 'border-[#6096B9] bg-[#6096B9]/5 text-[#6096B9]' : 'border-gray-200 hover:border-gray-300'}`}>
                          <div className="text-xs text-gray-400 capitalize">
                            {date.toLocaleDateString('es-ES', { weekday: 'short' })}
                          </div>
                          <div className={`text-sm font-semibold ${isSelected ? 'text-[#6096B9]' : 'text-gray-900'}`}>
                            {date.getDate()} {date.toLocaleDateString('es-ES', { month: 'short' })}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {formData.fecha && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Hora (17:00 - 20:00) *</label>
                    <div className="grid grid-cols-4 gap-2">
                      {availableHours.map((hour) => {
                        const isSelected = formData.hora === hour;
                        return (
                          <button key={hour}
                            onClick={() => setFormData(prev => ({ ...prev, hora: hour }))}
                            className={`p-3 rounded-lg border text-sm font-medium transition-colors ${isSelected ? 'border-[#6096B9] bg-[#6096B9] text-white' : 'border-gray-200 hover:border-gray-300 text-gray-700'}`}>
                            {hour}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {formData.fecha && formData.hora && (
                  <div className="bg-[#f6f9fc] border border-gray-200 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-900 mb-1">Resumen</p>
                    <p className="text-sm text-gray-600">{formData.nombre} &middot; {formData.email}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {formatDate(new Date(formData.fecha + 'T00:00:00'))} a las {formData.hora}
                    </p>
                  </div>
                )}

                <button onClick={handleSubmit}
                  disabled={loading || !formData.fecha || !formData.hora}
                  className="w-full bg-[#6096B9] text-white py-3.5 rounded-lg text-[15px] font-medium hover:bg-[#4b7591] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? 'Agendando...' : 'Confirmar reunión'}
                </button>
              </div>
            )}
          </div>

          <div className="mt-6 border border-gray-200 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#6096B9] shrink-0 mt-0.5" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Información</p>
                <ul className="text-sm text-gray-500 space-y-0.5">
                  <li>Lunes a Viernes de 17:00 a 20:00</li>
                  <li>Recibirás confirmación por email</li>
                  <li>Duración aproximada: 30 minutos</li>
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
