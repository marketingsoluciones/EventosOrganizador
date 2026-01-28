import React, { FC } from 'react';

const features = [
  {
    titulo: 'CRM Pipeline Kanban',
    descripcion: 'Gestiona oportunidades con un tablero visual. Arrastra, suelta y cierra más ventas.',
    href: '/funcionalidades/crm',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
      </svg>
    ),
    color: '#6096B9'
  },
  {
    titulo: 'Campañas Multicanal',
    descripcion: 'Automatiza secuencias por Email, WhatsApp, SMS y LinkedIn desde un solo lugar.',
    href: '/funcionalidades/crm',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: '#8B5CF6'
  },
  {
    titulo: 'WhatsApp Business API',
    descripcion: 'Mensajes masivos, chatbots y bandeja compartida para atención en equipo.',
    href: '/funcionalidades/crm',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: '#25D366'
  },
  {
    titulo: 'Email Marketing con IA',
    descripcion: 'La IA genera tus emails, optimiza envíos y maximiza conversiones automáticamente.',
    href: '/funcionalidades/automatizaciones',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: '#A855F7'
  },
  {
    titulo: 'Facturación Automática',
    descripcion: 'Genera facturas, acepta pagos online y gestiona cobros recurrentes integrados al CRM.',
    href: '/funcionalidades/finanzas',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: '#F59E0B'
  },
  {
    titulo: 'Automatizaciones',
    descripcion: 'Workflows visuales que trabajan 24/7. Lead scoring, nurturing y seguimientos automáticos.',
    href: '/funcionalidades/automatizaciones',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: '#3B82F6'
  },
  {
    titulo: 'Enriquecimiento y OCR',
    descripcion: 'Convierte un email en un perfil completo. Escanea tarjetas y valida datos automáticamente.',
    href: '/funcionalidades/generacion-leads',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: '#F97316'
  },
  {
    titulo: 'Reportes y Analytics',
    descripcion: 'Dashboards en tiempo real, reportes automáticos y métricas de todas tus operaciones.',
    href: '/funcionalidades/analytics',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: '#6366F1'
  },
  {
    titulo: 'Integraciones / API',
    descripcion: '+100 integraciones nativas, API REST completa y webhooks para conectar todo.',
    href: '/funcionalidades',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    color: '#6096B9'
  }
];

const ProductFeatures: FC = () => {
  return (
    <div className="self-stretch w-full max-w-[1200px] mx-auto flex flex-col items-center py-20 px-4 gap-14">
      {/* Header */}
      <div className="text-center max-w-2xl">
        <p className="text-[#6096B9] font-semibold uppercase text-sm tracking-wide mb-3">
          Plataforma Todo en Uno
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Todo lo que necesitas para hacer crecer tu negocio
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          CRM, marketing, facturación, automatizaciones y más. Una sola plataforma para gestionarlo todo.
        </p>
      </div>

      {/* Features Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <a
            key={idx}
            href={feature.href}
            className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-[#6096B9]/40 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
            >
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#6096B9] transition-colors">
              {feature.titulo}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {feature.descripcion}
            </p>
            <span
              className="text-sm font-medium inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2"
              style={{ color: feature.color }}
            >
              Conocer más
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://app.eventosorganizador.com/login?q=register&d=/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6096B9] text-white rounded-lg font-medium hover:bg-[#4b7591] transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Probar Gratis 14 Días
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="/pricing"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-[#6096B9] transition-all duration-200"
        >
          Ver Precios
        </a>
      </div>
    </div>
  );
};

export default ProductFeatures;
