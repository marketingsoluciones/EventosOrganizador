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

const COLOR = '#FF8C00';

const painPoints = [
  { emoji: '😤', title: 'Tus clientes piden leads y no tienes herramientas', description: 'Generar listas de prospectos para campañas outbound es manual y lento. Pierdes horas en Google y directorios.' },
  { emoji: '💸', title: 'Pagas Apollo + HubSpot + Holded por separado', description: 'Múltiples suscripciones que no se integran. Datos dispersos, procesos rotos y facturas que se acumulan.' },
  { emoji: '📉', title: 'No demuestras ROI a tus clientes', description: 'Sin métricas claras de leads generados, contactados y convertidos, es difícil justificar tus honorarios.' },
];

const features = [
  { icon: '🎯', title: 'Generación masiva de leads', description: 'Genera +1.000 leads por sector y ubicación para cada cliente. Google Places, Yelp, Foursquare y web scraping.', color: COLOR },
  { icon: '📧', title: 'Campañas multicanal', description: 'Email, WhatsApp y seguimiento automatizado. Secuencias personalizadas por cliente y sector.', color: COLOR },
  { icon: '📊', title: 'Reporting por cliente', description: 'Dashboards separados por cliente con leads generados, contactados, convertidos y ROI. Exporta PDF.', color: COLOR },
  { icon: '🏷️', title: 'Marca blanca', description: 'Plataforma con tu logo y colores. Tus clientes acceden a su panel sin ver EventosOrganizador.', color: COLOR },
  { icon: '⚡', title: 'Automatización 24/7', description: 'Las colas de captación trabajan de noche. Tus clientes despiertan con leads nuevos cada mañana.', color: COLOR },
  { icon: '💰', title: 'Facturación integrada', description: 'Factura a tus clientes desde la misma plataforma. OCR para gastos, tesorería y reconciliación.', color: COLOR },
];

const testimonials = [
  { name: 'María González', role: 'CEO', company: 'Agencia MarketPro', quote: 'En 2 semanas generamos 3.000 leads para un cliente de hostelería. Antes tardábamos un mes. Ahora ofrecemos generación de leads como servicio premium y hemos triplicado nuestro ticket medio.', metrics: ['+3.000 leads/2 semanas', '3x ticket medio', '-70% tiempo'] },
];

const faqs = [
  { question: '¿Puedo gestionar múltiples clientes?', answer: 'Sí. Cada cliente tiene su espacio separado con leads, campañas y reporting independiente. Cambia entre clientes con un clic.' },
  { question: '¿Mis clientes pueden acceder a la plataforma?', answer: 'Sí. Con marca blanca, tus clientes acceden a su panel personalizado con tu logo. Ven sus leads y métricas sin ver EventosOrganizador.' },
  { question: '¿Cuántos leads puedo generar por cliente?', answer: 'Depende del plan. Growth permite 2.500 leads/mes totales para repartir entre tus clientes. Scale sube a 10.000/mes.' },
  { question: '¿Puedo revender la plataforma?', answer: 'Sí. Con el plan Scale o Enterprise puedes ofrecer EventosOrganizador como tu propia herramienta en marca blanca.' },
  { question: '¿Hay descuento para agencias?', answer: 'Sí. Contacta con ventas para planes de agencia con precios especiales por volumen de clientes.' },
];

const AgenciasMarketingPage = () => (
  <>
    <Head>
      <title>Para Agencias de Marketing | EventosOrganizador</title>
      <meta name="description" content="Genera 1.000 leads para cualquier sector en 48h. Plataforma marca blanca para agencias con reporting por cliente y facturación integrada." />
    </Head>
    <Navbar />
    <HeroSection
      badge="Para Agencias"
      title={<>Genera <span style={{ color: '#FFD4A0' }}>1.000 leads</span> para cualquier sector en 48h</>}
      subtitle="Ofrece generación de leads como servicio premium. Marca blanca, reporting por cliente y facturación integrada. Todo en una plataforma."
      primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
      secondaryCTA={{ label: 'Solicitar demo', href: '/demo' }}
      benefits={['Marca blanca', 'Multi-cliente', '+1.000 leads/semana']}
      breadcrumb={[{ label: 'Soluciones', href: '/soluciones' }, { label: 'Agencias de Marketing' }]}
      color={COLOR}
    />
    <PainPointsSection painPoints={painPoints} color={COLOR} />
    <FeatureGrid features={features} cols={3} />
    <TestimonialSection testimonials={testimonials} title="Caso de éxito" color={COLOR} />
    <FAQSection faqs={faqs} />
    <CTASection title="Potencia tu agencia" description="Genera leads para tus clientes desde hoy. 14 días gratis." guarantees={['Marca blanca', 'Multi-cliente', 'Sin tarjeta de crédito']} color={COLOR} />
    <Footer />
  </>
);

export default AgenciasMarketingPage;
