import React from 'react';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import HeroSection from '@/components/shared/HeroSection';
import FeatureGrid from '@/components/shared/FeatureGrid';
import StatsBar from '@/components/shared/StatsBar';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const features = [
  { icon: '💒', title: 'Gestión de Bodas', description: 'Ficha completa de cada boda: pareja, fecha, venue, presupuesto, estado y timeline. Todo organizado en un solo lugar.' },
  { icon: '📋', title: 'Lista de Invitados + RSVP', description: 'Gestiona invitados con confirmaciones digitales. RSVP por enlace, WhatsApp o email. Seguimiento en tiempo real.' },
  { icon: '🍽️', title: 'Catering y Menús', description: 'Configura menús con opciones (alérgenos, vegetariano, infantil). Asigna a mesas y calcula cantidades automáticamente.' },
  { icon: '🤝', title: 'Proveedores', description: 'Directorio de proveedores con ratings, presupuestos y disponibilidad. Compara opciones y gestiona contratos desde el CRM.' },
  { icon: '📅', title: 'Calendario Integrado', description: 'Calendario con todas las bodas, reuniones, pruebas y deadlines. Sincroniza con Google Calendar y Outlook.' },
  { icon: '📄', title: 'Plantillas y Documentos', description: 'Contratos, presupuestos, timelines y listas de tareas pre-configuradas. Personaliza y reutiliza para cada evento.' },
];

const faqs = [
  { question: '¿Es solo para bodas?', answer: 'No. Funciona para cualquier evento social: bodas, bautizos, comuniones, cumpleaños, eventos corporativos... Las plantillas se adaptan a cada tipo.' },
  { question: '¿Cómo funciona el RSVP digital?', answer: 'Genera un enlace personalizado para cada invitado. Pueden confirmar asistencia, indicar acompañantes, alergias y preferencias de menú. Tú ves todo en tiempo real.' },
  { question: '¿Puedo gestionar menús con alérgenos?', answer: 'Sí. Configura menús con opciones de alérgenos, vegetariano, vegano, infantil y especial. Los invitados seleccionan su opción en el RSVP.' },
  { question: '¿Se integra con Google Calendar?', answer: 'Sí. Sincronización bidireccional con Google Calendar y Outlook. Los eventos y reuniones aparecen automáticamente.' },
  { question: '¿Puedo gestionar el presupuesto de cada boda?', answer: 'Sí. Presupuesto desglosado por categoría (venue, catering, flores, música...) con seguimiento de pagos y comparación real vs. presupuestado.' },
  { question: '¿Mis clientes pueden ver el progreso?', answer: 'Sí. Portal de cliente donde las parejas ven el estado de su boda: confirmaciones, timeline, proveedores contratados y documentos.' },
  { question: '¿Cuántas bodas puedo gestionar?', answer: 'Sin límite. Gestiona todas las bodas que necesites simultáneamente, cada una con su propio pipeline y seguimiento.' },
  { question: '¿Hay plantillas pre-configuradas?', answer: 'Sí. Plantillas de timeline, checklist, contratos y presupuestos para diferentes tipos de eventos. Personaliza y reutiliza.' },
];

const EventosBodasPage = () => {
  return (
    <>
      <Head>
        <title>Eventos y Bodas | EventosOrganizador</title>
        <meta name="description" content="El único CRM diseñado para bodas: invitados RSVP, catering con menús, proveedores, calendario integrado y plantillas profesionales." />
      </Head>

      <Navbar />

      <HeroSection
        badge="Eventos y Bodas"
        title={<>El único CRM que <span className="text-[#6096B9]">entiende de bodas</span></>}
        subtitle="Gestiona invitados con RSVP digital, menús con alérgenos, proveedores con ratings y calendario integrado. Diseñado por y para wedding planners."
        primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
        secondaryCTA={{ label: 'Ver demo', href: '/demo' }}
        benefits={['RSVP digital', 'Catering y menús', 'Proveedores integrados']}
        breadcrumb={[{ label: 'Funcionalidades', href: '/funcionalidades' }, { label: 'Eventos y Bodas' }]}
        color="#EC4899"
      />

      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Todo para organizar eventos perfectos</h2>
            <p className="text-lg text-gray-600">Invitados, catering, proveedores y calendario en un solo lugar</p>
          </div>
          <FeatureGrid features={features} cols={3} />
        </div>
      </section>

      <section className="w-full py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <StatsBar
            stats={[
              { value: '+200', label: 'Bodas gestionadas/año' },
              { value: 'RSVP', label: 'Digital integrado' },
              { value: '100%', label: 'Control del evento' },
              { value: '∞', label: 'Invitados por boda' },
            ]}
            variant="gradient"
            color="#EC4899"
          />
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Gestiona bodas como un profesional"
        description="RSVP digital, catering y proveedores en un solo lugar. 14 días gratis."
        guarantees={['Sin tarjeta de crédito', 'Plantillas incluidas', 'Soporte 24/7']}
        color="#EC4899"
      />

      <Footer />
    </>
  );
};

export default EventosBodasPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}
