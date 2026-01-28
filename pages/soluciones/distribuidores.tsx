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

const COLOR = '#6366F1';

const painPoints = [
  { emoji: '🗺️', title: 'No sabes dónde están tus próximos clientes', description: 'Encontrar nuevos puntos de venta en una zona requiere recorrer calles o pedir referencias. Proceso lento y poco escalable.' },
  { emoji: '📋', title: 'Tu catálogo vive en PDF', description: 'Cada comercial lleva un catálogo diferente. Precios desactualizados, productos descatalogados y confusión en pedidos.' },
  { emoji: '📦', title: 'El stock se gestiona a ojo', description: 'Sin control de inventario en tiempo real, haces pedidos de más o te quedas sin stock de lo que más vendes.' },
];

const features = [
  { icon: '🗺️', title: 'Búsqueda de puntos de venta', description: 'Localiza establecimientos por zona, sector y tipo. Google Places y Foursquare te dan miles de potenciales clientes.', color: COLOR },
  { icon: '📦', title: 'Catálogo digital', description: 'Productos con variantes, fotos, precios y stock en tiempo real. Tus comerciales siempre con info actualizada.', color: COLOR },
  { icon: '🏭', title: 'Inventario multi-almacén', description: 'Control de stock por almacén, transferencias y alertas. Sabe exactamente qué tienes y dónde.', color: COLOR },
  { icon: '💲', title: 'Precios por cliente', description: 'Listas de precios, descuentos por volumen y condiciones especiales por grupo. Cada cliente ve su tarifa.', color: COLOR },
  { icon: '📊', title: 'Pipeline comercial', description: 'De prospecto a cliente activo. Pipeline con etapas de distribución: contacto, muestra, primer pedido, recurrente.', color: COLOR },
  { icon: '🧾', title: 'Facturación y cobros', description: 'Factura pedidos, gestiona plazos de pago y cobra con Stripe o transferencia. Reconciliación automática.', color: COLOR },
];

const testimonials = [
  { name: 'Miguel Torres', role: 'Director Comercial', company: 'DistribEvenT', quote: 'Con la búsqueda por zona encontramos 400 nuevos establecimientos potenciales en Barcelona en una semana. El equipo comercial pasó de buscar a visitar. Las ventas subieron un 35%.', metrics: ['+400 puntos de venta', '+35% ventas', '1 semana'] },
];

const faqs = [
  { question: '¿Puedo buscar establecimientos por zona?', answer: 'Sí. Filtra por código postal, radio, ciudad o provincia. Google Places y Foursquare te dan negocios verificados con contacto.' },
  { question: '¿El catálogo se actualiza en tiempo real?', answer: 'Sí. Cuando cambias un precio o stock, todos los comerciales ven la info actualizada al instante.' },
  { question: '¿Puedo tener precios diferentes por cliente?', answer: 'Sí. Listas de precios por grupo, descuentos por volumen y condiciones especiales. Todo automático en pedidos y facturas.' },
  { question: '¿Gestiona múltiples almacenes?', answer: 'Sí. Stock por ubicación, transferencias entre almacenes y alertas de reposición. Control total del inventario.' },
  { question: '¿Los comerciales pueden usar el móvil?', answer: 'Sí. Plataforma 100% responsive. Tus comerciales consultan catálogo, registran visitas y crean pedidos desde el móvil.' },
];

const DistribuidoresPage = () => (
  <>
    <Head>
      <title>Para Distribuidores | EventosOrganizador</title>
      <meta name="description" content="Encuentra nuevos puntos de venta por zona. Catálogo digital, inventario multi-almacén, precios por cliente y facturación integrada." />
    </Head>
    <Navbar />
    <HeroSection
      badge="Para Distribuidores"
      title={<>Encuentra nuevos <span style={{ color: '#A5B4FC' }}>puntos de venta</span> por zona</>}
      subtitle="Localiza establecimientos, gestiona catálogo con precios por cliente e inventario multi-almacén. Tu fuerza comercial potenciada."
      primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
      secondaryCTA={{ label: 'Solicitar demo', href: '/demo' }}
      benefits={['Búsqueda por zona', 'Catálogo digital', 'Multi-almacén']}
      breadcrumb={[{ label: 'Soluciones', href: '/soluciones' }, { label: 'Distribuidores' }]}
      color={COLOR}
    />
    <PainPointsSection painPoints={painPoints} color={COLOR} />
    <FeatureGrid features={features} cols={3} />
    <TestimonialSection testimonials={testimonials} title="Caso de éxito" color={COLOR} />
    <FAQSection faqs={faqs} />
    <CTASection title="Expande tu red de distribución" description="Nuevos puntos de venta cada semana. 14 días gratis." guarantees={['Búsqueda por zona', 'Catálogo digital', 'Sin tarjeta de crédito']} color={COLOR} />
    <Footer />
  </>
);

export default DistribuidoresPage;
