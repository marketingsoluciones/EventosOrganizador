import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import HeroSection from '@/components/shared/HeroSection';
import PainPointsSection from '@/components/shared/PainPointsSection';
import SectionHeader from '@/components/shared/SectionHeader';
import StatsBar from '@/components/shared/StatsBar';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const painPoints = [
  { emoji: '😤', title: 'Buscas clientes manualmente en Google', description: 'Copiar nombres, teléfonos y emails de directorios uno a uno. Horas perdidas cada semana.' },
  { emoji: '📋', title: 'Tus listas están desactualizadas', description: 'Compras bases de datos que ya están obsoletas. Emails que rebotan, teléfonos que no existen.' },
  { emoji: '🐌', title: 'Tu equipo no da abasto', description: 'Un SDR puede investigar 20-30 empresas al día. Necesitas cientos para llenar el pipeline.' },
  { emoji: '💸', title: 'Pagas por herramientas que no usas', description: 'Apollo, ZoomInfo, Lusha... suscripciones caras con créditos que se pierden cada mes.' },
];

const sources = [
  { name: 'Google Places', desc: 'Negocios locales con reseñas, horarios y contacto verificado', icon: '🗺️' },
  { name: 'Yelp', desc: 'Restaurantes, servicios y comercios con ratings y categorías', icon: '⭐' },
  { name: 'Foursquare', desc: 'Venues y establecimientos con datos de afluencia', icon: '📍' },
  { name: 'OpenStreetMap', desc: 'Datos abiertos de negocios y puntos de interés globales', icon: '🌍' },
  { name: 'Web Search', desc: 'Scraping inteligente de webs corporativas y directorios sectoriales', icon: '🔍' },
  { name: 'Custom Import', desc: 'Importa tus propias listas CSV/Excel y enriquécelas automáticamente', icon: '📄' },
];

const tabs = [
  {
    id: 'campaign',
    label: '🎯 Campaña',
    title: 'Configura tu campaña de captación',
    desc: 'Define sector, ubicación, tamaño de empresa y criterios de búsqueda. El sistema encuentra automáticamente empresas que coinciden con tu perfil ideal.',
    features: ['Filtros por sector y ubicación', 'Segmentación por tamaño', 'Criterios personalizados', 'Templates reutilizables'],
  },
  {
    id: 'queue',
    label: '⚡ Cola 24/7',
    title: 'Cola de procesamiento continuo',
    desc: 'Una vez lanzada, la cola trabaja 24/7 sin parar. Busca, extrae y organiza leads mientras tú te centras en cerrar ventas.',
    features: ['Procesamiento nocturno', 'Sin límite de horario', 'Reintentos automáticos', 'Priorización inteligente'],
  },
  {
    id: 'enrichment',
    label: '🔄 Enriquecimiento',
    title: 'Enriquecimiento automático de datos',
    desc: 'Cada lead se enriquece con email, teléfono, web, redes sociales, sector y tamaño de empresa. Datos completos sin trabajo manual.',
    features: ['Email verificado', 'Teléfono directo', 'Redes sociales', 'Datos de empresa'],
  },
  {
    id: 'verification',
    label: '✅ Verificación',
    title: 'Verificación y scoring',
    desc: 'Antes de llegar a tu CRM, cada lead se verifica: email válido, empresa activa, datos consistentes. Solo recibes leads de calidad.',
    features: ['Verificación email', 'Detección duplicados', 'Scoring automático', 'Filtro de calidad'],
  },
];

const useCases = [
  { title: 'Agencias de marketing', desc: 'Genera listas de prospectos para campañas outbound de tus clientes.' },
  { title: 'Equipos comerciales B2B', desc: 'Llena tu pipeline con empresas que coinciden con tu ICP.' },
  { title: 'Startups en crecimiento', desc: 'Tu primer SDR virtual que trabaja 24/7 sin sueldo.' },
  { title: 'Consultoras', desc: 'Encuentra empresas que necesitan tus servicios por sector y tamaño.' },
  { title: 'Distribuidoras', desc: 'Localiza nuevos puntos de venta y establecimientos potenciales.' },
  { title: 'Franquicias', desc: 'Identifica ubicaciones y negocios para expansión territorial.' },
];

