import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/IndexHeader";
import Socials from "@/components/Socials/IndexSocials";
import Ticketing from "@/components/Ticketing/IndexTicketing";
import Solutions from "@/components/Solutions/IndexSolutions";
import ProductFeatures from "@/components/Solutions/ProductFeatures";
import Testimonies from "@/components/Testimonies/IndexTestim";
import Informations from "@/components/Informations/IndexInfo";
import Footer from "@/components/Footer/IndexFooter";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-white text-gray-900 min-h-screen">
      <Head>
        {/* SEO Básico */}
        <title>EventosOrganizador — Plataforma de Gestión de Eventos | CRM, Ticketing, Automatizaciones</title>
        <meta name="description" content="Organiza eventos sociales, bodas, conferencias y festivales con EventosOrganizador. CRM, ticketing, invitaciones, colaboración y automatizaciones en una sola plataforma. Prueba gratis." />
        <meta name="keywords" content="gestión de eventos, CRM eventos, ticketing, bodas, conferencias, organización eventos, software eventos, wedding planner, event management, gestión bodas" />
        <link rel="canonical" href="https://www.eventosorganizador.com" />

        {/* Open Graph - Facebook, LinkedIn, WhatsApp */}
        <meta property="og:title" content="EventosOrganizador — Plataforma de Gestión de Eventos" />
        <meta property="og:description" content="CRM, ticketing, invitaciones, colaboración y automatizaciones para organizar eventos profesionales. Empieza gratis hoy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eventosorganizador.com" />
        <meta property="og:image" content="https://www.eventosorganizador.com/image/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="EventosOrganizador - Plataforma de Gestión de Eventos" />
        <meta property="og:site_name" content="EventosOrganizador" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="de_DE" />
        <meta property="og:locale:alternate" content="it_IT" />
        <meta property="og:locale:alternate" content="pt_PT" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eventosorganizador" />
        <meta name="twitter:creator" content="@eventosorganizador" />
        <meta name="twitter:title" content="EventosOrganizador — Plataforma de Gestión de Eventos" />
        <meta name="twitter:description" content="CRM, ticketing, invitaciones, colaboración y automatizaciones para organizar eventos profesionales." />
        <meta name="twitter:image" content="https://www.eventosorganizador.com/image/og-image.svg" />
        <meta name="twitter:image:alt" content="EventosOrganizador - Plataforma de Gestión de Eventos" />

        {/* LinkedIn específico */}
        <meta property="linkedin:owner" content="eventosorganizador" />

        {/* Pinterest */}
        <meta property="pin:description" content="Organiza eventos sociales, bodas y conferencias con la mejor plataforma de gestión de eventos." />

        {/* WhatsApp Preview */}
        <meta property="og:image:secure_url" content="https://www.eventosorganizador.com/image/og-image.svg" />

        {/* Telegram Preview */}
        <meta name="telegram:channel" content="@eventosorganizador" />

        {/* Article info para mejor indexación */}
        <meta property="article:author" content="EventosOrganizador" />
        <meta property="article:publisher" content="https://www.facebook.com/profile.php?id=61559662832886" />
      </Head>
      <Navbar />
      <Header />
      <Informations />
      <Socials />
      <Ticketing />
      <Solutions />
      <ProductFeatures />
      <Testimonies />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}
