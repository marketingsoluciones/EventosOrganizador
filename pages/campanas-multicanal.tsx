import React from 'react';
import { GetStaticPropsContext } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const canales = [
  {
    nombre: 'Email',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: '#6096B9',
    descripcion: 'Campañas de email masivo con plantillas profesionales y seguimiento de aperturas.'
  },
  {
    nombre: 'WhatsApp',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: '#25D366',
    descripcion: 'Mensajes masivos por WhatsApp Business API con respuestas automáticas.'
  },
  {
    nombre: 'SMS',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    color: '#F59E0B',
    descripcion: 'SMS masivos con alta tasa de apertura para comunicaciones urgentes.'
  },
  {
    nombre: 'LinkedIn',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#0A66C2',
    descripcion: 'Automatiza conexiones y mensajes en LinkedIn para prospección B2B.'
  }
];

const features = [
  {
    titulo: 'Secuencias Automatizadas',
    descripcion: 'Crea flujos de mensajes que se envían automáticamente según el comportamiento del lead.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    titulo: 'Personalización Dinámica',
    descripcion: 'Usa variables como nombre, empresa, cargo para personalizar cada mensaje automáticamente.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    titulo: 'A/B Testing',
    descripcion: 'Prueba diferentes versiones de tus mensajes y descubre cuál convierte mejor.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    titulo: 'Horarios Inteligentes',
    descripcion: 'Envía mensajes en el momento óptimo según la zona horaria de cada contacto.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    titulo: 'Detección de Respuestas',
    descripcion: 'Pausa automáticamente la secuencia cuando el lead responde para atención humana.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    titulo: 'Reportes Unificados',
    descripcion: 'Ve el rendimiento de todos tus canales en un solo dashboard con métricas clave.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}

export default function CampanasMulticanal() {
  return (
    <>
      <Head>
        <title>Campañas Multicanal | EventosOrganizador</title>
        <meta name="description" content="Automatiza tus campañas de marketing en múltiples canales: Email, WhatsApp, SMS y LinkedIn. Secuencias inteligentes con personalización y A/B testing." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#6096B9]/10 text-[#6096B9] rounded-full text-sm font-medium mb-6">
              Campañas Multicanal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Un mensaje, <span className="text-[#6096B9]">múltiples canales</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Llega a tus leads donde estén. Automatiza secuencias por Email, WhatsApp,
              SMS y LinkedIn desde una sola plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6096B9] text-white rounded-lg font-medium hover:bg-[#4b7591] transition-all duration-200 shadow-lg"
              >
                Crear mi Primera Campaña
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-[#6096B9] transition-all duration-200"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </section>

        {/* Canales Grid */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todos tus canales conectados
              </h2>
              <p className="text-lg text-gray-600">
                Gestiona Email, WhatsApp, SMS y LinkedIn desde un solo lugar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {canales.map((canal, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${canal.color}15`, color: canal.color }}
                  >
                    {canal.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {canal.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {canal.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sequence Builder Preview */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Constructor de secuencias visual
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Crea flujos de mensajes complejos con nuestro editor drag & drop.
                  Define condiciones, esperas y acciones sin escribir código.
                </p>
                <ul className="space-y-4">
                  {['Arrastra bloques para crear tu flujo', 'Configura triggers automáticos', 'Añade condiciones y bifurcaciones', 'Vista previa antes de activar'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#6096B9]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sequence Preview */}
              <div className="flex-1 w-full">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="space-y-4">
                    {/* Trigger */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-purple-50 rounded-lg p-3 border border-purple-200">
                        <p className="text-sm font-medium text-purple-900">Trigger: Nuevo lead agregado</p>
                      </div>
                    </div>

                    <div className="w-px h-6 bg-gray-300 ml-5" />

                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <p className="text-sm font-medium text-blue-900">Email: Bienvenida + presentación</p>
                      </div>
                    </div>

                    <div className="w-px h-6 bg-gray-300 ml-5" />

                    {/* Wait */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-sm font-medium text-gray-700">Esperar 2 días</p>
                      </div>
                    </div>

                    <div className="w-px h-6 bg-gray-300 ml-5" />

                    {/* WhatsApp */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        </svg>
                      </div>
                      <div className="flex-1 bg-green-50 rounded-lg p-3 border border-green-200">
                        <p className="text-sm font-medium text-green-900">WhatsApp: Seguimiento personalizado</p>
                      </div>
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
                Funcionalidades avanzadas
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#6096B9]/10 rounded-lg flex items-center justify-center text-[#6096B9] mb-4">
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

        {/* CTA Final */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Multiplica tu alcance hoy
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Empieza a automatizar tus campañas multicanal en minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6096B9] text-white rounded-lg font-medium hover:bg-[#4b7591] transition-all duration-200 shadow-lg"
              >
                Comenzar Gratis
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-[#6096B9] transition-all duration-200"
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
