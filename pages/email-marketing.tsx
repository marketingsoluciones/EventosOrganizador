import React from 'react';
import { GetStaticPropsContext } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const features = [
  {
    icon: '🤖',
    titulo: 'Asistente IA para Copywriting',
    descripcion: 'Genera asuntos y contenido de email con IA. Solo describe tu objetivo y obtén textos optimizados.'
  },
  {
    icon: '📊',
    titulo: 'A/B Testing Automático',
    descripcion: 'Prueba múltiples versiones y la IA selecciona automáticamente la ganadora.'
  },
  {
    icon: '🎯',
    titulo: 'Segmentación Inteligente',
    descripcion: 'Crea segmentos basados en comportamiento, intereses y datos del CRM.'
  },
  {
    icon: '⏰',
    titulo: 'Envío en Hora Óptima',
    descripcion: 'La IA analiza cuándo abre cada contacto y envía en su momento ideal.'
  },
  {
    icon: '🎨',
    titulo: 'Editor Drag & Drop',
    descripcion: 'Diseña emails profesionales sin código con plantillas personalizables.'
  },
  {
    icon: '📈',
    titulo: 'Analytics en Tiempo Real',
    descripcion: 'Métricas de apertura, clicks, conversiones y mapas de calor.'
  }
];

const templates = [
  { nombre: 'Bienvenida', color: '#6096B9' },
  { nombre: 'Newsletter', color: '#22C55E' },
  { nombre: 'Promoción', color: '#F59E0B' },
  { nombre: 'Seguimiento', color: '#8B5CF6' },
  { nombre: 'Reactivación', color: '#EC4899' },
  { nombre: 'Abandono', color: '#EF4444' }
];

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}

export default function EmailMarketing() {
  return (
    <>
      <Head>
        <title>Email Marketing con IA | EventosOrganizador</title>
        <meta name="description" content="Plataforma de email marketing potenciada con IA. Genera contenido automáticamente, optimiza envíos y aumenta conversiones." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-purple-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              Email Marketing + IA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Emails que <span className="text-purple-600">convierten solos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              La IA escribe tus emails, optimiza los envíos y maximiza conversiones.
              Tú solo defines el objetivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 shadow-lg"
              >
                Probar Email con IA
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-purple-600 transition-all duration-200"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Email marketing del futuro
              </h2>
              <p className="text-lg text-gray-600">
                Potenciado con inteligencia artificial en cada paso
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300"
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

        {/* Templates Section */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Plantillas para cada ocasión
              </h2>
              <p className="text-lg text-gray-600">
                +50 plantillas profesionales listas para personalizar
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {templates.map((template, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div
                    className="w-full h-24 rounded-lg mb-3"
                    style={{ backgroundColor: `${template.color}20` }}
                  />
                  <p className="text-sm font-medium text-gray-700">{template.nombre}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                <div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">+45%</p>
                  <p className="text-white/80">Tasa de apertura</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">3x</p>
                  <p className="text-white/80">Más clicks</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">-70%</p>
                  <p className="text-white/80">Tiempo de creación</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">+28%</p>
                  <p className="text-white/80">Conversiones</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Deja que la IA escriba por ti
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Empieza a enviar emails que realmente conviertan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 shadow-lg"
              >
                Comenzar Gratis
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-purple-600 transition-all duration-200"
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
