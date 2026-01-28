import React, { FC } from 'react';

const features = [
  {
    titulo: 'CRM Pipeline Kanban',
    descripcion: 'Gestiona oportunidades con un tablero visual. Arrastra, suelta y cierra más ventas.',
    href: '/funcionalidades/crm',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
      </svg>
    ),
  },
  {
    titulo: 'Campañas Multicanal',
    descripcion: 'Automatiza secuencias por Email, WhatsApp, SMS y LinkedIn.',
    href: '/funcionalidades/crm',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    titulo: 'WhatsApp Business API',
    descripcion: 'Mensajes masivos, chatbots y bandeja compartida.',
    href: '/funcionalidades/crm',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    titulo: 'Email Marketing con IA',
    descripcion: 'La IA genera tus emails y maximiza conversiones.',
    href: '/funcionalidades/automatizaciones',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    titulo: 'Facturación Automática',
    descripcion: 'Facturas, pagos online y cobros recurrentes.',
    href: '/funcionalidades/finanzas',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    titulo: 'Automatizaciones',
    descripcion: 'Workflows que trabajan 24/7. Scoring y nurturing.',
    href: '/funcionalidades/automatizaciones',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    titulo: 'Enriquecimiento y OCR',
    descripcion: 'Email a perfil completo. Escanea y valida datos.',
    href: '/funcionalidades/generacion-leads',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    titulo: 'Reportes y Analytics',
    descripcion: 'Dashboards en tiempo real y reportes automáticos.',
    href: '/funcionalidades/analytics',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    titulo: 'Integraciones / API',
    descripcion: '+100 integraciones nativas y API REST completa.',
    href: '/funcionalidades',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

const ProductFeatures: FC = () => {
  return (
    <section className="w-full bg-[#f6f9fc] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-[#6096B9] uppercase tracking-wide mb-3">
            Plataforma Todo en Uno
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Todo lo que necesitas para hacer crecer tu negocio
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            CRM, marketing, facturación, automatizaciones y más en una sola plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, idx) => (
            <a
              key={idx}
              href={feature.href}
              className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-[#6096B9]/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#6096B9]/10 text-[#6096B9] flex items-center justify-center shrink-0 mt-0.5">
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-1 group-hover:text-[#6096B9] transition-colors">
                    {feature.titulo}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.descripcion}</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#6096B9] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          <a
            href="https://app.eventosorganizador.com/login?q=register&d=/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#6096B9] text-white text-[15px] font-medium rounded-lg hover:bg-[#4b7591] transition-colors"
          >
            Probar Gratis 14 Días
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="/pricing"
            className="group inline-flex items-center gap-2 text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Ver Precios
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
