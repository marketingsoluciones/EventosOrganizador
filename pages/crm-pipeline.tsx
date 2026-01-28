import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    titulo: 'Pipeline Visual Kanban',
    descripcion: 'Arrastra y suelta contactos entre etapas. Visualiza todo tu embudo de ventas de un vistazo.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    titulo: 'Etapas Personalizables',
    descripcion: 'Crea las etapas que necesites: Nuevo Lead, Contactado, Propuesta, Negociación, Ganado, Perdido.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    titulo: 'Recordatorios Automáticos',
    descripcion: 'Nunca pierdas un seguimiento. Recibe alertas cuando un lead lleve demasiado tiempo sin actividad.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    titulo: 'Métricas en Tiempo Real',
    descripcion: 'Tasa de conversión por etapa, valor del pipeline, tiempo promedio de cierre y más.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    titulo: 'Asignación de Equipos',
    descripcion: 'Distribuye leads automáticamente entre tu equipo según reglas o round-robin.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    titulo: 'Historial Completo',
    descripcion: 'Cada interacción registrada: llamadas, emails, notas, cambios de etapa con fecha y hora.'
  }
];

const etapas = [
  { nombre: 'Nuevo Lead', cantidad: 45, color: '#6096B9' },
  { nombre: 'Contactado', cantidad: 32, color: '#22C55E' },
  { nombre: 'Propuesta', cantidad: 18, color: '#F59E0B' },
  { nombre: 'Negociación', cantidad: 12, color: '#8B5CF6' },
  { nombre: 'Ganado', cantidad: 8, color: '#10B981' }
];

export default function CRMPipeline() {
  return (
    <>
      <Head>
        <title>CRM Visual con Pipeline Kanban | EventosOrganizador</title>
        <meta name="description" content="Gestiona tus leads y oportunidades con nuestro CRM visual tipo Kanban. Pipeline personalizable, métricas en tiempo real y automatización de seguimientos." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block px-4 py-2 bg-[#6096B9]/10 text-[#6096B9] rounded-full text-sm font-medium mb-6">
                  CRM Visual
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Tu pipeline de ventas,{' '}
                  <span className="text-[#6096B9]">visual y poderoso</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Gestiona cada oportunidad con un tablero Kanban intuitivo.
                  Arrastra, suelta y convierte más leads en clientes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://app.eventosorganizador.com/login?q=register&d=/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6096B9] text-white rounded-lg font-medium hover:bg-[#4b7591] transition-all duration-200 shadow-lg"
                  >
                    Probar CRM Gratis
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

              {/* Pipeline Preview */}
              <div className="flex-1 w-full max-w-xl">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-gray-900">Pipeline de Ventas</h3>
                    <span className="text-sm text-gray-500">115 leads activos</span>
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {etapas.map((etapa, idx) => (
                      <div key={idx} className="flex-shrink-0 w-28">
                        <div
                          className="h-2 rounded-full mb-2"
                          style={{ backgroundColor: etapa.color }}
                        />
                        <p className="text-xs font-medium text-gray-700 truncate">{etapa.nombre}</p>
                        <p className="text-lg font-bold" style={{ color: etapa.color }}>{etapa.cantidad}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Valor total del pipeline</span>
                      <span className="font-semibold text-gray-900">$284,500</span>
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
                Todo lo que necesitas para cerrar más ventas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Un CRM diseñado para equipos que quieren resultados, no complicaciones.
              </p>
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

        {/* Kanban Demo Section */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Interfaz Kanban intuitiva
              </h2>
              <p className="text-lg text-gray-600">
                Arrastra y suelta para mover leads entre etapas
              </p>
            </div>

            {/* Kanban Board Preview */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 overflow-x-auto">
              <div className="flex gap-4 min-w-[900px]">
                {etapas.map((etapa, idx) => (
                  <div key={idx} className="flex-1 min-w-[170px]">
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: etapa.color }}
                      />
                      <span className="font-medium text-gray-900">{etapa.nombre}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {etapa.cantidad}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].slice(0, idx === 0 ? 3 : idx === 4 ? 1 : 2).map((_, cardIdx) => (
                        <div
                          key={cardIdx}
                          className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <p className="font-medium text-gray-900 text-sm mb-1">
                            Lead #{idx * 10 + cardIdx + 1}
                          </p>
                          <p className="text-xs text-gray-500 mb-2">empresa@ejemplo.com</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium" style={{ color: etapa.color }}>
                              ${(5000 + cardIdx * 2500).toLocaleString()}
                            </span>
                            <span className="text-xs text-gray-400">Hace 2h</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#6096B9] rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Resultados que hablan
                </h2>
                <p className="text-white/80 text-lg">
                  Empresas que usan nuestro CRM reportan mejoras significativas
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-5xl font-bold text-white mb-2">+35%</p>
                  <p className="text-white/80">Tasa de conversión</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-white mb-2">-40%</p>
                  <p className="text-white/80">Tiempo de cierre</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-white mb-2">2.5x</p>
                  <p className="text-white/80">Productividad del equipo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empieza a cerrar más ventas hoy
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Configura tu pipeline en minutos. Sin complicaciones, sin compromisos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6096B9] text-white rounded-lg font-medium hover:bg-[#4b7591] transition-all duration-200 shadow-lg"
              >
                Crear mi Pipeline Gratis
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-[#6096B9] transition-all duration-200"
              >
                Hablar con Ventas
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
