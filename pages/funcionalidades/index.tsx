import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import HeroSection from '@/components/shared/HeroSection';
import FeatureGrid from '@/components/shared/FeatureGrid';
import PainPointsSection from '@/components/shared/PainPointsSection';
import StatsBar from '@/components/shared/StatsBar';
import ComparisonTable from '@/components/shared/ComparisonTable';
import TestimonialSection from '@/components/shared/TestimonialSection';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const modules = [
  { icon: '🎯', title: 'Generación de Leads', description: 'Encuentra clientes potenciales de Google Places, Yelp, Foursquare y más. Cola 24/7 que trabaja mientras duermes.', href: '/funcionalidades/generacion-leads', metric: '+1.000 leads/semana' },
  { icon: '📊', title: 'CRM Pipeline', description: 'Tablero Kanban visual con scoring automático 0-100, campañas multicanal y ficha de contacto enriquecida.', href: '/funcionalidades/crm', metric: '+40% conversión' },
  { icon: '📦', title: 'ERP', description: 'Catálogo de productos con variantes, inventario multi-almacén, listas de precios y gestión de proveedores.', href: '/funcionalidades/erp', metric: 'Control total' },
  { icon: '💰', title: 'Finanzas + OCR', description: 'Foto de factura → datos en 5 segundos con Claude Vision. Facturación, wallet prepago Stripe y tesorería.', href: '/funcionalidades/finanzas', metric: '-80% tiempo admin' },
  { icon: '⚡', title: 'Automatizaciones', description: 'Colas de trabajo, workers distribuidos, jobs programados y ejecución automática de campañas.', href: '/funcionalidades/automatizaciones', metric: '24/7 activo' },
  { icon: '💒', title: 'Eventos y Bodas', description: 'El único CRM que entiende de bodas: invitados RSVP, catering, menús, proveedores y calendario integrado.', href: '/funcionalidades/eventos-bodas', metric: '+200 bodas/año' },
  { icon: '📈', title: 'Analytics', description: 'Dashboards en tiempo real con WebSockets, audit logs, calidad de datos y exportación PDF/Excel/API.', href: '/funcionalidades/analytics', metric: 'Datos en vivo' },
];

const painPoints = [
  { emoji: '😤', title: 'Pasas horas buscando clientes en Google', description: 'Copiar y pegar datos de directorios uno a uno es tedioso e ineficiente. Pierdes tiempo que podrías dedicar a vender.' },
  { emoji: '🔀', title: 'Usas 5+ herramientas que no se hablan', description: 'CRM por un lado, facturación por otro, Excel para tracking... La información está dispersa y desactualizada.' },
  { emoji: '📉', title: 'No sabes qué leads son buenos', description: 'Sin scoring automático, tu equipo pierde tiempo con contactos que nunca van a comprar.' },
  { emoji: '🧾', title: 'La facturación te quita medio día', description: 'Introducir facturas manualmente, conciliar pagos, perseguir cobros... Tareas repetitivas que drenan tu energía.' },
  { emoji: '😴', title: 'Tu pipeline se para cuando tú paras', description: 'Sin automatización, los leads se enfrían mientras no estás. No hay seguimiento nocturno ni en fin de semana.' },
  { emoji: '📊', title: 'No tienes visibilidad real del negocio', description: 'Sin dashboards en tiempo real, tomas decisiones a ciegas. Los informes llegan tarde y desactualizados.' },
];

const howItWorks = [
  { step: 1, title: 'Conecta tus fuentes', desc: 'Configura de dónde quieres captar leads: Google Places, Yelp, web scraping o importación CSV.' },
  { step: 2, title: 'Automatiza la captación', desc: 'La cola 24/7 busca, enriquece y verifica contactos automáticamente mientras duermes.' },
  { step: 3, title: 'Gestiona en el CRM', desc: 'Los leads llegan al pipeline Kanban con scoring. Mueve deals por etapas con drag & drop.' },
  { step: 4, title: 'Factura y cobra', desc: 'Genera facturas con un clic, cobra con Stripe y reconcilia automáticamente.' },
  { step: 5, title: 'Analiza y escala', desc: 'Dashboards en tiempo real te muestran qué funciona. Escala lo que convierte.' },
];

