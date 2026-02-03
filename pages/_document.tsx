import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // Schema.org - Software Application
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EventosOrganizador",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Plataforma de gestión de eventos con CRM, ticketing, automatizaciones y analytics para organizar eventos profesionales, bodas, conferencias y festivales.",
    "url": "https://www.eventosorganizador.com",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "0",
      "highPrice": "299",
      "offerCount": "4"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Schema.org - Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EventosOrganizador",
    "url": "https://www.eventosorganizador.com",
    "logo": "https://www.eventosorganizador.com/image/logo1.svg",
    "description": "Plataforma líder en gestión de eventos, bodas y conferencias con CRM integrado.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://www.eventosorganizador.com/contacto",
      "availableLanguage": ["Spanish", "English", "French", "German", "Italian", "Portuguese", "Chinese", "Korean", "Japanese"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61559662832886",
      "https://www.instagram.com/eventosorganizador",
      "https://www.youtube.com/@EventosOrganizador",
      "https://www.tiktok.com/@eventosorganizador"
    ]
  };

  // Schema.org - WebSite with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EventosOrganizador",
    "url": "https://www.eventosorganizador.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.eventosorganizador.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Html>
      <Head>
        {/* ===== VERIFICACIONES DE BUSCADORES Y REDES ===== */}
        {/* Facebook/Meta */}
        <meta name="facebook-domain-verification" content="1405266637758081" />
        {/* Bing Webmaster - Agregar código cuando lo tengas */}
        {/* <meta name="msvalidate.01" content="TU_CODIGO_BING" /> */}
        {/* Yandex Webmaster - Para mercado ruso */}
        {/* <meta name="yandex-verification" content="TU_CODIGO_YANDEX" /> */}
        {/* Pinterest */}
        {/* <meta name="p:domain_verify" content="TU_CODIGO_PINTEREST" /> */}

        {/* ===== FAVICON Y PWA ===== */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/image/logo1.svg" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="EventosOrganizador" />

        {/* ===== PRECONEXIONES PARA RENDIMIENTO ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* ===== META TAGS SEO GLOBALES ===== */}
        <meta name="theme-color" content="#4F46E5" />
        <meta name="msapplication-TileColor" content="#4F46E5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="EventosOrganizador" />
        <meta name="publisher" content="EventosOrganizador" />
        <meta name="copyright" content="EventosOrganizador 2025" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />

        {/* ===== GEO TARGETING ===== */}
        <meta name="geo.region" content="ES" />
        <meta name="geo.placename" content="España" />
        <meta name="ICBM" content="40.4168, -3.7038" />

        {/* ===== IDIOMAS ALTERNATIVOS (hreflang) ===== */}
        <link rel="alternate" hrefLang="es" href="https://www.eventosorganizador.com" />
        <link rel="alternate" hrefLang="en" href="https://www.eventosorganizador.com/en" />
        <link rel="alternate" hrefLang="fr" href="https://www.eventosorganizador.com/fr" />
        <link rel="alternate" hrefLang="de" href="https://www.eventosorganizador.com/de" />
        <link rel="alternate" hrefLang="it" href="https://www.eventosorganizador.com/it" />
        <link rel="alternate" hrefLang="pt" href="https://www.eventosorganizador.com/pt" />
        <link rel="alternate" hrefLang="zh" href="https://www.eventosorganizador.com/zh" />
        <link rel="alternate" hrefLang="ko" href="https://www.eventosorganizador.com/ko" />
        <link rel="alternate" hrefLang="ja" href="https://www.eventosorganizador.com/ja" />
        <link rel="alternate" hrefLang="x-default" href="https://www.eventosorganizador.com" />

        {/* ===== SCHEMA.ORG JSON-LD ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
