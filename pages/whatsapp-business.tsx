import React from 'react';
import { GetStaticPropsContext } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    titulo: 'Mensajes Masivos',
    descripcion: 'Envía mensajes a miles de contactos simultáneamente con plantillas aprobadas por Meta.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    titulo: 'Chatbots Inteligentes',
    descripcion: 'Responde automáticamente 24/7 con flujos conversacionales y palabras clave.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    titulo: 'Bandeja Compartida',
    descripcion: 'Todo tu equipo puede atender conversaciones desde una única bandeja de entrada.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    titulo: 'Etiquetas y Segmentación',
    descripcion: 'Organiza contactos con etiquetas y crea segmentos para campañas específicas.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    titulo: 'Plantillas Aprobadas',
    descripcion: 'Biblioteca de plantillas pre-aprobadas listas para usar o crea las tuyas.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    titulo: 'Analytics Completos',
    descripcion: 'Métricas de entrega, lectura, respuesta y conversión de cada campaña.'
  }
];

const useCases = [
  { caso: 'Confirmación de citas', icono: '📅' },
  { caso: 'Recordatorios de pago', icono: '💳' },
  { caso: 'Actualizaciones de pedido', icono: '📦' },
  { caso: 'Promociones y ofertas', icono: '🎁' },
  { caso: 'Soporte al cliente', icono: '🎧' },
  { caso: 'Encuestas de satisfacción', icono: '⭐' }
];

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}

export default function WhatsAppBusiness() {
  return (
    <>
      <Head>
        <title>WhatsApp Business API | EventosOrganizador</title>
        <meta name="description" content="Conecta WhatsApp Business API a tu CRM. Envía mensajes masivos, automatiza respuestas con chatbots y gestiona conversaciones en equipo." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-green-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                  WhatsApp Business API
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  WhatsApp profesional{' '}
                  <span className="text-[#25D366]">para tu negocio</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Conecta con tus clientes donde ya están. Mensajes masivos,
                  chatbots y atención en equipo desde una sola plataforma.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://app.eventosorganizador.com/login?q=register&d=/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#1da851] transition-all duration-200 shadow-lg"
                  >
                    Conectar WhatsApp
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="/agendar-reunion"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-[#25D366] transition-all duration-200"
                  >
                    Ver Demo
                  </a>
                </div>
              </div>

              {/* Chat Preview */}
              <div className="flex-1 w-full max-w-md">
                <div className="bg-[#ECE5DD] rounded-2xl shadow-xl overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full" />
                    <div>
                      <p className="font-medium">Tu Empresa</p>
                      <p className="text-xs text-green-200">En línea</p>
                    </div>
                  </div>
                  {/* Messages */}
                  <div className="p-4 space-y-3 min-h-[300px]">
                    <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm">¡Hola! 👋 Gracias por contactarnos. ¿En qué podemos ayudarte hoy?</p>
                      <p className="text-xs text-gray-400 text-right mt-1">10:30</p>
                    </div>
                    <div className="bg-[#DCF8C6] rounded-lg p-3 max-w-[80%] ml-auto shadow-sm">
                      <p className="text-sm">Hola, quiero información sobre sus servicios</p>
                      <p className="text-xs text-gray-500 text-right mt-1">10:31 ✓✓</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                      <p className="text-sm">¡Perfecto! Te comparto nuestro catálogo. ¿Prefieres que te llamemos o seguimos por aquí?</p>
                      <p className="text-xs text-gray-400 text-right mt-1">10:31</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todo el poder de WhatsApp Business API
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sin límites de dispositivos, con automatización y métricas profesionales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#25D366] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-[#25D366] mb-4">
                    {feature.icon}
                  </div>
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

        {/* Use Cases */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Casos de uso populares
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {useCases.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl mb-2 block">{item.icono}</span>
                  <p className="text-sm font-medium text-gray-700">{item.caso}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#25D366] rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                <div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">98%</p>
                  <p className="text-white/80">Tasa de apertura</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">45%</p>
                  <p className="text-white/80">Tasa de respuesta</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">24/7</p>
                  <p className="text-white/80">Disponibilidad</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">10x</p>
                  <p className="text-white/80">vs Email tradicional</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empieza a usar WhatsApp Business API hoy
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Configura tu cuenta en minutos y empieza a automatizar conversaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#1da851] transition-all duration-200 shadow-lg"
              >
                Conectar WhatsApp Gratis
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-[#25D366] transition-all duration-200"
              >
                Hablar con un Especialista
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
