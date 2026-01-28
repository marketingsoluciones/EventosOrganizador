import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import FAQSection from '@/components/shared/FAQSection';

const benefits = [
  { icon: '🎯', title: 'Personalizada para ti', desc: 'Te mostramos las funcionalidades más relevantes para tu sector y tamaño de empresa.' },
  { icon: '⏱️', title: '30 minutos', desc: 'Una sesión corta y enfocada. Sin presión, sin compromiso.' },
  { icon: '💡', title: 'Resuelve tus dudas', desc: 'Pregunta todo lo que necesites. Nuestro equipo te asesora sin coste.' },
  { icon: '🚀', title: 'Onboarding incluido', desc: 'Si decides empezar, te ayudamos con la configuración y migración de datos.' },
];

const faqs = [
  { question: '¿La demo es gratuita?', answer: 'Sí, totalmente gratuita y sin compromiso. 30 minutos de tu tiempo para ver si EventosOrganizador es lo que necesitas.' },
  { question: '¿Necesito preparar algo?', answer: 'No. Solo piensa en tus principales retos de negocio y te mostramos cómo resolverlos con la plataforma.' },
  { question: '¿Puedo invitar a mi equipo?', answer: 'Sí. Cuantas más personas participen, mejor entenderéis cómo la plataforma se adapta a vuestro flujo de trabajo.' },
  { question: '¿Qué pasa después de la demo?', answer: 'Decides sin presión. Si quieres probar, te activamos 14 días gratis con onboarding personalizado. Si no, sin problema.' },
];

const DemoPage = () => {
  return (
    <>
      <Head>
        <title>Solicita una Demo | EventosOrganizador</title>
        <meta name="description" content="Solicita una demo personalizada de EventosOrganizador. 30 minutos, sin compromiso. Te mostramos cómo resolver tus retos de negocio." />
      </Head>

      <Navbar />

      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#6096B9] to-[#4b7591] py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white/15 text-white rounded-full text-sm font-medium mb-6">
                Demo gratuita
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ve EventosOrganizador{' '}
                <span className="text-white/80">en acción</span>
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                30 minutos personalizados para tu negocio. Te mostramos cómo generar leads, gestionar clientes y automatizar tu operativa.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                {['Sin compromiso', 'Personalizada', 'Onboarding incluido'].map((b) => (
                  <span key={b} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Solicita tu demo</h2>
              <p className="text-gray-600 mb-6">Rellena el formulario y te contactamos en menos de 24h.</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                  <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email profesional</label>
                  <input type="email" placeholder="tu@empresa.com" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <input type="text" placeholder="Nombre de tu empresa" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">¿Qué te interesa más?</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none text-gray-600">
                    <option>Generación de leads</option>
                    <option>CRM Pipeline</option>
                    <option>ERP e inventario</option>
                    <option>Finanzas y facturación</option>
                    <option>Eventos y bodas</option>
                    <option>Automatizaciones</option>
                    <option>Todo en uno</option>
                  </select>
                </div>
                <a
                  href="/agendar-reunion"
                  className="w-full block text-center py-4 bg-[#6096B9] text-white rounded-xl font-medium hover:bg-[#4b7591] transition-all duration-200 shadow-lg"
                >
                  Agendar demo gratuita →
                </a>
                <p className="text-xs text-gray-400 text-center">Sin compromiso. Te contactamos en menos de 24h.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Qué verás en la demo?</h2>
            <p className="text-lg text-gray-600">Una sesión personalizada para tu negocio</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <span className="text-4xl mb-4 block">{b.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre la demo" />

      {/* CTA Final */}
      <section className="w-full bg-gray-50 py-20 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Prefieres probar directamente?</h2>
          <p className="text-lg text-gray-600 mb-8">14 días gratis con todas las funcionalidades. Sin tarjeta de crédito.</p>
          <a
            href="https://app.eventosorganizador.com/login?q=register&d=/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#6096B9] text-white rounded-xl font-medium hover:bg-[#4b7591] transition-all shadow-lg"
          >
            Empieza gratis 14 días
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DemoPage;
