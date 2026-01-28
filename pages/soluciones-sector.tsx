import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

// Datos de las soluciones por sector
const sectores = [
  {
    id: 'agencias',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    titulo: 'Agencias de Marketing',
    subtitulo: 'Gestiona múltiples clientes desde una sola plataforma',
    color: '#FF8C00',
    colorBg: 'rgba(255, 140, 0, 0.1)',
    features: [
      'Multi-cuenta para gestionar todos tus clientes',
      'Reportes personalizados con tu marca',
      'Automatización de campañas multicanal',
      'Dashboard unificado de rendimiento',
      'API para integraciones personalizadas'
    ],
    caso: {
      empresa: 'Agencia Digital XYZ',
      resultado: 'Incrementó su cartera de clientes un 150% en 6 meses gracias a la automatización.'
    }
  },
  {
    id: 'ventas-b2b',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    titulo: 'Equipos de Ventas B2B',
    subtitulo: 'Tu CRM de ventas con prospección incluida',
    color: '#22C55E',
    colorBg: 'rgba(34, 197, 94, 0.1)',
    features: [
      'Pipeline visual Kanban',
      'Generación de leads B2B automática',
      'Secuencias de outreach multicanal',
      'Métricas de rendimiento por comercial',
      'Integración con telefonía'
    ],
    caso: {
      empresa: 'SaaS Enterprise Solutions',
      resultado: 'Generó 8,500 leads nuevos cada mes automatizando su prospección.'
    }
  },
  {
    id: 'wedding-planners',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    titulo: 'Wedding Planners y Eventos',
    subtitulo: 'Todo lo que necesitas para organizar bodas perfectas',
    color: '#EC4899',
    colorBg: 'rgba(236, 72, 153, 0.1)',
    features: [
      'Gestión de invitados y RSVPs',
      'Organización de mesas inteligente',
      'Control de presupuesto detallado',
      'Invitaciones digitales personalizadas',
      'Coordinación de proveedores'
    ],
    caso: {
      empresa: 'Bodas Elegantes',
      resultado: 'Redujo un 60% el tiempo de planificación por evento.'
    }
  }
];

export default function SolucionesSector() {
  return (
    <>
      <Head>
        <title>Soluciones por Sector | EventosOrganizador</title>
        <meta name="description" content="Descubre cómo EventosOrganizador se adapta a las necesidades específicas de tu sector: agencias de marketing, equipos de ventas B2B y wedding planners." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#6096B9]/10 text-[#6096B9] rounded-full text-sm font-medium mb-6">
              Soluciones por Sector
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Una plataforma,{' '}
              <span className="text-[#6096B9]">soluciones específicas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No todos los negocios son iguales. Por eso tenemos configuraciones
              y funcionalidades específicas para cada tipo de empresa.
            </p>
          </div>
        </section>

        {/* Cards de Sectores */}
        <section className="w-full py-16 px-4">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
            {sectores.map((sector, index) => (
              <div
                key={sector.id}
                className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Contenido Principal */}
                  <div className="flex-1">
                    {/* Header del Card */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: sector.colorBg, color: sector.color }}
                      >
                        {sector.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {sector.titulo}
                        </h2>
                        <p className="text-lg" style={{ color: sector.color }}>
                          {sector.subtitulo}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {sector.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            style={{ color: sector.color }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href={`/contacto?sector=${sector.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90 hover:translate-x-1"
                      style={{ backgroundColor: sector.color }}
                    >
                      Ver solución para {sector.titulo.split(' ')[0]}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Caso de Éxito */}
                  <div className="lg:w-80">
                    <div
                      className="p-6 rounded-xl h-full"
                      style={{ backgroundColor: sector.colorBg }}
                    >
                      <span
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: sector.color }}
                      >
                        Caso de Éxito
                      </span>
                      <p className="text-gray-900 font-semibold mt-3 mb-2">
                        {sector.caso.empresa}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {sector.caso.resultado}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#6096B9]/10 text-[#6096B9] rounded-full text-sm font-medium mb-6">
              Empieza Gratis Hoy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Únete a más de 500 empresas que ya optimizan su gestión de eventos.
              <br />
              Prueba gratuita de 14 días • Sin tarjeta de crédito • Soporte personalizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6096B9] text-white rounded-lg font-medium hover:bg-[#4b7591] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Comenzar Prueba Gratuita
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
