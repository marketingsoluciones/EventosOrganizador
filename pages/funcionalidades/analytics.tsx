import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import HeroSection from '@/components/shared/HeroSection';
import FeatureGrid from '@/components/shared/FeatureGrid';
import StatsBar from '@/components/shared/StatsBar';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const features = [
  { icon: '📊', title: 'Dashboards en Tiempo Real', description: 'Paneles con datos actualizados al instante via WebSockets. Ventas, leads, conversión, pipeline y métricas clave en vivo.' },
  { icon: '📝', title: 'Audit Logs', description: 'Registro completo de toda actividad: quién hizo qué, cuándo y desde dónde. Trazabilidad total para compliance y seguridad.' },
  { icon: '✅', title: 'Calidad de Datos', description: 'Detección automática de duplicados, campos vacíos, datos inconsistentes y contactos obsoletos. Mantén tu base limpia.' },
  { icon: '📤', title: 'Exportación PDF/Excel/API', description: 'Exporta cualquier informe a PDF, Excel o consume datos por API. Comparte con stakeholders o integra con BI externo.' },
];

const faqs = [
  { question: '¿Los dashboards se actualizan en tiempo real?', answer: 'Sí. Usamos WebSockets para actualizar los datos al instante. Cuando cambia un deal, llega un lead o se cierra una venta, lo ves inmediatamente.' },
  { question: '¿Puedo crear dashboards personalizados?', answer: 'Sí. Arrastra y suelta widgets para crear tu dashboard ideal. Métricas, gráficos, tablas y KPIs configurables.' },
  { question: '¿Qué registran los audit logs?', answer: 'Toda actividad: login, cambios en datos, emails enviados, deals movidos, facturas creadas... Con usuario, timestamp e IP.' },
  { question: '¿Puedo exportar a Excel?', answer: 'Sí. Exporta contactos, deals, facturas, leads y cualquier listado a Excel, CSV o PDF con un clic.' },
  { question: '¿Hay API para integrar con Power BI?', answer: 'Sí. API REST completa con autenticación por token. Conecta con Power BI, Tableau, Google Data Studio o tu herramienta preferida.' },
  { question: '¿La calidad de datos es automática?', answer: 'Sí. El sistema analiza periódicamente tu base de datos y detecta duplicados, campos vacíos y datos inconsistentes. Puedes corregir en lote.' },
];

const AnalyticsPage = () => {
  return (
    <>
      <Head>
        <title>Analytics | EventosOrganizador</title>
        <meta name="description" content="Dashboards en tiempo real con WebSockets, audit logs, calidad de datos y exportación PDF/Excel/API. Toma decisiones con datos, no intuiciones." />
      </Head>

      <Navbar />

      <HeroSection
        badge="Analytics"
        title={<>Decisiones con datos, <span className="text-white/80">no con intuiciones</span></>}
        subtitle="Dashboards en tiempo real, audit logs completos, calidad de datos automática y exportación a cualquier formato. Tu negocio, en números."
        primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
        secondaryCTA={{ label: 'Ver demo', href: '/demo' }}
        benefits={['Tiempo real', 'Audit logs', 'Exportación total']}
        breadcrumb={[{ label: 'Funcionalidades', href: '/funcionalidades' }, { label: 'Analytics' }]}
      />

      <FeatureGrid features={features} cols={2} />

      <StatsBar
        stats={[
          { value: 'Real-time', label: 'Dashboards WebSockets' },
          { value: '100%', label: 'Trazabilidad' },
          { value: 'Auto', label: 'Limpieza de datos' },
          { value: 'PDF/XLS/API', label: 'Formatos de exportación' },
        ]}
        variant="gradient"
      />

      <FAQSection faqs={faqs} />

      <CTASection
        title="Datos en tiempo real para crecer"
        description="Dashboards, audit logs y exportación. 14 días gratis."
        guarantees={['WebSockets', 'Sin tarjeta de crédito', 'API completa']}
      />

      <Footer />
    </>
  );
};

export default AnalyticsPage;
