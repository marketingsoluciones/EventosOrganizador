import React, { useState } from 'react';
import { GetStaticPropsContext } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const planes = [
  {
    nombre: 'Starter',
    descripcion: 'Para emprendedores y consultores independientes',
    precioMensual: 49,
    precioAnual: 39,
    features: [
      '500 leads/mes',
      'Hasta 1.000 contactos',
      '1 usuario',
      'CRM Pipeline Kanban',
      'Facturación básica',
      'Soporte por email'
    ],
    destacado: false,
    color: '#6096B9'
  },
  {
    nombre: 'Growth',
    descripcion: 'Para equipos en crecimiento',
    precioMensual: 149,
    precioAnual: 119,
    features: [
      '2.500 leads/mes',
      'Hasta 10.000 contactos',
      'Hasta 5 usuarios',
      'CRM + ERP completo',
      'Automatizaciones 24/7',
      'WhatsApp Business',
      'Facturación + OCR',
      'Soporte por chat'
    ],
    destacado: true,
    color: '#6096B9'
  },
  {
    nombre: 'Scale',
    descripcion: 'Para empresas y agencias',
    precioMensual: 299,
    precioAnual: 239,
    features: [
      '10.000 leads/mes',
      'Hasta 50.000 contactos',
      'Hasta 15 usuarios',
      'Todos los módulos',
      'OCR con Claude Vision',
      'Analytics en tiempo real',
      'API + Webhooks',
      'Soporte prioritario 24/7',
      'Marca blanca'
    ],
    destacado: false,
    color: '#6096B9'
  },
  {
    nombre: 'Enterprise',
    descripcion: 'Para grandes organizaciones',
    precioMensual: 0,
    precioAnual: 0,
    features: [
      'Leads ilimitados',
      'Contactos ilimitados',
      'Usuarios ilimitados',
      'API dedicada',
      'SLA 99.9%',
      'Account manager',
      'Onboarding personalizado',
      'Integraciones custom',
      'Facturación a medida'
    ],
    destacado: false,
    color: '#6096B9',
    custom: true
  }
];

const faqs = [
  {
    pregunta: '¿Puedo cambiar de plan en cualquier momento?',
    respuesta: 'Sí, puedes subir o bajar de plan en cualquier momento. Los cambios se aplican inmediatamente y se prorratea la diferencia.'
  },
  {
    pregunta: '¿Hay periodo de prueba gratuita?',
    respuesta: 'Sí, 14 días de prueba gratuita con todas las funcionalidades. Sin tarjeta de crédito.'
  },
  {
    pregunta: '¿Qué incluye cada plan?',
    respuesta: 'Todos los planes incluyen CRM Pipeline Kanban y facturación. Growth añade ERP, automatizaciones y WhatsApp. Scale incluye OCR con IA, analytics en tiempo real y marca blanca.'
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Tarjetas de crédito/débito (Visa, Mastercard, Amex), SEPA y transferencia bancaria para planes anuales.'
  },
  {
    pregunta: '¿Puedo cancelar cuando quiera?',
    respuesta: 'Sí, sin penalizaciones. Tu suscripción sigue activa hasta el final del período pagado.'
  },
  {
    pregunta: '¿Qué pasa con mis datos si cancelo?',
    respuesta: 'Tienes 30 días para exportar todos tus datos después de cancelar. Exporta en CSV, Excel o PDF.'
  },
  {
    pregunta: '¿El plan anual tiene descuento?',
    respuesta: 'Sí, el plan anual tiene un 20% de descuento sobre el precio mensual. Facturado una vez al año.'
  },
  {
    pregunta: '¿Ofrecen descuento para startups o agencias?',
    respuesta: 'Sí. El plan Starter está pensado para startups. Para agencias con múltiples clientes, contacta con ventas para precios especiales por volumen.'
  }
];

export default function Pricing() {
  const [anual, setAnual] = useState(true);

  return (
    <>
      <Head>
        <title>Precios y Planes | EventosOrganizador</title>
        <meta name="description" content="Planes flexibles para cada necesidad. Desde €39/mes. Prueba gratuita de 14 días sin tarjeta de crédito." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#6096B9]/10 text-[#6096B9] rounded-full text-sm font-medium mb-6">
              Precios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Planes que se adaptan{' '}
              <span className="text-[#6096B9]">a tu negocio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Sin contratos a largo plazo. Sin costos ocultos. Empieza gratis y escala cuando lo necesites.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm font-medium ${!anual ? 'text-gray-900' : 'text-gray-500'}`}>
                Mensual
              </span>
              <button
                onClick={() => setAnual(!anual)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  anual ? 'bg-[#6096B9]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                    anual ? 'translate-x-7' : 'translate-x-0.5'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${anual ? 'text-gray-900' : 'text-gray-500'}`}>
                Anual <span className="text-green-600 font-semibold">(-20%)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full pb-20 px-4 -mt-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {planes.map((plan: any, idx: number) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-8 ${
                    plan.destacado
                      ? 'bg-[#6096B9] text-white shadow-xl scale-105 border-0 relative'
                      : 'bg-white border border-gray-200 shadow-sm'
                  }`}
                >
                  {plan.destacado && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-[#6096B9] text-xs font-bold rounded-full shadow">
                      Más Popular
                    </span>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${plan.destacado ? 'text-white' : 'text-gray-900'}`}>
                    {plan.nombre}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.destacado ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.descripcion}
                  </p>

                  <div className="mb-6">
                    {plan.custom ? (
                      <>
                        <span className={`text-4xl font-bold ${plan.destacado ? 'text-white' : 'text-gray-900'}`}>
                          Custom
                        </span>
                        <p className={`text-sm mt-1 ${plan.destacado ? 'text-white/60' : 'text-gray-400'}`}>
                          Contacta con ventas
                        </p>
                      </>
                    ) : (
                      <>
                        <span className={`text-5xl font-bold ${plan.destacado ? 'text-white' : 'text-gray-900'}`}>
                          €{anual ? plan.precioAnual : plan.precioMensual}
                        </span>
                        <span className={`${plan.destacado ? 'text-white/80' : 'text-gray-500'}`}>
                          /mes
                        </span>
                        {anual && (
                          <p className={`text-sm mt-1 ${plan.destacado ? 'text-white/60' : 'text-gray-400'}`}>
                            Facturado anualmente
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  <a
                    href={plan.custom ? '/demo' : 'https://app.eventosorganizador.com/login?q=register&d=/'}
                    className={`w-full block text-center py-3 rounded-lg font-medium transition-all duration-200 mb-8 ${
                      plan.destacado
                        ? 'bg-white text-[#6096B9] hover:bg-gray-100'
                        : 'bg-[#6096B9] text-white hover:bg-[#4b7591]'
                    }`}
                  >
                    {plan.custom ? 'Contactar ventas' : 'Empezar 14 días gratis'}
                  </a>

                  <ul className="space-y-3">
                    {plan.features.map((feature: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.destacado ? 'text-white' : 'text-[#6096B9]'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className={`text-sm ${plan.destacado ? 'text-white/90' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
                >
                  <summary className="p-6 font-medium text-gray-900 cursor-pointer hover:bg-gray-50 transition-colors list-none flex items-center justify-between">
                    {faq.pregunta}
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.respuesta}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empieza gratis hoy
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              14 días de prueba gratuita. Sin tarjeta de crédito. Sin compromisos.
            </p>
            <a
              href="https://app.eventosorganizador.com/login?q=register&d=/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6096B9] text-white rounded-lg font-medium hover:bg-[#4b7591] transition-all duration-200 shadow-lg"
            >
              Comenzar Prueba Gratuita
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}
