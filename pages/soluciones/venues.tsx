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

const COLOR = '#3B82F6';

const painPoints = [
  { emoji: '📅', title: 'Calendario en papel o Excel', description: 'Reservas que se solapan, fechas bloqueadas que se olvidan. Un error de disponibilidad puede costarte un evento.' },
  { emoji: '📞', title: 'Cada consulta por teléfono', description: 'Parejas y organizadores llaman preguntando disponibilidad. Respondes las mismas preguntas 20 veces al día.' },
  { emoji: '💰', title: 'Presupuestos que tardan días', description: 'Cada presupuesto personalizado te lleva horas. Mientras tanto, el cliente visita otro venue.' },
];

const features = [
  { icon: '📅', title: 'Calendario de reservas', description: 'Calendario visual con todas las reservas, bloqueos y tentativas. Vista diaria, semanal y mensual.', color: COLOR },
  { icon: '🏛️', title: 'Ficha de espacios', description: 'Cada espacio con fotos, capacidad, servicios incluidos y precios. Tus clientes ven la info online.', color: COLOR },
  { icon: '💰', title: 'Presupuestos automáticos', description: 'Configura tarifas por espacio, temporada y servicios. El presupuesto se genera en segundos.', color: COLOR },
  { icon: '📋', title: 'Pipeline de eventos', description: 'De consulta a reserva confirmada. Pipeline visual con etapas: consulta, visita, propuesta, reserva, evento.', color: COLOR },
  { icon: '🍽️', title: 'Catering propio o externo', description: 'Gestiona tus menús propios o coordina con caterings externos. Cantidades por confirmaciones.', color: COLOR },
  { icon: '🎯', title: 'Captación de clientes', description: 'Genera leads de parejas y organizadores con la cola 24/7. Tu venue siempre con agenda llena.', color: COLOR },
];

const testimonials = [
  { name: 'Sofía Campos', role: 'Propietaria', company: 'Finca La Encina', quote: 'Antes respondía 30 emails y llamadas al día sobre disponibilidad. Ahora el calendario online responde solo. Mis presupuestos salen en segundos y he triplicado las reservas.', metrics: ['3x reservas', '-80% consultas', 'Presupuestos en segundos'] },
];

const faqs = [
  { question: '¿Puedo mostrar disponibilidad online?', answer: 'Sí. Calendario público embebible en tu web. Los clientes ven fechas disponibles sin llamar.' },
  { question: '¿Gestiona varios espacios?', answer: 'Sí. Cada espacio con su calendario, capacidad, precios y servicios independientes.' },
  { question: '¿Los presupuestos se generan solos?', answer: 'Sí. Configura tarifas base y extras. El presupuesto se calcula automáticamente según espacio, fecha y servicios.' },
  { question: '¿Puedo cobrar señales online?', answer: 'Sí. Integración con Stripe para cobrar señales, pagos parciales y saldo final. Todo automatizado.' },
  { question: '¿Se integra con mi web?', answer: 'Sí. Embebe el calendario y formulario de consulta en tu web con un código. Sin desarrollo necesario.' },
];

const VenuesPage = () => (
  <>
    <Head>
      <title>Para Venues y Fincas | EventosOrganizador</title>
      <meta name="description" content="Gestiona tu venue como un profesional. Calendario de reservas, presupuestos automáticos, pipeline de eventos y captación de clientes." />
    </Head>
    <Navbar />
    <HeroSection
      badge="Para Venues"
      title={<>Gestiona tu venue <span style={{ color: COLOR }}>como un profesional</span></>}
      subtitle="Calendario de reservas, presupuestos automáticos en segundos y pipeline de eventos. Tu finca o venue siempre con la agenda llena."
      primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
      secondaryCTA={{ label: 'Solicitar demo', href: '/demo' }}
      benefits={['Calendario online', 'Presupuestos auto', 'Cobros Stripe']}
      breadcrumb={[{ label: 'Soluciones', href: '/soluciones' }, { label: 'Venues' }]}
      color={COLOR}
    />
    <PainPointsSection painPoints={painPoints} color={COLOR} />
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gestiona tu venue de forma profesional</h2>
          <p className="text-lg text-gray-600">Calendario de reservas, presupuestos automáticos, catering y captación de clientes.</p>
        </div>
        <FeatureGrid features={features} cols={3} />
      </div>
    </section>
    <TestimonialSection testimonials={testimonials} title="Caso de éxito" color={COLOR} />
    <FAQSection faqs={faqs} />
    <CTASection title="Tu venue, siempre lleno" description="Calendario, presupuestos y captación en un solo lugar. 14 días gratis." guarantees={['Calendario online', 'Presupuestos auto', 'Sin tarjeta de crédito']} color={COLOR} />
    <Footer />
  </>
);

export default VenuesPage;
