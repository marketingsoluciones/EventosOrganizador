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

const COLOR = '#F59E0B';

const painPoints = [
  { emoji: '🧾', title: 'Introduces facturas manualmente', description: 'Cada factura de proveedor requiere copiar datos a mano. Con 50+ facturas al mes, pierdes medio día cada semana.' },
  { emoji: '🏦', title: 'Conciliar pagos es un infierno', description: 'Cruzar extractos bancarios con facturas en Excel. Algún pago siempre queda sin conciliar.' },
  { emoji: '📊', title: 'Los informes llegan tarde', description: 'El cierre mensual se retrasa porque los datos están dispersos. Tomas decisiones con información de hace semanas.' },
];

const features = [
  { icon: '📸', title: 'OCR con Claude Vision', description: 'Foto de factura → datos en 5 segundos. Proveedor, importes, IVA, fecha y concepto extraídos con IA.', color: COLOR },
  { icon: '🧾', title: 'Facturación automática', description: 'Genera y envía facturas con un clic. Numeración secuencial, plantillas y envío por email.', color: COLOR },
  { icon: '💳', title: 'Cobros con Stripe', description: 'Tarjeta, SEPA, wallet prepago y pagos recurrentes. Tus clientes pagan online.', color: COLOR },
  { icon: '🏦', title: 'Tesorería multi-cuenta', description: 'Múltiples cuentas bancarias, flujo de caja y programación de pagos a proveedores.', color: COLOR },
  { icon: '🔄', title: 'Reconciliación automática', description: 'Importa extractos y el sistema cruza movimientos con facturas. Sin trabajo manual.', color: COLOR },
  { icon: '📊', title: 'Informes en tiempo real', description: 'P&L, balance, flujo de caja e IVA trimestral generados al instante. Exporta a PDF/Excel.', color: COLOR },
];

const testimonials = [
  { name: 'Laura Sánchez', role: 'CFO', company: 'EventCorp', quote: 'El OCR con IA nos ahorra 3 horas diarias en facturación. Foto de factura y en 5 segundos tengo todos los datos. La reconciliación automática es lo mejor que nos ha pasado.', metrics: ['-3h/día', '95% precisión OCR', 'Reconciliación auto'] },
];

const faqs = [
  { question: '¿Qué precisión tiene el OCR?', answer: 'Superior al 95%. Claude Vision analiza el documento completo y extrae todos los campos relevantes. Puedes revisar y ajustar antes de confirmar.' },
  { question: '¿Funciona con facturas internacionales?', answer: 'Sí. Multi-divisa, tipos de IVA por país y plantillas en varios idiomas.' },
  { question: '¿Puedo programar pagos a proveedores?', answer: 'Sí. Programa pagos por fecha de vencimiento, configura alertas y ejecuta transferencias desde la plataforma.' },
  { question: '¿Se integra con mi gestoría?', answer: 'Sí. Exporta datos en formato compatible con la mayoría de programas contables. CSV, Excel y API disponibles.' },
  { question: '¿El IVA se calcula automáticamente?', answer: 'Sí. Configura tipos de IVA e IRPF. El sistema calcula y genera informes trimestrales listos para presentar.' },
];

const FinanzasSolucionPage = () => (
  <>
    <Head>
      <title>Para Directores Financieros | EventosOrganizador</title>
      <meta name="description" content="Foto de factura → datos en 5 segundos con Claude Vision. OCR con IA, facturación automática, tesorería multi-cuenta y reconciliación." />
    </Head>
    <Navbar />
    <HeroSection
      badge="Para Finanzas"
      title={<>Foto de factura → <span style={{ color: '#FDE68A' }}>datos en 5 segundos</span></>}
      subtitle="OCR con Claude Vision, reconciliación automática y tesorería multi-cuenta. Tu departamento financiero potenciado con IA."
      primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
      secondaryCTA={{ label: 'Solicitar demo', href: '/demo' }}
      benefits={['OCR con IA', '-3h/día admin', 'Multi-cuenta']}
      breadcrumb={[{ label: 'Soluciones', href: '/soluciones' }, { label: 'Finanzas' }]}
      color={COLOR}
    />
    <PainPointsSection painPoints={painPoints} color={COLOR} />
    <FeatureGrid features={features} cols={3} />
    <TestimonialSection testimonials={testimonials} title="Caso de éxito" color={COLOR} />
    <FAQSection faqs={faqs} />
    <CTASection title="Automatiza tus finanzas con IA" description="OCR, facturación y reconciliación. 14 días gratis." guarantees={['OCR Claude Vision', 'Multi-cuenta', 'Sin tarjeta de crédito']} color={COLOR} />
    <Footer />
  </>
);

export default FinanzasSolucionPage;
