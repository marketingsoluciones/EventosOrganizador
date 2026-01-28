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

const COLOR = '#EC4899';

const painPoints = [
  { emoji: '📋', title: 'Excel para invitados, otro Excel para proveedores', description: 'Gestionas cada boda con hojas de cálculo que se descontrolan. Un error en el menú y tienes un problema el día D.' },
  { emoji: '📱', title: 'WhatsApp personal para confirmar asistencia', description: 'Mensajes sueltos, confirmaciones que se pierden, novias que preguntan "¿cuántos han confirmado?" y no sabes responder al instante.' },
  { emoji: '💰', title: 'Presupuestos en Word que no cuadran', description: 'Cada proveedor con su formato, gastos que se olvidan, el presupuesto real siempre supera al estimado.' },
];

const features = [
  { icon: '💒', title: 'Ficha completa de boda', description: 'Pareja, fecha, venue, presupuesto, estado y timeline. Todo en un solo lugar, accesible desde móvil.', color: COLOR },
  { icon: '📋', title: 'RSVP digital', description: 'Enlace personalizado para cada invitado. Confirman asistencia, acompañantes y preferencias de menú online.', color: COLOR },
  { icon: '🍽️', title: 'Catering y menús', description: 'Menús con alérgenos, opciones vegetariana/infantil. Las cantidades se calculan solas según confirmaciones.', color: COLOR },
  { icon: '🤝', title: 'Directorio de proveedores', description: 'Ratings, presupuestos, disponibilidad e historial. Compara opciones y gestiona contratos desde el CRM.', color: COLOR },
  { icon: '📅', title: 'Calendario integrado', description: 'Todas las bodas, reuniones y deadlines sincronizados con Google Calendar.', color: COLOR },
  { icon: '👰', title: 'Portal de cliente', description: 'Tus parejas ven el progreso de su boda: confirmaciones, timeline y documentos. Profesionalidad total.', color: COLOR },
];

const testimonials = [
  { name: 'Ana Martín', role: 'Wedding Planner', company: 'Bodas con Alma', quote: 'Por fin un CRM que entiende mi negocio. Gestiono invitados, catering y proveedores desde un solo lugar. Mis novias están encantadas con el portal donde ven todo el progreso.', metrics: ['+200 bodas/año', 'RSVP digital', '-60% admin'] },
];

const faqs = [
  { question: '¿Es solo para bodas?', answer: 'No. Funciona para cualquier evento social: bautizos, comuniones, cumpleaños y corporativos. Las plantillas se adaptan.' },
  { question: '¿Los invitados necesitan descargar una app?', answer: 'No. El RSVP funciona con un enlace web. Abren, confirman y listo. Compatible con cualquier móvil.' },
  { question: '¿Puedo gestionar varias bodas a la vez?', answer: 'Sí. Sin límite. Cada boda con su propio pipeline, invitados, proveedores y presupuesto independiente.' },
  { question: '¿Mis parejas pueden ver el progreso?', answer: 'Sí. El portal de cliente muestra confirmaciones, timeline, proveedores contratados y documentos en tiempo real.' },
  { question: '¿Hay plantillas de timeline y checklist?', answer: 'Sí. Plantillas pre-configuradas para diferentes tipos de boda. Personaliza y reutiliza.' },
];

const WeddingPlannersPage = () => (
  <>
    <Head>
      <title>Para Wedding Planners | EventosOrganizador</title>
      <meta name="description" content="El único CRM diseñado para bodas. RSVP digital, catering con menús, proveedores con ratings, calendario integrado y portal de cliente." />
    </Head>
    <Navbar />
    <HeroSection
      badge="Para Wedding Planners"
      title={<>El único CRM <span style={{ color: COLOR }}>diseñado para bodas</span></>}
      subtitle="RSVP digital, catering con alérgenos, proveedores con ratings y portal para tus parejas. Deja de usar Excel para organizar bodas."
      primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
      secondaryCTA={{ label: 'Solicitar demo', href: '/demo' }}
      benefits={['RSVP digital', 'Portal de cliente', 'Catering y menús']}
      breadcrumb={[{ label: 'Soluciones', href: '/soluciones' }, { label: 'Wedding Planners' }]}
      color={COLOR}
    />
    <PainPointsSection painPoints={painPoints} color={COLOR} />
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Funcionalidades para bodas perfectas</h2>
          <p className="text-lg text-gray-600">RSVP digital, catering con alérgenos, proveedores y portal de cliente en una sola plataforma.</p>
        </div>
        <FeatureGrid features={features} cols={3} />
      </div>
    </section>
    <TestimonialSection testimonials={testimonials} title="Caso de éxito" color={COLOR} />
    <FAQSection faqs={faqs} />
    <CTASection title="Organiza bodas como una profesional" description="RSVP, catering y proveedores en un solo lugar. 14 días gratis." guarantees={['Plantillas incluidas', 'Portal de cliente', 'Sin tarjeta de crédito']} color={COLOR} />
    <Footer />
  </>
);

export default WeddingPlannersPage;