const faqs = [
  { question: '¿De dónde salen los leads?', answer: 'De fuentes públicas verificadas: Google Places, Yelp, Foursquare, OpenStreetMap y web scraping de directorios sectoriales. Todos los datos son públicos y accesibles.' },
  { question: '¿Cuántos leads puedo generar al mes?', answer: 'Depende del plan: Starter (500/mes), Growth (2.500/mes), Scale (10.000/mes), Enterprise (ilimitados). La cola 24/7 optimiza la extracción para maximizar resultados.' },
  { question: '¿Los emails están verificados?', answer: 'Sí. Cada email pasa por verificación de formato, dominio MX y buzón activo. Solo los emails válidos llegan a tu CRM.' },
  { question: '¿Puedo filtrar por sector y ubicación?', answer: 'Sí. Puedes filtrar por sector (hostelería, retail, servicios...), ubicación (ciudad, CP, radio), tamaño de empresa y muchos más criterios.' },
  { question: '¿Qué pasa con los duplicados?', answer: 'El sistema detecta y fusiona duplicados automáticamente usando email, teléfono, nombre de empresa y dirección. Nunca tendrás contactos repetidos.' },
  { question: '¿Puedo importar mis propias listas?', answer: 'Sí. Importa CSV o Excel y el sistema enriquece automáticamente cada registro con datos adicionales de las fuentes públicas.' },
  { question: '¿Es legal generar leads así?', answer: 'Sí. Todos los datos provienen de fuentes públicas. Cumplimos con RGPD y ofrecemos herramientas de consentimiento y opt-out.' },
  { question: '¿Los leads llegan directamente al CRM?', answer: 'Sí. Los leads verificados y enriquecidos se crean automáticamente en tu pipeline CRM con scoring asignado y listos para trabajar.' },
];

const GeneracionLeadsPage = () => {
  const [activeTab, setActiveTab] = useState('campaign');
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <>
      <Head>
        <title>Generación de Leads | EventosOrganizador</title>
        <meta name="description" content="Genera +1.000 leads cualificados por semana con IA. Fuentes: Google Places, Yelp, Foursquare. Cola 24/7, enriquecimiento y verificación automática." />
      </Head>

      <Navbar />

      <HeroSection
        badge="Generación de Leads"
        title={<>Encuentra <span className="text-[#6096B9]">1.000 leads cualificados</span> en 48 horas</>}
        subtitle="Conecta con Google Places, Yelp, Foursquare y más. La cola 24/7 busca, enriquece y verifica contactos mientras duermes."
        primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
        secondaryCTA={{ label: 'Ver demo', href: '/demo' }}
        benefits={['6 fuentes de datos', 'Cola 24/7', 'Verificación automática']}
        breadcrumb={[{ label: 'Funcionalidades', href: '/funcionalidades' }, { label: 'Generación de Leads' }]}
      />

      <PainPointsSection painPoints={painPoints} />

      {/* Antes / Después */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader eyebrow="Transformación" title="Antes vs. Después" description="Lo que cambia cuando automatizas la captación de leads" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h3 className="font-bold text-red-800 mb-4 text-lg">❌ Sin EventosOrganizador</h3>
              <ul className="space-y-3 text-red-700 text-sm">
                {['20-30 leads/día manualmente', 'Datos desactualizados y duplicados', 'Emails que rebotan (+30%)', 'Tu equipo busca en vez de vender', 'Pipeline vacío los lunes'].map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="text-red-400 mt-0.5">•</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="font-bold text-green-800 mb-4 text-lg">✅ Con EventosOrganizador</h3>
              <ul className="space-y-3 text-green-700 text-sm">
                {['+1.000 leads/semana automáticos', 'Datos verificados y enriquecidos', 'Emails válidos (+95% deliverability)', 'Tu equipo se centra en cerrar', 'Pipeline lleno cada mañana'].map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="text-green-400 mt-0.5">•</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fuentes de datos */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader eyebrow="Fuentes" title="6 fuentes de datos integradas" description="Accede a millones de negocios verificados en todo el mundo" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {sources.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{s.name}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs: Proceso */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader eyebrow="Proceso" title="De búsqueda a lead cualificado" description="4 pasos automáticos para llenar tu pipeline" />
          <div className="flex flex-wrap gap-2 mt-12 mb-8 justify-center">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === t.id ? 'bg-[#6096B9] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="font-bold text-xl text-gray-900 mb-3">{currentTab.title}</h3>
            <p className="text-gray-600 mb-6">{currentTab.desc}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {currentTab.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-[#6096B9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader eyebrow="Casos de uso" title="¿Para quién es?" description="Sectores que ya generan leads con nosotros" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-600">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <StatsBar
            stats={[
              { value: '+1.000', label: 'Leads por semana' },
              { value: '6', label: 'Fuentes de datos' },
              { value: '95%', label: 'Emails válidos' },
              { value: '24/7', label: 'Cola activa' },
            ]}
            variant="gradient"
          />
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Llena tu pipeline esta semana"
        description="Empieza a generar leads cualificados en menos de 24 horas."
        guarantees={['14 días gratis', 'Sin tarjeta de crédito', '+1.000 leads/semana']}
      />

      <Footer />
    </>
  );
};

export default GeneracionLeadsPage;