const comparisonRows = [
  { feature: 'Generación de leads integrada', us: true, competitors: { HubSpot: false, Pipedrive: false, Apollo: true, Holded: false } },
  { feature: 'CRM con pipeline Kanban', us: true, competitors: { HubSpot: true, Pipedrive: true, Apollo: true, Holded: false } },
  { feature: 'ERP + Inventario', us: true, competitors: { HubSpot: false, Pipedrive: false, Apollo: false, Holded: true } },
  { feature: 'Facturación con OCR IA', us: true, competitors: { HubSpot: false, Pipedrive: false, Apollo: false, Holded: 'Básico' } },
  { feature: 'Automatizaciones 24/7', us: true, competitors: { HubSpot: 'Add-on', Pipedrive: 'Limitado', Apollo: true, Holded: false } },
  { feature: 'Gestión de eventos/bodas', us: true, competitors: { HubSpot: false, Pipedrive: false, Apollo: false, Holded: false } },
  { feature: 'Analytics tiempo real', us: true, competitors: { HubSpot: 'Enterprise', Pipedrive: 'Pro', Apollo: 'Limitado', Holded: 'Básico' } },
  { feature: 'Todo en una plataforma', us: true, competitors: { HubSpot: false, Pipedrive: false, Apollo: false, Holded: false } },
  { feature: 'Desde €49/mes', us: true, competitors: { HubSpot: false, Pipedrive: false, Apollo: false, Holded: false } },
];

const testimonials = [
  { name: 'María González', role: 'CEO', company: 'Agencia MarketPro', quote: 'En 2 semanas generamos más de 3.000 leads cualificados para un cliente del sector hostelería. Antes tardábamos un mes con herramientas manuales.', metrics: ['+3.000 leads', '2 semanas', '-70% tiempo'] },
  { name: 'Carlos Ruiz', role: 'Director Comercial', company: 'TechSales', quote: 'El scoring automático nos permitió enfocar al equipo en los leads con más probabilidad de cierre. Nuestra conversión subió un 40%.', metrics: ['+40% conversión', 'Scoring IA'] },
  { name: 'Ana Martín', role: 'Wedding Planner', company: 'Bodas con Alma', quote: 'Por fin un CRM que entiende mi negocio. Gestiono invitados, catering y proveedores desde un solo lugar. Mis novias están encantadas.', metrics: ['+200 bodas/año', 'RSVP digital'] },
  { name: 'Pedro López', role: 'Founder', company: 'StartupFlow', quote: 'Como startup no podíamos pagar HubSpot + Apollo + Holded. EventosOrganizador nos da todo por €49/mes. Es nuestro primer SDR que no cobra sueldo.', metrics: ['€49/mes', 'Todo en uno'] },
  { name: 'Laura Sánchez', role: 'CFO', company: 'EventCorp', quote: 'El OCR con IA nos ahorra 3 horas diarias en facturación. Foto de factura y en 5 segundos tengo todos los datos. Increíble.', metrics: ['-3h/día', 'OCR IA'] },
];

const faqs = [
  { question: '¿Qué incluye EventosOrganizador?', answer: 'Una plataforma todo en uno con 7 módulos: Generación de Leads, CRM Pipeline, ERP, Finanzas + OCR, Automatizaciones, Eventos y Bodas, y Analytics. Todo integrado y sincronizado.' },
  { question: '¿Necesito conocimientos técnicos?', answer: 'No. La plataforma está diseñada para que cualquier profesional pueda usarla desde el primer día. Interfaz intuitiva, drag & drop, y soporte 24/7.' },
  { question: '¿Puedo importar mis datos actuales?', answer: 'Sí. Importa contactos, empresas y deals desde CSV, Excel o directamente desde otros CRMs. El proceso tarda minutos.' },
  { question: '¿Cómo funciona la generación de leads?', answer: 'Configuras criterios de búsqueda (sector, ubicación, tamaño) y la cola 24/7 busca en Google Places, Yelp, Foursquare y otras fuentes. Los leads llegan verificados y enriquecidos a tu CRM.' },
  { question: '¿Es seguro para datos financieros?', answer: 'Sí. Encriptación AES-256, cumplimiento RGPD, backups automáticos y audit logs de toda actividad. Tus datos están protegidos.' },
  { question: '¿Hay periodo de prueba?', answer: 'Sí, 14 días gratis con todas las funcionalidades. Sin tarjeta de crédito. Cancela cuando quieras.' },
  { question: '¿Qué diferencia hay con HubSpot o Pipedrive?', answer: 'EventosOrganizador integra generación de leads, CRM, ERP, facturación OCR y gestión de eventos en una sola plataforma. HubSpot y Pipedrive requieren múltiples add-ons y herramientas externas para lo mismo.' },
  { question: '¿Ofrecen soporte en español?', answer: 'Sí. Soporte 24/7 en español por chat, email y videollamada. También tenemos una base de conocimiento completa y masterclass mensuales.' },
];

