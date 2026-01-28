import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import FAQSection from '@/components/shared/FAQSection';

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Personalizada para ti',
    desc: 'Te mostramos las funcionalidades más relevantes para tu sector y tamaño de empresa.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '30 minutos',
    desc: 'Una sesión corta y enfocada. Sin presión, sin compromiso.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Resuelve tus dudas',
    desc: 'Pregunta todo lo que necesites. Nuestro equipo te asesora sin coste.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: 'Onboarding incluido',
    desc: 'Si decides empezar, te ayudamos con la configuración y migración de datos.',
  },
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
        <meta name="description" content="Solicita una demo personalizada de EventosOrganizador. 30 minutos, sin compromiso." />
      </Head>

      <Navbar />

      {/* Hero */}
      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-gray-600">Demo gratuita</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                Ve EventosOrganizador{' '}
                <span className="text-[#6096B9]">en acción</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                30 minutos personalizados para tu negocio. Te mostramos cómo generar leads, gestionar clientes y automatizar tu operativa.
              </p>
              <div className="flex flex-col gap-3 text-sm text-gray-500">
                {['Sin compromiso', 'Personalizada para tu sector', 'Onboarding incluido'].map((b) => (
                  <span key={b} className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#6096B9]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="border border-gray-200 rounded-lg p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Solicita tu demo</h2>
              <p className="text-gray-500 text-sm mb-6">Te contactamos en menos de 24h.</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre completo</label>
                  <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email profesional</label>
                  <input type="email" placeholder="tu@empresa.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Empresa</label>
                  <input type="text" placeholder="Nombre de tu empresa" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">¿Qué te interesa más?</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#6096B9] focus:border-transparent outline-none text-gray-600">
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
                  className="w-full block text-center py-3.5 bg-[#6096B9] text-white rounded-lg text-[15px] font-medium hover:bg-[#4b7591] transition-colors"
                >
                  Agendar demo gratuita
                </a>
                <p className="text-xs text-gray-400 text-center">Sin compromiso. Te contactamos en menos de 24h.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full bg-[#f6f9fc] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">¿Qué verás en la demo?</h2>
            <p className="text-gray-500 text-lg">Una sesión personalizada para tu negocio</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-9 h-9 rounded-lg bg-[#6096B9]/10 text-[#6096B9] flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5 text-[15px]">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Preguntas sobre la demo" />

      {/* CTA Final */}
      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">¿Prefieres probar directamente?</h2>
          <p className="text-gray-500 text-lg mb-8">14 días gratis con todas las funcionalidades. Sin tarjeta de crédito.</p>
          <a
            href="https://app.eventosorganizador.com/login?q=register&d=/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#6096B9] text-white text-[15px] font-medium rounded-lg hover:bg-[#4b7591] transition-colors"
          >
            Empieza gratis 14 días
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
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
