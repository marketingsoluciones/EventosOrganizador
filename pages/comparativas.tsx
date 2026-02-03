import React from 'react';
import { GetStaticPropsContext } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const competidores = ['EventosOrganizador', 'HubSpot', 'Salesforce', 'Pipedrive'];

const comparativas = [
  { feature: 'CRM Visual Kanban', valores: [true, true, true, true] },
  { feature: 'Gestión de Eventos', valores: [true, false, false, false] },
  { feature: 'WhatsApp Business API', valores: [true, false, false, false] },
  { feature: 'Email Marketing con IA', valores: [true, true, false, false] },
  { feature: 'Facturación Integrada', valores: [true, false, false, false] },
  { feature: 'Automatizaciones Visuales', valores: [true, true, true, false] },
  { feature: 'OCR Tarjetas de Visita', valores: [true, false, false, false] },
  { feature: 'Campañas Multicanal', valores: [true, true, false, false] },
  { feature: 'Invitaciones Digitales', valores: [true, false, false, false] },
  { feature: 'API REST Completa', valores: [true, true, true, true] },
  { feature: 'Reportes Personalizables', valores: [true, true, true, true] },
  { feature: 'Soporte en Español', valores: [true, false, false, false] },
  { feature: 'Precio desde', valores: ['$29/mes', '$45/mes', '$75/mes', '$15/mes'] }
];

const ventajas = [
  {
    titulo: 'Todo en Uno',
    descripcion: 'CRM + Eventos + Marketing + Facturación en una sola plataforma. Sin necesidad de pagar por múltiples herramientas.',
    icon: '🎯'
  },
  {
    titulo: 'Especializado en Eventos',
    descripcion: 'El único CRM con gestión nativa de eventos, bodas, invitados y mesas. Sin plugins ni integraciones externas.',
    icon: '🎪'
  },
  {
    titulo: 'WhatsApp Nativo',
    descripcion: 'Integración directa con WhatsApp Business API. Envía mensajes masivos y automatiza conversaciones.',
    icon: '💬'
  },
  {
    titulo: 'Soporte en Español',
    descripcion: 'Equipo de soporte nativo en español. Documentación, tutoriales y asistencia en tu idioma.',
    icon: '🇪🇸'
  }
];

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}

export default function Comparativas() {
  return (
    <>
      <Head>
        <title>Comparativas vs Competencia | EventosOrganizador</title>
        <meta name="description" content="Compara EventosOrganizador con HubSpot, Salesforce y Pipedrive. Descubre por qué somos la mejor opción para gestión de eventos y CRM." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#6096B9]/10 text-[#6096B9] rounded-full text-sm font-medium mb-6">
              Comparativas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              ¿Por qué elegir{' '}
              <span className="text-[#6096B9]">EventosOrganizador</span>?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Compara funcionalidades, precios y capacidades frente a otras plataformas del mercado.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="w-full py-16 px-4">
          <div className="max-w-[1200px] mx-auto overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 pr-4 text-gray-700 font-semibold">Funcionalidad</th>
                  {competidores.map((comp, idx) => (
                    <th
                      key={idx}
                      className={`py-4 px-4 text-center font-semibold ${
                        idx === 0 ? 'text-[#6096B9] bg-[#6096B9]/5 rounded-t-lg' : 'text-gray-700'
                      }`}
                    >
                      {comp}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparativas.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100">
                    <td className="py-4 pr-4 text-gray-800 font-medium">{row.feature}</td>
                    {row.valores.map((valor, vIdx) => (
                      <td
                        key={vIdx}
                        className={`py-4 px-4 text-center ${
                          vIdx === 0 ? 'bg-[#6096B9]/5' : ''
                        }`}
                      >
                        {typeof valor === 'boolean' ? (
                          valor ? (
                            <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )
                        ) : (
                          <span className={`font-semibold ${vIdx === 0 ? 'text-[#6096B9]' : 'text-gray-700'}`}>
                            {valor}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Advantages */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nuestras ventajas competitivas
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ventajas.map((ventaja, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <span className="text-3xl mb-3 block">{ventaja.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {ventaja.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{ventaja.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Prueba la diferencia
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              14 días gratis para que compruebes por ti mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6096B9] text-white rounded-lg font-medium hover:bg-[#4b7591] transition-all duration-200 shadow-lg"
              >
                Comenzar Prueba Gratis
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
