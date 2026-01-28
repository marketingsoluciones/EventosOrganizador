import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import HeroSection from '@/components/shared/HeroSection';
import PainPointsSection from '@/components/shared/PainPointsSection';
import FeatureGrid from '@/components/shared/FeatureGrid';
import TestimonialSection from '@/components/shared/TestimonialSection';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const COLOR = '#10B981';

const painPoints = [
  { emoji: '🔍', title: 'Buscas clientes entre proyectos', description: 'Cuando terminas un proyecto, empiezas de cero a buscar el siguiente. Meses sin facturar entre contratos.' },
  { emoji: '📞', title: 'Tu red de contactos se agota', description: 'Los referidos funcionan, pero no escalan. Necesitas un flujo constante de prospectos nuevos.' },
  { emoji: '⏰', title: 'No tienes tiempo para prospectar', description: 'Entre entregas y reuniones con clientes, la prospección siempre queda para "mañana".' },
];

const features = [
  { icon: '🌙', title: 'Prospección nocturna', description: 'La cola 24/7 busca empresas que necesitan tus servicios mientras duermes. Despierta con leads nuevos.', color: COLOR },
  { icon: '🎯', title: 'Segmentación por necesidad', description: 'Filtra empresas por sector, tamaño y señales de necesidad de consultoría (crecimiento, expansión, cambio).', color: COLOR },
  { icon: '📋', title: 'Pipeline de proyectos', description: 'Gestiona propuestas, negociaciones y proyectos activos en un pipeline visual. De lead a cliente en etapas claras.', color: COLOR },
  { icon: '📧', title: 'Outreach personalizado', description: 'Secuencias de email con tu expertise como gancho. Posicionate como referente antes de la primera llamada.', color: COLOR },
  { icon: '🧾', title: 'Facturación por proyecto', description: 'Factura hitos, retainers o por hora. Control de horas, presupuesto y rentabilidad por proyecto.', color: COLOR },
  { icon: '📊', title: 'Pipeline siempre lleno', description: 'Nunca más meses sin facturar. El sistema genera prospectos continuamente para que siempre tengas propuestas en juego.', color: COLOR },
];

const testimonials = [
  { name: 'Javier Hernández', role: 'Consultor de Negocio', company: 'Strategy Hub', quote: 'Mientras duermo, EventosOrganizador encuentra empresas que necesitan consultoría de crecimiento. En 2 meses pasé de buscar clientes a elegir proyectos.', metrics: ['2 meses → pipeline lleno', 'Prospección 24/7', '+60% facturación'] },
];

const faqs = [
  { question: '¿Puedo buscar empresas por sector específico?', answer: 'Sí. Filtra por sector (tech, retail, hospitality...), tamaño, ubicación y señales de necesidad. La búsqueda es tan granular como necesites.' },
  { question: '¿Funciona para consultores independientes?', answer: 'Sí. El plan Starter (€49/mes) es perfecto para consultores individuales. 1 usuario, 500 leads/mes y CRM completo.' },
  { question: '¿Puedo gestionar proyectos en curso?', answer: 'Sí. El pipeline se adapta: etapas de prospección, propuesta, negociación y proyecto activo. Cada fase con sus tareas.' },
  { question: '¿Hay control de horas?', answer: 'Sí. Registra horas por proyecto y cliente. Factura por tiempo o por hito con cálculos automáticos.' },
  { question: '¿Puedo enviar propuestas desde la plataforma?', answer: 'Sí. Crea propuestas con plantillas, envíalas por email y trackea si las abren y cuánto tiempo dedican a leerlas.' },
];

const ConsultoresPage = () => (
  <>
    <Head>
      <title>Para Consultores | EventosOrganizador</title>
      <meta name="description" content="Mientras duermes, encontramos clientes. Prospección 24/7, pipeline de proyectos y facturación por hito para consultores independientes." />
    </Head>
    <Navbar />
    <HeroSection
      badge="Para Consultores"
      title={<>Mientras duermes, <span style={{ color: '#6EE7B7' }}>encontramos clientes</span></>}
      subtitle="Prospección 24/7 de empresas que necesitan tus servicios. Pipeline de proyectos, propuestas y facturación. Todo en uno."
      primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
      secondaryCTA={{ label: 'Solicitar demo', href: '/demo' }}
      benefits={['Prospección 24/7', 'Pipeline proyectos', '€49/mes']}
      breadcrumb={[{ label: 'Soluciones', href: '/soluciones' }, { label: 'Consultores' }]}
      color={COLOR}
    />
    <PainPointsSection painPoints={painPoints} color={COLOR} />
    <FeatureGrid features={features} cols={3} />
    <TestimonialSection testimonials={testimonials} title="Caso de éxito" color={COLOR} />
    <FAQSection faqs={faqs} />
    <CTASection title="Nunca más meses sin facturar" description="Prospección automática 24/7. 14 días gratis." guarantees={['Pipeline lleno', 'Facturación integrada', 'Sin tarjeta de crédito']} color={COLOR} />
    <Footer />
  </>
);

export default ConsultoresPage;
