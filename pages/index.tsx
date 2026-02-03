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
        <title>EventosOrganizador — Plataforma de Gestión de Eventos | CRM, Ticketing, Automatizaciones</title>
        <meta name="description" content="Organiza eventos sociales, bodas, conferencias y festivales con EventosOrganizador. CRM, ticketing, invitaciones, colaboración y automatizaciones en una sola plataforma." />
        <meta name="keywords" content="gestión de eventos, CRM eventos, ticketing, bodas, conferencias, organización eventos, software eventos" />
        <meta property="og:title" content="EventosOrganizador — Plataforma de Gestión de Eventos" />
        <meta property="og:description" content="CRM, ticketing, invitaciones, colaboración y automatizaciones para organizar eventos profesionales." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eventosorganizador.com" />
        <meta property="og:image" content="https://www.eventosorganizador.com/image/og-image.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EventosOrganizador — Plataforma de Gestión de Eventos" />
        <meta name="twitter:description" content="CRM, ticketing, invitaciones, colaboración y automatizaciones para organizar eventos profesionales." />
        <link rel="canonical" href="https://www.eventosorganizador.com" />
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
