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

const COLOR = '#6096B9';

const painPoints = [
  { emoji: '📉', title: 'Tu pipeline está vacío el lunes', description: 'Tu equipo dedica la mañana a buscar contactos en vez de vender. Sin leads nuevos, el pipeline se seca.' },
  { emoji: '🎯', title: 'No sabes qué leads priorizar', description: 'Sin scoring, tu equipo trabaja todos los leads por igual. Pierden tiempo con contactos que nunca comprarán.' },
  { emoji: '🔀', title: 'CRM + Excel + email = caos', description: 'Datos en el CRM, seguimiento en Excel, emails sueltos... Tu equipo pierde información crítica cada semana.' },
];

const features = [
  { icon: '🎯', title: 'Leads que llegan solos', description: 'La cola 24/7 busca prospectos mientras tu equipo vende. Pipeline lleno cada mañana sin esfuerzo manual.', color: COLOR },
  { icon: '📊', title: 'Scoring automático', description: 'Cada lead con puntuación 0-100. Tu equipo sabe exactamente a quién llamar primero.', color: COLOR },
  { icon: '📋', title: 'Pipeline Kanban visual', description: 'Drag & drop para mover deals. Toda la información del contacto a un clic. Sin cambiar de herramienta.', color: COLOR },
  { icon: '📧', title: 'Secuencias de email', description: 'Configura secuencias de seguimiento automático. Si no responden al 1er email, el 2do sale solo.', color: COLOR },
  { icon: '💬', title: 'WhatsApp integrado', description: 'Envía mensajes de WhatsApp Business desde el CRM. Chatbots para cualificación inicial.', color: COLOR },
  { icon: '📈', title: 'Métricas del equipo', description: 'Actividades por vendedor, ratio de conversión, ciclo de venta y forecast. Datos para dirigir mejor.', color: COLOR },
];

const testimonials = [
  { name: 'Carlos Ruiz', role: 'Director Comercial', company: 'TechSales', quote: 'El scoring nos permitió enfocar al equipo en los leads con más probabilidad de cierre. Nuestra conversión subió un 40% en el primer trimestre.', metrics: ['+40% conversión', 'Scoring IA', '-50% ciclo venta'] },
];

const faqs = [
  { question: '¿Cuántos vendedores pueden usar la plataforma?', answer: 'Depende del plan: Starter (1 usuario), Growth (5), Scale (15), Enterprise (ilimitados). Cada uno con su vista personalizada.' },
  { question: '¿Se asignan leads automáticamente?', answer: 'Sí. Round-robin, por territorio, por especialización o reglas personalizadas. Los leads se reparten al llegar.' },
  { question: '¿Puedo ver la actividad de mi equipo?', answer: 'Sí. Dashboard de actividades por vendedor: llamadas, emails, reuniones, deals cerrados y pipeline por persona.' },
  { question: '¿Hay previsión de ventas?', answer: 'Sí. Forecast basado en pipeline, probabilidades por etapa y datos históricos. Previsión mensual y trimestral.' },
  { question: '¿Se integra con el email?', answer: 'Sí. Gmail, Outlook y SMTP. Los emails se registran automáticamente en el contacto. Envío y recepción desde el CRM.' },
];

const EquiposVentasPage = () => (
  <>
    <Head>
      <title>Para Equipos de Ventas | EventosOrganizador</title>
      <meta name="description" content="El CRM que genera sus propios leads. Pipeline Kanban, scoring automático, secuencias de email y WhatsApp integrado para equipos comerciales." />
    </Head>
    <Navbar />
    <HeroSection
      badge="Para Equipos de Ventas"
      title={<>El CRM que <span className="text-white/80">genera sus propios leads</span></>}
      subtitle="Tu equipo abre el CRM por la mañana y encuentra leads nuevos con scoring. Solo tienen que vender."
      primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
      secondaryCTA={{ label: 'Solicitar demo', href: '/demo' }}
      benefits={['Scoring 0-100', 'Pipeline Kanban', 'WhatsApp integrado']}
      breadcrumb={[{ label: 'Soluciones', href: '/soluciones' }, { label: 'Equipos de Ventas' }]}
      color={COLOR}
    />
    <PainPointsSection painPoints={painPoints} color={COLOR} />
    <FeatureGrid features={features} cols={3} />
    <TestimonialSection testimonials={testimonials} title="Caso de éxito" color={COLOR} />
    <FAQSection faqs={faqs} />
    <CTASection title="Pipeline lleno cada mañana" description="Leads nuevos con scoring esperando a tu equipo. 14 días gratis." guarantees={['Scoring IA', 'Pipeline Kanban', 'Sin tarjeta de crédito']} color={COLOR} />
    <Footer />
  </>
);

export default EquiposVentasPage;
