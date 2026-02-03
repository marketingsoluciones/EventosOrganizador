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
  { icon: '📬', title: 'Colas de Trabajo', description: 'Sistema de colas distribuido que procesa tareas en segundo plano: envío de emails, enriquecimiento de leads, generación de informes.' },
  { icon: '⚙️', title: 'Workers Distribuidos', description: 'Workers que escalan automáticamente según la carga. Procesan miles de tareas en paralelo sin afectar el rendimiento.' },
  { icon: '⏰', title: 'Jobs Programados', description: 'Programa tareas recurrentes: campañas de email, limpieza de datos, informes semanales, backups y sincronizaciones.' },
  { icon: '🚀', title: 'Ejecución Automática', description: 'Triggers basados en eventos: cuando llega un lead, cambia un deal, se crea una factura... se ejecuta la acción configurada.' },
  { icon: '🔗', title: 'Webhooks y API', description: 'Conecta con herramientas externas mediante webhooks entrantes y salientes. API REST completa para integraciones custom.' },
  { icon: '📊', title: 'Monitor de Ejecución', description: 'Dashboard de jobs con estado, logs, tiempos de ejecución y alertas de error. Visibilidad total de las automatizaciones.' },
];

const faqs = [
  { question: '¿Qué tipo de tareas puedo automatizar?', answer: 'Envío de emails y WhatsApp, enriquecimiento de leads, scoring, generación de informes, facturación recurrente, limpieza de datos, backups y cualquier flujo personalizado.' },
  { question: '¿Necesito programar para crear automatizaciones?', answer: 'No. Las automatizaciones se configuran con triggers visuales (cuando pasa X, haz Y). Para flujos avanzados, hay API y webhooks.' },
  { question: '¿Las colas funcionan de noche?', answer: 'Sí. Las colas y workers funcionan 24/7 sin intervención. Los jobs programados se ejecutan a la hora configurada.' },
  { question: '¿Puedo ver el historial de ejecuciones?', answer: 'Sí. El monitor muestra cada ejecución con estado, duración, logs y errores. Puedes reintentar jobs fallidos con un clic.' },
  { question: '¿Hay límite de automatizaciones?', answer: 'No hay límite en el número de automatizaciones. El límite está en las ejecuciones mensuales según tu plan.' },
  { question: '¿Se pueden conectar con Zapier o Make?', answer: 'Sí. Los webhooks permiten integración con Zapier, Make, n8n y cualquier plataforma que soporte webhooks.' },
];

const AutomatizacionesPage = () => {
  return (
    <>
      <Head>
        <title>Automatizaciones | EventosOrganizador</title>
        <meta name="description" content="Automatiza tu negocio con colas de trabajo 24/7, workers distribuidos, jobs programados y ejecución automática basada en eventos." />
      </Head>

      <Navbar />

      <HeroSection
        badge="Automatizaciones"
        title={<>Tu negocio funciona <span className="text-[#6096B9]">mientras duermes</span></>}
        subtitle="Colas de trabajo 24/7, workers distribuidos y jobs programados. Automatiza captación, seguimiento, facturación y todo lo repetitivo."
        primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
        secondaryCTA={{ label: 'Ver demo', href: '/demo' }}
        benefits={['24/7 activo', 'Sin código', 'Triggers automáticos']}
        breadcrumb={[{ label: 'Funcionalidades', href: '/funcionalidades' }, { label: 'Automatizaciones' }]}
      />

      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Todo lo que necesitas para automatizar</h2>
            <p className="text-lg text-gray-600">Colas, workers y triggers que trabajan por ti 24/7</p>
          </div>
          <FeatureGrid features={features} cols={3} />
        </div>
      </section>

      <section className="w-full py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <StatsBar
            stats={[
              { value: '24/7', label: 'Colas activas' },
              { value: '∞', label: 'Automatizaciones' },
              { value: '< 1s', label: 'Tiempo de trigger' },
              { value: '100%', label: 'Trazabilidad' },
            ]}
            variant="gradient"
          />
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Automatiza lo repetitivo"
        description="Colas 24/7 que trabajan por ti. 14 días gratis."
        guarantees={['Sin código', 'Sin tarjeta de crédito', 'Workers ilimitados']}
      />

      <Footer />
    </>
  );
};

export default AutomatizacionesPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}
