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
  { icon: '📋', title: 'Pipeline Kanban', description: 'Arrastra y suelta deals entre etapas. Visualiza todo tu pipeline de ventas de un vistazo con tablero Kanban personalizable.' },
  { icon: '👤', title: 'Ficha de Contacto Enriquecida', description: 'Toda la información del contacto en un solo lugar: datos, historial de interacciones, emails, llamadas y documentos.' },
  { icon: '🏢', title: 'Entidades y Empresas', description: 'Vincula contactos a empresas, gestiona jerarquías organizativas y ve el valor total por cuenta.' },
  { icon: '🎯', title: 'Scoring Automático 0-100', description: 'Cada lead recibe una puntuación basada en datos demográficos, comportamiento e interacciones. Prioriza lo que importa.' },
  { icon: '📧', title: 'Campañas Multicanal', description: 'Envía secuencias de email, WhatsApp y seguimiento automatizado. Personaliza cada mensaje con variables dinámicas.' },
  { icon: '🔍', title: 'Vistas y Búsqueda Avanzada', description: 'Filtra contactos por cualquier campo, crea vistas guardadas y segmentos dinámicos que se actualizan solos.' },
  { icon: '⚡', title: 'Tiempo Real con WebSockets', description: 'Actualizaciones instantáneas cuando un deal cambia de etapa, llega un lead o se completa una tarea. Sin refrescar página.' },
];

const faqs = [
  { question: '¿Puedo personalizar las etapas del pipeline?', answer: 'Sí. Crea tantas etapas como necesites, con nombres, colores y probabilidades de cierre personalizadas. Cada pipeline puede tener su propia estructura.' },
  { question: '¿Cómo funciona el scoring de leads?', answer: 'El scoring asigna puntos de 0 a 100 basándose en datos del contacto (cargo, tamaño empresa), comportamiento (aperturas email, clics) e interacciones (llamadas, reuniones). Se actualiza automáticamente.' },
  { question: '¿Puedo enviar emails desde el CRM?', answer: 'Sí. Conecta tu cuenta de email (Gmail, Outlook, SMTP) y envía directamente desde el CRM. Los emails se registran automáticamente en la ficha del contacto.' },
  { question: '¿Se integra con WhatsApp?', answer: 'Sí. Conecta WhatsApp Business para enviar mensajes, crear chatbots y campañas masivas desde el CRM.' },
  { question: '¿Puedo importar datos de otro CRM?', answer: 'Sí. Importa desde CSV, Excel, HubSpot, Pipedrive o Salesforce. El asistente de importación mapea campos automáticamente.' },
  { question: '¿Cuántos contactos puedo tener?', answer: 'Depende del plan: Starter (1.000), Growth (10.000), Scale (50.000), Enterprise (ilimitados).' },
  { question: '¿El CRM incluye generación de leads?', answer: 'Sí. El módulo de Generación de Leads está integrado. Los leads verificados llegan directamente al pipeline con scoring asignado.' },
  { question: '¿Hay app móvil?', answer: 'La plataforma es 100% responsive y funciona perfectamente en móvil y tablet. Accede desde cualquier navegador.' },
];

const CRMPage = () => {
  return (
    <>
      <Head>
        <title>CRM Pipeline | EventosOrganizador</title>
        <meta name="description" content="CRM con pipeline Kanban, scoring automático 0-100, campañas multicanal y ficha de contacto enriquecida. Todo en tiempo real con WebSockets." />
      </Head>

      <Navbar />

      <HeroSection
        badge="CRM Pipeline"
        title={<>El CRM que <span className="text-[#6096B9]">genera sus propios leads</span></>}
        subtitle="Pipeline Kanban visual con scoring automático, campañas multicanal y datos en tiempo real. No solo gestiona contactos: los encuentra por ti."
        primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
        secondaryCTA={{ label: 'Ver demo', href: '/demo' }}
        benefits={['Scoring 0-100', 'Campañas multicanal', 'Tiempo real']}
        breadcrumb={[{ label: 'Funcionalidades', href: '/funcionalidades' }, { label: 'CRM Pipeline' }]}
      />

      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Todo lo que necesitas para vender más</h2>
            <p className="text-lg text-gray-600">Herramientas integradas para gestionar tu pipeline de ventas de principio a fin</p>
          </div>
          <FeatureGrid features={features} cols={3} />
        </div>
      </section>

      <section className="w-full py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <StatsBar
            stats={[
              { value: '+40%', label: 'Más conversión' },
              { value: '0-100', label: 'Scoring automático' },
              { value: '< 1s', label: 'Actualización real-time' },
              { value: '∞', label: 'Pipelines personalizados' },
            ]}
            variant="gradient"
          />
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Tu pipeline, siempre lleno"
        description="CRM + generación de leads integrados. 14 días gratis."
        guarantees={['Pipeline Kanban', 'Scoring IA', 'Sin tarjeta de crédito']}
      />

      <Footer />
    </>
  );
};

export default CRMPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}
