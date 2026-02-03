import React from 'react';
import { GetStaticPropsContext } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const dashboards = [
  { nombre: 'Ventas', metricas: ['Pipeline', 'Conversión', 'Ingresos', 'Forecast'], icon: '📈' },
  { nombre: 'Marketing', metricas: ['Leads', 'Campañas', 'ROI', 'Canales'], icon: '📊' },
  { nombre: 'Equipo', metricas: ['Actividad', 'Objetivos', 'Ranking', 'Productividad'], icon: '👥' },
  { nombre: 'Eventos', metricas: ['Asistentes', 'Check-ins', 'Satisfacción', 'Ingresos'], icon: '🎪' }
];

const features = [
  {
    icon: '📊',
    titulo: 'Dashboards Personalizables',
    descripcion: 'Crea dashboards con las métricas que más te importan con drag & drop.'
  },
  {
    icon: '📅',
    titulo: 'Reportes Programados',
    descripcion: 'Recibe reportes automáticos en tu email diario, semanal o mensual.'
  },
  {
    icon: '🔍',
    titulo: 'Filtros Avanzados',
    descripcion: 'Segmenta datos por fecha, equipo, canal, etapa y más de 50 dimensiones.'
  },
  {
    icon: '📤',
    titulo: 'Exportación Múltiple',
    descripcion: 'Exporta a Excel, PDF, Google Sheets o conecta con tu BI favorito.'
  },
  {
    icon: '⚡',
    titulo: 'Datos en Tiempo Real',
    descripcion: 'Métricas actualizadas al instante sin necesidad de refrescar.'
  },
  {
    icon: '🎯',
    titulo: 'Objetivos y KPIs',
    descripcion: 'Define metas y visualiza el progreso con indicadores visuales.'
  }
];

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}

export default function ReportesAnalytics() {
  return (
    <>
      <Head>
        <title>Reportes y Analytics | EventosOrganizador</title>
        <meta name="description" content="Dashboards personalizables y reportes en tiempo real. Toma decisiones basadas en datos con analytics avanzado." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-indigo-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              Reportes y Analytics
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Datos que impulsan{' '}
              <span className="text-indigo-600">decisiones</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Dashboards en tiempo real, reportes automáticos y analytics avanzado.
              Todo lo que necesitas para tomar decisiones informadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all duration-200 shadow-lg"
              >
                Ver mis Analytics
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-indigo-600 transition-all duration-200"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Dashboard de Ventas</h3>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-2">
                  <option>Últimos 30 días</option>
                  <option>Este mes</option>
                  <option>Este trimestre</option>
                </select>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Leads Nuevos</p>
                  <p className="text-2xl font-bold text-gray-900">847</p>
                  <p className="text-xs text-green-600">+12% vs mes anterior</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Tasa Conversión</p>
                  <p className="text-2xl font-bold text-gray-900">24.5%</p>
                  <p className="text-xs text-green-600">+3.2% vs mes anterior</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Valor Pipeline</p>
                  <p className="text-2xl font-bold text-gray-900">$284K</p>
                  <p className="text-xs text-green-600">+18% vs mes anterior</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Deals Cerrados</p>
                  <p className="text-2xl font-bold text-gray-900">32</p>
                  <p className="text-xs text-red-600">-5% vs mes anterior</p>
                </div>
              </div>

              {/* Chart placeholder */}
              <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 70, 95].map((h, idx) => (
                    <div
                      key={idx}
                      className="w-8 bg-indigo-500 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Types */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dashboards para cada área
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboards.map((dashboard, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <span className="text-4xl mb-4 block">{dashboard.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {dashboard.nombre}
                  </h3>
                  <ul className="space-y-2">
                    {dashboard.metricas.map((metrica, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {metrica}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300"
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
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Toma decisiones basadas en datos
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Configura tu dashboard en minutos y empieza a medir lo que importa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all duration-200 shadow-lg"
              >
                Comenzar Gratis
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-indigo-600 transition-all duration-200"
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