const FuncionalidadesPage = () => {
  return (
    <>
      <Head>
        <title>Funcionalidades | EventosOrganizador - Plataforma Todo en Uno</title>
        <meta name="description" content="Descubre los 7 módulos de EventosOrganizador: generación de leads, CRM, ERP, finanzas con OCR, automatizaciones, eventos y bodas, y analytics en tiempo real." />
      </Head>

      <Navbar />

      <HeroSection
        badge="Plataforma todo en uno"
        title={<>Todas las herramientas que necesitas, <span className="text-white/80">en un solo lugar</span></>}
        subtitle="7 módulos integrados para captar leads, gestionar clientes, facturar y analizar tu negocio. Sin integraciones rotas ni datos dispersos."
        primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
        secondaryCTA={{ label: 'Ver demo', href: '/demo' }}
        benefits={['Sin tarjeta de crédito', '7 módulos incluidos', 'Soporte 24/7']}
      />

      <FeatureGrid features={modules} cols={3} />

      <PainPointsSection painPoints={painPoints} />

      {/* Cómo funciona */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cómo funciona</h2>
            <p className="text-lg text-gray-600">De cero a resultados en 5 pasos</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {howItWorks.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#6096B9] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComparisonTable
        rows={comparisonRows}
        title="¿Por qué EventosOrganizador?"
        subtitle="Compara lo que obtienes frente a usar 4 herramientas separadas"
      />

      <TestimonialSection testimonials={testimonials} />

      {/* Pricing resumen */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planes y precios</h2>
          <p className="text-lg text-gray-600 mb-12">Elige el plan que mejor se adapta a tu negocio</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Starter', price: '€49', period: '/mes', features: ['500 leads/mes', '1.000 contactos', '1 usuario', 'CRM básico', 'Email soporte'] },
              { name: 'Growth', price: '€149', period: '/mes', features: ['2.500 leads/mes', '10.000 contactos', '5 usuarios', 'CRM + ERP', 'Automatizaciones', 'Chat soporte'], popular: true },
              { name: 'Scale', price: '€299', period: '/mes', features: ['10.000 leads/mes', '50.000 contactos', '15 usuarios', 'Todos los módulos', 'OCR IA', 'Soporte prioritario'] },
              { name: 'Enterprise', price: 'Custom', period: '', features: ['Leads ilimitados', 'Contactos ilimitados', 'Usuarios ilimitados', 'API dedicada', 'SLA 99.9%', 'Account manager'] },
            ].map((plan) => (
              <div key={plan.name} className={`bg-white rounded-2xl p-8 border ${plan.popular ? 'border-[#6096B9] ring-2 ring-[#6096B9]/20 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6096B9] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Más popular
                  </span>
                )}
                <h3 className="font-bold text-xl text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.name === 'Enterprise' ? '/demo' : 'https://app.eventosorganizador.com/login?q=register&d=/'}
                  className={`block w-full text-center py-3 rounded-xl font-medium transition-all duration-300 ${plan.popular ? 'bg-[#6096B9] text-white hover:bg-[#4b7591]' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  {plan.name === 'Enterprise' ? 'Contactar' : 'Empezar gratis'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Empieza a crecer hoy"
        description="14 días gratis. Sin tarjeta de crédito. Todos los módulos incluidos."
        guarantees={['Sin compromiso', 'Soporte 24/7', 'Migración gratuita']}
      />

      <Footer />
    </>
  );
};

export default FuncionalidadesPage;
