import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import HeroSection from '@/components/shared/HeroSection';
import SectionHeader from '@/components/shared/SectionHeader';
import FeatureGrid from '@/components/shared/FeatureGrid';
import StatsBar from '@/components/shared/StatsBar';
import FAQSection from '@/components/shared/FAQSection';
import CTASection from '@/components/shared/CTASection';

const ocrSteps = [
  { step: 1, title: 'Saca una foto', desc: 'Fotografía la factura con tu móvil o sube el PDF.' },
  { step: 2, title: 'IA analiza el documento', desc: 'Claude Vision extrae todos los datos: proveedor, importes, IVA, fecha, número.' },
  { step: 3, title: 'Revisa y confirma', desc: 'Los datos aparecen pre-rellenados. Solo confirma o ajusta si es necesario.' },
  { step: 4, title: 'Contabilización automática', desc: 'La factura se contabiliza, se asigna a la cuenta y se programa el pago.' },
  { step: 5, title: 'Reconciliación', desc: 'Cuando llega el cobro/pago, se concilia automáticamente con el extracto bancario.' },
];

const features = [
  { icon: '📸', title: 'OCR con Claude Vision', description: 'Foto de factura → datos en 5 segundos. Extracción automática de proveedor, importes, IVA, fecha y concepto con IA.' },
  { icon: '🧾', title: 'Facturación Automática', description: 'Genera facturas profesionales con un clic. Numeración automática, plantillas personalizables y envío por email.' },
  { icon: '💳', title: 'Wallet y Prepago Stripe', description: 'Cobra a tus clientes con tarjeta, transferencia o wallet prepago. Pagos recurrentes y suscripciones integradas.' },
  { icon: '🏦', title: 'Tesorería Multi-Cuenta', description: 'Gestiona múltiples cuentas bancarias, controla flujos de caja y programa pagos a proveedores.' },
  { icon: '🔄', title: 'Reconciliación Automática', description: 'Importa extractos bancarios y el sistema concilia automáticamente pagos con facturas emitidas y recibidas.' },
  { icon: '📊', title: 'Informes Financieros', description: 'P&L, balance, flujo de caja, IVA trimestral... Informes generados automáticamente y exportables a PDF/Excel.' },
];

const faqs = [
  { question: '¿Cómo funciona el OCR con IA?', answer: 'Usamos Claude Vision (IA de Anthropic) para analizar imágenes de facturas. Extraemos automáticamente: nombre del proveedor, CIF, importes, IVA, fecha, número de factura y conceptos. Precisión superior al 95%.' },
  { question: '¿Puedo cobrar con tarjeta a mis clientes?', answer: 'Sí. Integración nativa con Stripe para cobros con tarjeta, SEPA, wallet prepago y pagos recurrentes. Comisiones estándar de Stripe.' },
  { question: '¿Se genera el IVA automáticamente?', answer: 'Sí. El sistema calcula IVA, IRPF y retenciones según la configuración fiscal. Genera informes trimestrales listos para presentar.' },
  { question: '¿Puedo gestionar múltiples cuentas bancarias?', answer: 'Sí. Configura tantas cuentas como necesites. Cada una con su saldo, movimientos y conciliación independiente.' },
  { question: '¿Se integra con mi banco?', answer: 'Importa extractos bancarios en formato CSV, OFX o QIF. La reconciliación automática cruza movimientos con facturas.' },
  { question: '¿Puedo personalizar las plantillas de factura?', answer: 'Sí. Personaliza logo, colores, campos y textos legales. Varias plantillas disponibles o crea la tuya propia.' },
  { question: '¿Es válido fiscalmente?', answer: 'Sí. Las facturas cumplen con la normativa fiscal española y europea. Numeración secuencial, datos obligatorios y formato legal.' },
  { question: '¿Funciona con facturas internacionales?', answer: 'Sí. Soporte multi-divisa, tipos de IVA por país y plantillas en varios idiomas.' },
];

const FinanzasPage = () => {
  return (
    <>
      <Head>
        <title>Finanzas + OCR IA | EventosOrganizador</title>
        <meta name="description" content="Foto de factura → datos en 5 segundos con Claude Vision. Facturación automática, wallet Stripe, tesorería multi-cuenta y reconciliación." />
      </Head>

      <Navbar />

      <HeroSection
        badge="Finanzas + OCR"
        title={<>Foto de factura → <span className="text-[#6096B9]">datos en 5 segundos</span></>}
        subtitle="OCR con Claude Vision, facturación automática, wallet Stripe y tesorería multi-cuenta. Tu departamento financiero con IA."
        primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
        secondaryCTA={{ label: 'Ver demo', href: '/demo' }}
        benefits={['OCR con IA', 'Facturación auto', 'Cobros Stripe']}
        breadcrumb={[{ label: 'Funcionalidades', href: '/funcionalidades' }, { label: 'Finanzas + OCR' }]}
      />

      {/* OCR Process */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-[900px] mx-auto">
          <SectionHeader eyebrow="OCR con IA" title="De factura en papel a datos digitales en 5 pasos" description="Claude Vision analiza cualquier factura y extrae los datos automáticamente" />
          <div className="mt-12 space-y-6">
            {ocrSteps.map((s) => (
              <div key={s.step} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#6096B9] text-white font-bold flex items-center justify-center flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Herramientas financieras con IA</h2>
            <p className="text-lg text-gray-600">Facturación, cobros, tesorería y reconciliación automatizados</p>
          </div>
          <FeatureGrid features={features} cols={3} />
        </div>
      </section>

      <section className="w-full py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <StatsBar
            stats={[
              { value: '5s', label: 'OCR por factura' },
              { value: '-80%', label: 'Tiempo admin' },
              { value: '95%', label: 'Precisión OCR' },
              { value: 'Multi', label: 'Cuentas bancarias' },
            ]}
            variant="gradient"
          />
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Automatiza tus finanzas con IA"
        description="Foto de factura → datos en 5 segundos. 14 días gratis."
        guarantees={['OCR Claude Vision', 'Sin tarjeta de crédito', 'Stripe integrado']}
      />

      <Footer />
    </>
  );
};

export default FinanzasPage;
