import React from 'react';
import { GetStaticPropsContext } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const features = [
  { icon: '👥', titulo: 'Gestión de Invitados', descripcion: 'Lista de invitados, confirmaciones RSVP, check-in QR y seguimiento en tiempo real.' },
  { icon: '🪑', titulo: 'Organización de Mesas', descripcion: 'Asigna invitados a mesas con nuestro editor visual drag & drop.' },
  { icon: '💰', titulo: 'Control de Presupuesto', descripcion: 'Registra gastos, compara con presupuesto y genera reportes financieros.' },
  { icon: '💌', titulo: 'Invitaciones Digitales', descripcion: 'Crea y envía invitaciones personalizadas con confirmación automática.' },
  { icon: '📋', titulo: 'Timeline del Evento', descripcion: 'Organiza cada momento del evento con cronograma detallado.' },
  { icon: '🤝', titulo: 'Gestión de Proveedores', descripcion: 'Coordina floristas, catering, DJ, fotógrafos desde una sola plataforma.' },
  { icon: '🎁', titulo: 'Lista de Regalos', descripcion: 'Crea listas de regalos online para que tus invitados elijan fácilmente.' },
  { icon: '📊', titulo: 'Dashboard del Evento', descripcion: 'Vista general con confirmaciones, pendientes, pagos y tareas.' }
];

const tiposEvento = [
  { nombre: 'Bodas', emoji: '💒', cantidad: '+5,000 bodas organizadas' },
  { nombre: 'XV Años', emoji: '👑', cantidad: '+2,000 celebraciones' },
  { nombre: 'Baby Showers', emoji: '🍼', cantidad: '+1,500 eventos' },
  { nombre: 'Corporativos', emoji: '🏢', cantidad: '+3,000 eventos' },
  { nombre: 'Cumpleaños', emoji: '🎂', cantidad: '+4,000 fiestas' },
  { nombre: 'Graduaciones', emoji: '🎓', cantidad: '+1,000 ceremonias' }
];

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}

export default function GestionEventos() {
  return (
    <>
      <Head>
        <title>Gestión de Eventos y Bodas | EventosOrganizador</title>
        <meta name="description" content="Plataforma completa para organizar bodas y eventos. Gestión de invitados, mesas, presupuesto, invitaciones digitales y más." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-pink-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-6">
              Gestión de Eventos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Eventos perfectos,{' '}
              <span className="text-pink-500">sin estrés</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Desde la lista de invitados hasta el último detalle. Todo lo que necesitas
              para organizar bodas y eventos memorables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-all duration-200 shadow-lg"
              >
                Organizar mi Evento
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-pink-500 transition-all duration-200"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </section>

        {/* Tipos de Evento */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Para todo tipo de eventos
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tiposEvento.map((tipo, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:shadow-lg hover:border-pink-300 transition-all duration-300"
                >
                  <span className="text-4xl mb-2 block">{tipo.emoji}</span>
                  <h3 className="font-semibold text-gray-900 mb-1">{tipo.nombre}</h3>
                  <p className="text-xs text-gray-500">{tipo.cantidad}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todo lo que necesitas en un solo lugar
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-3xl mb-3 block">{feature.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                <div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">+15K</p>
                  <p className="text-white/80">Eventos organizados</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">+500K</p>
                  <p className="text-white/80">Invitados gestionados</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">98%</p>
                  <p className="text-white/80">Satisfacción</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">-60%</p>
                  <p className="text-white/80">Tiempo de planificación</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tu próximo evento empieza aquí
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Crea tu evento en minutos y empieza a organizar como profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-all duration-200 shadow-lg"
              >
                Comenzar Gratis
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-pink-500 transition-all duration-200"
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
