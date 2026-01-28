import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const workflows = [
  {
    nombre: 'Lead Scoring Automático',
    trigger: 'Cualquier interacción',
    acciones: ['Calcular puntuación', 'Actualizar etapa', 'Notificar vendedor'],
    color: '#6096B9'
  },
  {
    nombre: 'Nurturing de Leads',
    trigger: 'Nuevo lead capturado',
    acciones: ['Enviar bienvenida', 'Esperar 3 días', 'Enviar contenido'],
    color: '#22C55E'
  },
  {
    nombre: 'Seguimiento Post-Demo',
    trigger: 'Demo completada',
    acciones: ['Crear tarea', 'Enviar resumen', 'Agendar seguimiento'],
    color: '#F59E0B'
  },
  {
    nombre: 'Reactivación de Inactivos',
    trigger: '30 días sin actividad',
    acciones: ['Email reactivación', 'Descuento especial', 'Llamada comercial'],
    color: '#EC4899'
  }
];

const features = [
  {
    icon: '⚡',
    titulo: 'Triggers Inteligentes',
    descripcion: 'Activa workflows por eventos, fechas, cambios de campo o comportamiento.'
  },
  {
    icon: '🔀',
    titulo: 'Lógica Condicional',
    descripcion: 'Crea bifurcaciones basadas en datos del contacto o acciones previas.'
  },
  {
    icon: '⏱️',
    titulo: 'Delays y Esperas',
    descripcion: 'Programa esperas de minutos, horas o días entre acciones.'
  },
  {
    icon: '🔗',
    titulo: 'Integraciones',
    descripcion: 'Conecta con Slack, Zapier, webhooks y más de 100 aplicaciones.'
  },
  {
    icon: '📊',
    titulo: 'Analytics de Workflows',
    descripcion: 'Mide el rendimiento de cada automatización con métricas detalladas.'
  },
  {
    icon: '🧪',
    titulo: 'Modo Test',
    descripcion: 'Prueba tus workflows antes de activarlos con datos de prueba.'
  }
];

export default function Automatizaciones() {
  return (
    <>
      <Head>
        <title>Automatizaciones y Workflows | EventosOrganizador</title>
        <meta name="description" content="Automatiza tareas repetitivas con workflows visuales. Triggers inteligentes, lógica condicional y +100 integraciones disponibles." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              Automatizaciones
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automatiza lo repetitivo,{' '}
              <span className="text-blue-600">enfócate en vender</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Crea workflows visuales que trabajan 24/7. Desde lead scoring hasta
              nurturing, todo en piloto automático.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg"
              >
                Crear mi Primer Workflow
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-blue-600 transition-all duration-200"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </section>

        {/* Workflow Examples */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Workflows pre-configurados
              </h2>
              <p className="text-lg text-gray-600">
                Empieza con plantillas probadas o crea los tuyos desde cero
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {workflows.map((workflow, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: workflow.color }}
                    >
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {workflow.nombre}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        Trigger: {workflow.trigger}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {workflow.acciones.map((accion, actionIdx) => (
                          <span
                            key={actionIdx}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                          >
                            {accion}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
                Constructor visual poderoso
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
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

        {/* Stats */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center text-white">
                <div>
                  <p className="text-5xl font-bold mb-2">15h</p>
                  <p className="text-white/80">Ahorradas por semana</p>
                </div>
                <div>
                  <p className="text-5xl font-bold mb-2">+60%</p>
                  <p className="text-white/80">Más leads contactados</p>
                </div>
                <div>
                  <p className="text-5xl font-bold mb-2">0</p>
                  <p className="text-white/80">Leads olvidados</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Automatiza tu proceso comercial
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Crea tu primer workflow en menos de 10 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg"
              >
                Comenzar Gratis
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-blue-600 transition-all duration-200"
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
