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
  const locale = router.locale || 'en';
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [meetLink, setMeetLink] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    motivo: '',
    fecha: '',
    hora: ''
  });

  const t = locale === 'es' ? {
    title: 'Agenda tu reunión',
    subtitle: 'Completa el formulario y selecciona el mejor horario para ti',
    step1Title: 'Tus datos',
    fullName: 'Nombre completo',
    email: 'Email',
    phone: 'Teléfono',
    subject: 'Motivo de la reunión (opcional)',
    subjectPlaceholder: 'Cuéntanos brevemente de qué trata tu consulta...',
    continue: 'Continuar',
    step2Title: 'Selecciona fecha y hora',
    back: 'Volver',
    dateLabel: 'Fecha',
    timeLabel: 'Hora (9:00 AM - 5:00 PM EST)',
    summary: 'Resumen',
    confirm: 'Confirmar reunión',
    scheduling: 'Agendando...',
    successTitle: 'Reunión agendada',
    successMsg: 'Recibirás una invitación de calendario en',
    redirecting: 'Redirigiendo a la página principal...',
    joinMeet: 'Unirse a Google Meet',
    infoTitle: 'Información',
    info1: 'Lunes a Viernes de 9:00 AM a 5:00 PM (EST)',
    info2: 'Recibirás invitación de Google Calendar',
    info3: 'Duración aproximada: 30 minutos',
    errorRequired: 'Por favor completa todos los campos obligatorios',
    errorDateTime: 'Por favor selecciona una fecha y hora',
  } : {
    title: 'Schedule a Meeting',
    subtitle: 'Fill out the form and select the best time for you',
    step1Title: 'Your Details',
    fullName: 'Full name',
    email: 'Email',
    phone: 'Phone',
    subject: 'Meeting subject (optional)',
    subjectPlaceholder: 'Briefly tell us what your inquiry is about...',
    continue: 'Continue',
    step2Title: 'Select date and time',
    back: 'Back',
    dateLabel: 'Date',
    timeLabel: 'Time (9:00 AM - 5:00 PM EST)',
    summary: 'Summary',
    confirm: 'Confirm meeting',
    scheduling: 'Scheduling...',
    successTitle: 'Meeting Scheduled',
    successMsg: 'You will receive a calendar invite at',
    redirecting: 'Redirecting to the homepage...',
    joinMeet: 'Join Google Meet',
    infoTitle: 'Information',
    info1: 'Monday to Friday, 9:00 AM - 5:00 PM (EST)',
    info2: 'You will receive a Google Calendar invite',
    info3: 'Approximate duration: 30 minutes',
    errorRequired: 'Please fill in all required fields',
    errorDateTime: 'Please select a date and time',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.nombre || !formData.email || !formData.telefono) {
        setError(t.errorRequired);
        return;
      }
      setError('');
      setStep(2);
    }
  };

  const handleSubmit = async () => {
    if (!formData.fecha || !formData.hora) {
      setError(t.errorDateTime);
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
        throw new Error(data.error || 'Error scheduling the meeting');
      }

      setSuccess(true);
      if (data.meetLink) {
        setMeetLink(data.meetLink);
      }

      // Track Facebook Pixel conversion
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Schedule");
        (window as any).fbq("track", "Lead", {
          content_name: "Meeting Scheduled",
          content_category: formData.motivo,
        });
      }
      // Track Google Analytics conversion
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: "meeting_scheduled",
        });
      }
      setTimeout(() => router.push('/'), 5000);
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
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30'
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatHour = (hour: string) => {
    const [h, m] = hour.split(':');
    const hNum = parseInt(h);
    const ampm = hNum >= 12 ? 'PM' : 'AM';
    const h12 = hNum > 12 ? hNum - 12 : hNum === 0 ? 12 : hNum;
    return `${h12}:${m} ${ampm}`;
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.successTitle}</h2>
            <p className="text-gray-500 mb-2">
              {t.successMsg} <span className="font-medium text-gray-900">{formData.email}</span>
            </p>
            {meetLink && (
              <a
                href={meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#6096B9] text-white rounded-lg text-sm font-medium hover:bg-[#4b7591] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                {t.joinMeet}
              </a>
            )}
            <p className="text-sm text-gray-400 mt-4">{t.redirecting}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{locale === 'es' ? 'Agendar Reunión' : 'Schedule a Meeting'} — EventosOrganizador</title>
        <meta name="description" content={locale === 'es'
          ? 'Agenda una reunión con nuestro equipo para conocer cómo EventosOrganizador puede ayudarte.'
          : 'Schedule a meeting with our team to learn how EventosOrganizador can help you.'
        } />
      </Head>
      <Navbar />
      <div className="w-full bg-white">
        <div className="max-w-[700px] mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              {t.title}
            </h1>
            <p className="text-gray-500 text-lg">
              {t.subtitle}
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
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.step1Title}</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.fullName} *</label>
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.email} *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none transition-all"
                    placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.phone} *</label>
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.subject}</label>
                  <textarea name="motivo" value={formData.motivo} onChange={handleInputChange} rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none transition-all resize-none"
                    placeholder={t.subjectPlaceholder} />
                </div>
                <button onClick={handleNextStep}
                  className="w-full bg-[#6096B9] text-white py-3.5 rounded-lg text-[15px] font-medium hover:bg-[#4b7591] transition-colors">
                  {t.continue}
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">{t.step2Title}</h2>
                  <button onClick={() => setStep(1)} className="text-sm text-[#6096B9] hover:underline font-medium">{t.back}</button>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">{t.dateLabel} *</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                    {getAvailableDates().slice(0, 12).map((date, index) => {
                      const dateStr = date.toISOString().split('T')[0];
                      const isSelected = formData.fecha === dateStr;
                      return (
                        <button key={index}
                          onClick={() => setFormData(prev => ({ ...prev, fecha: dateStr, hora: '' }))}
                          className={`p-3 rounded-lg border text-left transition-colors ${isSelected ? 'border-[#6096B9] bg-[#6096B9]/5 text-[#6096B9]' : 'border-gray-200 hover:border-gray-300'}`}>
                          <div className="text-xs text-gray-400 capitalize">
                            {date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', { weekday: 'short' })}
                          </div>
                          <div className={`text-sm font-semibold ${isSelected ? 'text-[#6096B9]' : 'text-gray-900'}`}>
                            {date.getDate()} {date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', { month: 'short' })}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {formData.fecha && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">{t.timeLabel} *</label>
                    <div className="grid grid-cols-4 gap-2">
                      {availableHours.map((hour) => {
                        const isSelected = formData.hora === hour;
                        return (
                          <button key={hour}
                            onClick={() => setFormData(prev => ({ ...prev, hora: hour }))}
                            className={`p-3 rounded-lg border text-sm font-medium transition-colors ${isSelected ? 'border-[#6096B9] bg-[#6096B9] text-white' : 'border-gray-200 hover:border-gray-300 text-gray-700'}`}>
                            {formatHour(hour)}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {formData.fecha && formData.hora && (
                  <div className="bg-[#f6f9fc] border border-gray-200 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-900 mb-1">{t.summary}</p>
                    <p className="text-sm text-gray-600">{formData.nombre} &middot; {formData.email}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {formatDate(new Date(formData.fecha + 'T00:00:00'))} — {formatHour(formData.hora)} EST
                    </p>
                  </div>
                )}

                <button onClick={handleSubmit}
                  disabled={loading || !formData.fecha || !formData.hora}
                  className="w-full bg-[#6096B9] text-white py-3.5 rounded-lg text-[15px] font-medium hover:bg-[#4b7591] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? t.scheduling : t.confirm}
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
                <p className="text-sm font-medium text-gray-900 mb-1">{t.infoTitle}</p>
                <ul className="text-sm text-gray-500 space-y-0.5">
                  <li>{t.info1}</li>
                  <li>{t.info2}</li>
                  <li>{t.info3}</li>
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
      messages: (await import(`../messages/${context.locale ?? 'en'}.json`)).default,
    },
  };
}
