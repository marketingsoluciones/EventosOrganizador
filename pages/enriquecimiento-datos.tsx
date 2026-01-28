import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const features = [
  {
    icon: '🔍',
    titulo: 'Búsqueda de Datos Empresariales',
    descripcion: 'Encuentra email, teléfono, cargo y empresa de cualquier prospecto automáticamente.'
  },
  {
    icon: '📸',
    titulo: 'OCR para Tarjetas de Visita',
    descripcion: 'Escanea tarjetas de presentación y extrae los datos al CRM en segundos.'
  },
  {
    icon: '🔗',
    titulo: 'Enriquecimiento de LinkedIn',
    descripcion: 'Extrae información de perfiles de LinkedIn y agrégala a tus contactos.'
  },
  {
    icon: '✅',
    titulo: 'Validación de Emails',
    descripcion: 'Verifica que los emails existan y sean válidos antes de enviar campañas.'
  },
  {
    icon: '🏢',
    titulo: 'Datos de Empresa',
    descripcion: 'Obtén información de la empresa: tamaño, industria, ingresos, tecnologías.'
  },
  {
    icon: '🔄',
    titulo: 'Actualización Automática',
    descripcion: 'Mantén tus datos actualizados con verificación periódica automática.'
  }
];

export default function EnriquecimientoDatos() {
  return (
    <>
      <Head>
        <title>Enriquecimiento de Datos y OCR | EventosOrganizador</title>
        <meta name="description" content="Enriquece automáticamente tus contactos con datos empresariales. OCR para tarjetas, validación de emails y datos de LinkedIn." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-orange-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              Enriquecimiento de Datos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Datos completos,{' '}
              <span className="text-orange-500">contactos valiosos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Convierte un email en un perfil completo. Escanea tarjetas, valida datos
              y enriquece tu CRM automáticamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all duration-200 shadow-lg"
              >
                Enriquecer mis Datos
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-orange-500 transition-all duration-200"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                De un email a un perfil completo
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-sm text-gray-500 mb-4">ANTES</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">📧</span>
                    <span className="text-gray-700">juan@empresa.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">📱</span>
                    <span className="text-gray-400">Sin teléfono</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">💼</span>
                    <span className="text-gray-400">Sin cargo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">🏢</span>
                    <span className="text-gray-400">Sin empresa</span>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <p className="text-sm text-orange-600 mb-4">DESPUÉS</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span>📧</span>
                    <span className="text-gray-900 font-medium">juan@empresa.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>📱</span>
                    <span className="text-gray-900">+52 55 1234 5678</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>💼</span>
                    <span className="text-gray-900">Director de Marketing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>🏢</span>
                    <span className="text-gray-900">TechCorp S.A. • 50-200 empleados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>🔗</span>
                    <span className="text-blue-600">linkedin.com/in/juanperez</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-4xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Potencia tu base de datos hoy
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Empieza a enriquecer tus contactos automáticamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all duration-200 shadow-lg"
              >
                Comenzar Gratis
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-orange-500 transition-all duration-200"
              >
                Agendar Demo
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
