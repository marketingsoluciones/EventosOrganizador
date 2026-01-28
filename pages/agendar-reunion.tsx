import React, { useState } from 'react';
import { useRouter } from 'next/router';

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
      setTimeout(() => router.push('/'), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Generar fechas disponibles (próximos 30 días laborables)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);

    while (dates.length < 30) {
      currentDate.setDate(currentDate.getDate() + 1);
      const dayOfWeek = currentDate.getDay();

      // Solo días laborables (1-5 = Lunes-Viernes)
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        dates.push(new Date(currentDate));
      }
    }

    return dates;
  };

  // Horarios disponibles (5 PM - 8 PM en intervalos de 30 minutos)
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6096B9]/10 to-white px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¡Reunión Agendada!</h2>
          <p className="text-gray-600 mb-2">
            Hemos enviado una confirmación a <strong>{formData.email}</strong>
          </p>
          <p className="text-sm text-gray-500">
            Redirigiendo a la página principal...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6096B9]/10 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Agenda tu Reunión</h1>
          <p className="text-lg text-gray-600">
            Completa el formulario y selecciona el mejor horario para ti
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#6096B9] text-white' : 'bg-gray-200 text-gray-500'} font-semibold`}>
              1
            </div>
            <div className={`w-24 h-1 ${step >= 2 ? 'bg-[#6096B9]' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#6096B9] text-white' : 'bg-gray-200 text-gray-500'} font-semibold`}>
              2
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
              {error}
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tus Datos</h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6096B9] focus:border-transparent transition-all"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6096B9] focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6096B9] focus:border-transparent transition-all"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Motivo de la Reunión (Opcional)
                </label>
                <textarea
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6096B9] focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntanos brevemente de qué trata tu consulta..."
                />
              </div>

              <button
                onClick={handleNextStep}
                className="w-full bg-[#6096B9] text-white py-4 rounded-lg font-semibold hover:bg-[#4b7591] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Continuar
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Selecciona Fecha y Hora</h2>
                <button
                  onClick={() => setStep(1)}
                  className="text-[#6096B9] hover:underline font-medium"
                >
                  ← Volver
                </button>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Fecha *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {getAvailableDates().slice(0, 12).map((date, index) => {
                    const dateStr = date.toISOString().split('T')[0];
                    const isSelected = formData.fecha === dateStr;

                    return (
                      <button
                        key={index}
                        onClick={() => setFormData(prev => ({ ...prev, fecha: dateStr, hora: '' }))}
                        className={`p-3 rounded-lg border-2 transition-all text-left ${
                          isSelected
                            ? 'border-[#6096B9] bg-[#6096B9]/10'
                            : 'border-gray-200 hover:border-[#6096B9]/50'
                        }`}
                      >
                        <div className="text-xs text-gray-500 capitalize">
                          {date.toLocaleDateString('es-ES', { weekday: 'short' })}
                        </div>
                        <div className="font-semibold text-gray-900">
                          {date.getDate()} {date.toLocaleDateString('es-ES', { month: 'short' })}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {formData.fecha && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Hora (5:00 PM - 8:00 PM) *
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {availableHours.map((hour) => {
                      const isSelected = formData.hora === hour;

                      return (
                        <button
                          key={hour}
                          onClick={() => setFormData(prev => ({ ...prev, hora: hour }))}
                          className={`p-3 rounded-lg border-2 transition-all font-semibold ${
                            isSelected
                              ? 'border-[#6096B9] bg-[#6096B9] text-white'
                              : 'border-gray-200 hover:border-[#6096B9]/50 text-gray-700'
                          }`}
                        >
                          {hour}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {formData.fecha && formData.hora && (
                <div className="bg-[#6096B9]/10 border border-[#6096B9]/30 rounded-xl p-4 mt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Resumen de tu reunión:</h3>
                  <p className="text-gray-700">
                    <strong>{formData.nombre}</strong> • {formData.email}
                  </p>
                  <p className="text-gray-700 mt-2">
                    📅 {formatDate(new Date(formData.fecha + 'T00:00:00'))} a las {formData.hora}
                  </p>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading || !formData.fecha || !formData.hora}
                className="w-full bg-[#6096B9] text-white py-4 rounded-lg font-semibold hover:bg-[#4b7591] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Agendando...' : 'Confirmar Reunión'}
              </button>
            </div>
          )}
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Información Importante</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Horario disponible: Lunes a Viernes de 5:00 PM a 8:00 PM</li>
                <li>• Recibirás confirmación por email</li>
                <li>• La reunión tiene una duración aproximada de 30 minutos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendarReunion;
