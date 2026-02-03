import React from 'react';
import { GetStaticPropsContext } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const casos = [
  {
    empresa: 'Agencia Digital MarketPro',
    sector: 'Agencia de Marketing',
    logo: '🏢',
    persona: 'María García, CEO',
    problema: 'Gestionaban 40+ clientes con hojas de cálculo y herramientas dispersas.',
    solucion: 'Implementaron EventosOrganizador como CRM centralizado con automatizaciones.',
    resultados: [
      { metrica: '+150%', descripcion: 'Cartera de clientes' },
      { metrica: '-60%', descripcion: 'Tiempo administrativo' },
      { metrica: '+80%', descripcion: 'Satisfacción del cliente' }
    ],
    testimonio: '"EventosOrganizador transformó completamente nuestra operación. Pasamos de perder leads a tener un sistema que trabaja 24/7 por nosotros."',
    color: '#FF8C00'
  },
  {
    empresa: 'Bodas Elegantes',
    sector: 'Wedding Planner',
    logo: '💒',
    persona: 'Ana Rodríguez, Fundadora',
    problema: 'Coordinaba bodas manualmente con WhatsApp y Excel, perdiendo detalles importantes.',
    solucion: 'Migró toda su gestión de eventos a EventosOrganizador.',
    resultados: [
      { metrica: '3x', descripcion: 'Bodas simultáneas' },
      { metrica: '-40%', descripcion: 'Tiempo por boda' },
      { metrica: '100%', descripcion: 'Invitados check-in QR' }
    ],
    testimonio: '"Ahora puedo manejar 3 bodas a la vez sin perder un solo detalle. El sistema de invitados y mesas es increíble."',
    color: '#EC4899'
  },
  {
    empresa: 'TechSales Corp',
    sector: 'Ventas B2B',
    logo: '🚀',
    persona: 'Carlos Mendoza, VP de Ventas',
    problema: 'Equipo de 15 vendedores sin visibilidad del pipeline ni prospección automatizada.',
    solucion: 'Desplegaron el CRM con pipeline Kanban y campañas multicanal.',
    resultados: [
      { metrica: '+200%', descripcion: 'Leads generados' },
      { metrica: '+35%', descripcion: 'Tasa de conversión' },
      { metrica: '$1.2M', descripcion: 'Revenue incremental' }
    ],
    testimonio: '"El pipeline visual y las automatizaciones nos dieron la visibilidad que necesitábamos. Los números hablan solos."',
    color: '#22C55E'
  },
  {
    empresa: 'Festival Música Viva',
    sector: 'Eventos de Ticketing',
    logo: '🎵',
    persona: 'Roberto Sánchez, Director',
    problema: 'Sistema de ticketing desconectado del CRM y marketing.',
    solucion: 'Unificaron ticketing, CRM y campañas en EventosOrganizador.',
    resultados: [
      { metrica: '+45%', descripcion: 'Ventas de tickets' },
      { metrica: '15K', descripcion: 'Asistentes gestionados' },
      { metrica: '98%', descripcion: 'Check-in exitoso' }
    ],
    testimonio: '"Tener todo integrado nos permitió entender mejor a nuestra audiencia y vender más tickets."',
    color: '#8B5CF6'
  }
];

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}

export default function CasosExito() {
  return (
    <>
      <Head>
        <title>Casos de Éxito | EventosOrganizador</title>
        <meta name="description" content="Descubre cómo empresas reales han transformado sus resultados con EventosOrganizador. Casos de éxito de agencias, wedding planners y equipos de ventas." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#6096B9]/10 text-[#6096B9] rounded-full text-sm font-medium mb-6">
              Casos de Éxito
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Resultados reales de{' '}
              <span className="text-[#6096B9]">empresas reales</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conoce cómo nuestros clientes han transformado su negocio con EventosOrganizador.
            </p>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="w-full py-12 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#6096B9] rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                <div>
                  <p className="text-3xl md:text-4xl font-bold">+500</p>
                  <p className="text-white/80 text-sm">Empresas activas</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold">+15K</p>
                  <p className="text-white/80 text-sm">Eventos realizados</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold">+2M</p>
                  <p className="text-white/80 text-sm">Leads gestionados</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold">98%</p>
                  <p className="text-white/80 text-sm">Satisfacción</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="w-full py-12 px-4">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
            {casos.map((caso, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{caso.logo}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{caso.empresa}</h3>
                        <p className="text-sm" style={{ color: caso.color }}>{caso.sector}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{caso.persona}</span>
                  </div>

                  {/* Problem / Solution */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-red-700 mb-2">El Problema</p>
                      <p className="text-gray-700 text-sm">{caso.problema}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-700 mb-2">La Solución</p>
                      <p className="text-gray-700 text-sm">{caso.solucion}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {caso.resultados.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="text-center p-4 rounded-lg"
                        style={{ backgroundColor: `${caso.color}10` }}
                      >
                        <p className="text-2xl md:text-3xl font-bold" style={{ color: caso.color }}>
                          {res.metrica}
                        </p>
                        <p className="text-gray-600 text-sm mt-1">{res.descripcion}</p>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 pl-4 italic text-gray-600" style={{ borderColor: caso.color }}>
                    {caso.testimonio}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tu historia de éxito empieza aquí
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Únete a las empresas que ya transformaron sus resultados.
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
