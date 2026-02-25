import React, { useState, useEffect, useCallback } from 'react';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  fecha: string;
  hora: string;
}

const ALL_SLOTS = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];

const AgendarReunion = () => {
  const router = useRouter();
  const locale = router.locale || 'en';
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [meetLink, setMeetLink] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: ''
  });

  const isEs = locale === 'es';

  const t = isEs ? {
    title: 'Agenda tu reunión',
    subtitle: 'Reserva 30 minutos con nuestro equipo',
    step1Title: 'Tus datos',
    fullName: 'Nombre completo',
    email: 'Email',
    phone: 'Teléfono',
    continue: 'Continuar',
    step2Title: 'Selecciona fecha y hora',
    back: 'Volver',
    dateLabel: 'Fecha',
    timeLabel: 'Hora (17:00 - 19:30 hora de Madrid)',
    booked: 'Reservado',
    summary: 'Resumen',
    confirm: 'Confirmar reunión',
    scheduling: 'Agendando...',
    successTitle: 'Reunión confirmada',
    successMsg: 'Recibirás una invitación de Google Calendar con enlace de Google Meet en',
    redirecting: 'Redirigiendo...',
    joinMeet: 'Unirse a Google Meet',
    infoTitle: 'Información',
    info1: 'Lunes a Viernes, 17:00 - 19:30 (hora de Madrid)',
    info2: 'Recibirás invitación de Google Calendar + Google Meet',
    info3: 'Duración: 30 minutos',
    shareLink: 'Compartir enlace',
    linkCopied: 'Enlace copiado',
    errorRequired: 'Por favor completa todos los campos',
    errorDateTime: 'Por favor selecciona una fecha y hora',
    loadingSlots: 'Cargando disponibilidad...',
    timezone: 'Hora de Madrid (CET/CEST)',
  } : {
    title: 'Schedule a Meeting',
    subtitle: 'Book 30 minutes with our team',
    step1Title: 'Your Details',
    fullName: 'Full name',
    email: 'Email',
    phone: 'Phone',
    continue: 'Continue',
    step2Title: 'Select date and time',
    back: 'Back',
    dateLabel: 'Date',
    timeLabel: 'Time (5:00 PM - 7:30 PM Madrid time)',
    booked: 'Booked',
    summary: 'Summary',
    confirm: 'Confirm meeting',
    scheduling: 'Scheduling...',
    successTitle: 'Meeting Confirmed',
    successMsg: 'You will receive a Google Calendar invite with a Google Meet link at',
    redirecting: 'Redirecting...',
    joinMeet: 'Join Google Meet',
    infoTitle: 'Information',
    info1: 'Monday to Friday, 5:00 PM - 7:30 PM (Madrid time)',
    info2: 'You will receive a Google Calendar invite + Google Meet link',
    info3: 'Duration: 30 minutes',
    shareLink: 'Share link',
    linkCopied: 'Link copied!',
    errorRequired: 'Please fill in all required fields',
    errorDateTime: 'Please select a date and time',
    loadingSlots: 'Loading availability...',
    timezone: 'Madrid time (CET/CEST)',
  };

  const fetchBookedSlots = useCallback(async (fecha: string) => {
    setLoadingSlots(true);
    try {
      const response = await fetch(`/api/agendar-reunion?fecha=${fecha}`);
      const data = await response.json();
      setBookedSlots(data.bookedSlots || []);
    } catch {
      setBookedSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    if (formData.fecha) {
      fetchBookedSlots(formData.fecha);
    }
  }, [formData.fecha, fetchBookedSlots]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (!formData.nombre || !formData.email || !formData.telefono) {
      setError(t.errorRequired);
      return;
    }
    setError('');
    setStep(2);
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
      if (data.meetLink) setMeetLink(data.meetLink);

      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Schedule");
        (window as any).fbq("track", "Lead", { content_name: "Meeting Scheduled" });
      }
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: "meeting_scheduled",
        });
      }
      setTimeout(() => router.push('/'), 6000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleShareLink = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://www.eventosorganizador.com/agendar-reunion';
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(isEs ? 'es-ES' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatHour = (hour: string) => {
    const [h, m] = hour.split(':');
    const hNum = parseInt(h);
    if (isEs) return `${h}:${m}`;
    const ampm = hNum >= 12 ? 'PM' : 'AM';
    const h12 = hNum > 12 ? hNum - 12 : hNum;
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
        <title>{isEs ? 'Agendar Reunión' : 'Schedule a Meeting'} — EventosOrganizador</title>
        <meta name="description" content={isEs
          ? 'Agenda una reunión de 30 minutos con nuestro equipo. Lunes a viernes, 17:00-19:30 hora de Madrid.'
          : 'Schedule a 30-minute meeting with our team. Monday to Friday, 5:00-7:30 PM Madrid time.'
        } />
      </Head>
      <Navbar />
      <div className="w-full bg-white">
        <div className="max-w-[700px] mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              {t.title}
            </h1>
            <p className="text-gray-500 text-lg mb-4">
              {t.subtitle}
            </p>
            <button
              onClick={handleShareLink}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#6096B9] border border-[#6096B9]/30 rounded-lg hover:bg-[#6096B9]/5 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
              {copied ? t.linkCopied : t.shareLink}
            </button>
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
                            {date.toLocaleDateString(isEs ? 'es-ES' : 'en-US', { weekday: 'short' })}
                          </div>
                          <div className={`text-sm font-semibold ${isSelected ? 'text-[#6096B9]' : 'text-gray-900'}`}>
                            {date.getDate()} {date.toLocaleDateString(isEs ? 'es-ES' : 'en-US', { month: 'short' })}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {formData.fecha && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.timeLabel} *</label>
                    <p className="text-xs text-gray-400 mb-3">{t.timezone}</p>
                    {loadingSlots ? (
                      <p className="text-sm text-gray-400 py-4 text-center">{t.loadingSlots}</p>
                    ) : (
                      <div className="grid grid-cols-3 gap-2">
                        {ALL_SLOTS.map((hour) => {
                          const isBooked = bookedSlots.includes(hour);
                          const isSelected = formData.hora === hour;
                          return (
                            <button key={hour}
                              disabled={isBooked}
                              onClick={() => setFormData(prev => ({ ...prev, hora: hour }))}
                              className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                                isBooked
                                  ? 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed line-through'
                                  : isSelected
                                    ? 'border-[#6096B9] bg-[#6096B9] text-white'
                                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                              }`}>
                              {formatHour(hour)}
                              {isBooked && <span className="block text-[10px] mt-0.5">{t.booked}</span>}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {formData.fecha && formData.hora && (
                  <div className="bg-[#f6f9fc] border border-gray-200 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-900 mb-1">{t.summary}</p>
                    <p className="text-sm text-gray-600">{formData.nombre} &middot; {formData.email}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {formatDate(new Date(formData.fecha + 'T00:00:00'))} — {formatHour(formData.hora)} ({t.timezone})
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
