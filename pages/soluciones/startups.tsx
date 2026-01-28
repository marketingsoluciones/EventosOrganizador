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

const COLOR = '#8B5CF6';

const painPoints = [
  { emoji: '💸', title: 'No puedes pagar HubSpot + Apollo + facturación', description: 'Como startup, cada euro cuenta. Pagar 3-4 herramientas SaaS por separado no es viable con tu runway actual.' },
  { emoji: '👤', title: 'No tienes SDR ni presupuesto para contratar uno', description: 'Necesitas generar pipeline pero no puedes permitirte un SDR a tiempo completo. Tú mismo haces prospección entre reunión y reunión.' },
  { emoji: '⏰', title: 'Haces todo: producto, ventas, admin y soporte', description: 'Como founder, cada hora que dedicas a buscar clientes manualmente es una hora menos para tu producto.' },
];

const features = [
  { icon: '🤖', title: 'Tu primer SDR virtual', description: 'La cola 24/7 busca prospectos mientras tú construyes producto. Pipeline lleno sin contratar.', color: COLOR },
  { icon: '📊', title: 'CRM desde día 1', description: 'Pipeline Kanban listo para usar. Sin configuración compleja. Empieza a vender en minutos.', color: COLOR },
  { icon: '💰', title: 'Todo por €49/mes', description: 'CRM + leads + facturación + automatizaciones. Un precio, una herramienta, cero integraciones rotas.', color: COLOR },
  { icon: '⚡', title: 'Setup en 15 minutos', description: 'Sin consultor, sin implementación de semanas. Regístrate, configura tu ICP y lanza la primera campaña.', color: COLOR },
  { icon: '📧', title: 'Outbound automatizado', description: 'Secuencias de email que se envían solas. Personalización con variables. Follow-ups automáticos.', color: COLOR },
  { icon: '🧾', title: 'Facturación incluida', description: 'Factura a tus primeros clientes sin contratar otro SaaS. OCR, tesorería y cobros con Stripe.', color: COLOR },
];

const testimonials = [
  { name: 'Pedro López', role: 'Founder', company: 'StartupFlow', quote: 'Como startup no podíamos pagar HubSpot + Apollo + Holded. EventosOrganizador nos da todo por €49/mes. Es nuestro primer SDR que no cobra sueldo. En 3 meses llenamos el pipeline.', metrics: ['€49/mes', 'Todo en uno', '3 meses → pipeline lleno'] },
];

const faqs = [
  { question: '¿Es suficiente para una startup early-stage?', answer: 'Sí. El plan Starter (€49/mes) incluye 500 leads/mes, CRM, facturación y automatizaciones básicas. Todo lo que necesitas para empezar a vender.' },
  { question: '¿Puedo escalar cuando crezca?', answer: 'Sí. Sube de plan cuando lo necesites: Growth (€149), Scale (€299) o Enterprise. Sin migración, sin perder datos.' },
  { question: '¿Necesito técnicos para configurarlo?', answer: 'No. Setup en 15 minutos sin código. Si necesitas ayuda, el soporte 24/7 te guía paso a paso.' },
  { question: '¿Puedo usar solo el CRM sin los leads?', answer: 'Sí. Cada módulo funciona independientemente. Usa solo el CRM y activa leads cuando estés listo.' },
  { question: '¿Hay descuento para startups?', answer: 'El plan Starter a €49/mes ya está pensado para startups. Contacta con ventas para programas especiales de incubadoras.' },
];

const StartupsPage = () => (
  <>
    <Head>
      <title>Para Startups | EventosOrganizador</title>
      <meta name="description" content="Tu primer SDR que no cobra sueldo. CRM + leads + facturación por €49/mes. Todo lo que necesita tu startup para empezar a vender." />
    </Head>
    <Navbar />
    <HeroSection
      badge="Para Startups"
      title={<>Tu primer SDR <span style={{ color: '#C4B5FD' }}>que no cobra sueldo</span></>}
      subtitle="CRM + generación de leads + facturación por €49/mes. Una herramienta, un precio, cero excusas para no vender."
      primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
      secondaryCTA={{ label: 'Solicitar demo', href: '/demo' }}
      benefits={['€49/mes todo incluido', 'Setup en 15 min', 'Sin tarjeta']}
      breadcrumb={[{ label: 'Soluciones', href: '/soluciones' }, { label: 'Startups' }]}
      color={COLOR}
    />
    <PainPointsSection painPoints={painPoints} color={COLOR} />
    <FeatureGrid features={features} cols={3} />
    <TestimonialSection testimonials={testimonials} title="Caso de éxito" color={COLOR} />
    <FAQSection faqs={faqs} />
    <CTASection title="Empieza a vender, no a buscar" description="Tu SDR virtual trabaja 24/7. 14 días gratis." guarantees={['€49/mes', '15 min setup', 'Sin tarjeta de crédito']} color={COLOR} />
    <Footer />
  </>
);

export default StartupsPage;
