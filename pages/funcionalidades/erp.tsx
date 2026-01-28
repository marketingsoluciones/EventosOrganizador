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
  { icon: '📦', title: 'Catálogo de Productos', description: 'Gestiona tu catálogo completo con fotos, descripciones, categorías y atributos personalizados. Búsqueda y filtrado avanzado.' },
  { icon: '🔀', title: 'Variantes de Producto', description: 'Tallas, colores, formatos... Crea variantes con stock y precio independiente. Ideal para catering, merchandising y servicios.' },
  { icon: '🏭', title: 'Inventario Multi-Almacén', description: 'Controla stock en múltiples ubicaciones. Transferencias entre almacenes, alertas de stock bajo y movimientos trazables.' },
  { icon: '💲', title: 'Listas de Precios', description: 'Precios diferentes por cliente, volumen o temporada. Descuentos automáticos, precios especiales y tarifas por grupo.' },
  { icon: '👥', title: 'Grupos de Clientes', description: 'Segmenta clientes en grupos con condiciones comerciales específicas: precios, descuentos, plazos de pago y límites de crédito.' },
  { icon: '🤝', title: 'Proveedores de Eventos', description: 'Directorio de proveedores con ratings, presupuestos, disponibilidad y historial de colaboraciones. Perfecto para organizadores.' },
];

const faqs = [
  { question: '¿Puedo gestionar productos con variantes?', answer: 'Sí. Cada producto puede tener múltiples variantes (talla, color, formato) con stock y precio independiente.' },
  { question: '¿Funciona con múltiples almacenes?', answer: 'Sí. Gestiona stock en diferentes ubicaciones, haz transferencias y consulta disponibilidad por almacén.' },
  { question: '¿Puedo tener precios diferentes por cliente?', answer: 'Sí. Crea listas de precios por grupo de clientes, volumen o temporada. Los descuentos se aplican automáticamente.' },
  { question: '¿Se integra con el CRM?', answer: 'Totalmente. Los productos del ERP están disponibles en presupuestos y facturas del CRM. Todo sincronizado.' },
  { question: '¿Puedo importar mi catálogo?', answer: 'Sí. Importa productos desde CSV o Excel con todas sus variantes, precios y stock.' },
  { question: '¿Hay alertas de stock bajo?', answer: 'Sí. Configura umbrales por producto y recibe notificaciones cuando el stock baje del mínimo.' },
];

const ERPPage = () => {
  return (
    <>
      <Head>
        <title>ERP | EventosOrganizador</title>
        <meta name="description" content="ERP integrado: catálogo de productos con variantes, inventario multi-almacén, listas de precios y gestión de proveedores para eventos." />
      </Head>

      <Navbar />

      <HeroSection
        badge="ERP"
        title={<>Gestiona productos, inventario y proveedores <span className="text-[#6096B9]">en un solo lugar</span></>}
        subtitle="Catálogo con variantes, inventario multi-almacén, listas de precios inteligentes y directorio de proveedores. Todo conectado con tu CRM."
        primaryCTA={{ label: 'Empieza gratis 14 días', href: 'https://app.eventosorganizador.com/login?q=register&d=/' }}
        secondaryCTA={{ label: 'Ver demo', href: '/demo' }}
        benefits={['Multi-almacén', 'Variantes de producto', 'Precios inteligentes']}
        breadcrumb={[{ label: 'Funcionalidades', href: '/funcionalidades' }, { label: 'ERP' }]}
      />

      <section className="w-full bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gestión integral de tu negocio</h2>
            <p className="text-lg text-gray-600">Productos, inventario, precios y proveedores en una sola plataforma</p>
          </div>
          <FeatureGrid features={features} cols={3} />
        </div>
      </section>

      <section className="w-full py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <StatsBar
            stats={[
              { value: '∞', label: 'Productos y variantes' },
              { value: 'Multi', label: 'Almacenes' },
              { value: 'Auto', label: 'Precios dinámicos' },
              { value: '100%', label: 'Integrado con CRM' },
            ]}
            variant="gradient"
          />
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Control total de tu inventario"
        description="ERP + CRM integrados. 14 días gratis."
        guarantees={['Sin tarjeta de crédito', 'Importación CSV', 'Multi-almacén']}
      />

      <Footer />
    </>
  );
};

export default ERPPage;
