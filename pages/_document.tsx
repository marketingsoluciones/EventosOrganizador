import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // Schema.org - Software Application
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EventosOrganizador",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Event management platform with CRM, ticketing, automations and analytics for professional events, weddings, conferences and festivals.",
    "url": "https://www.eventosorganizador.com",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
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

  // Schema.org - Organization (US-based company)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Eventos Organizador, LLC",
    "legalName": "Eventos Organizador, LLC",
    "url": "https://www.eventosorganizador.com",
    "logo": "https://www.eventosorganizador.com/image/logo1.svg",
    "description": "Leading event management platform with integrated CRM, ticketing, automations and analytics.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1111B S Governors Ave STE 7392",
      "addressLocality": "Dover",
      "addressRegion": "DE",
      "postalCode": "19904",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "carlos.carrillo@eventosorganizador.com",
      "telephone": "+1-305-777-7937",
      "url": "https://www.eventosorganizador.com/contacto",
      "availableLanguage": ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Chinese", "Korean", "Japanese"]
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
        {/* ===== SEARCH ENGINE & SOCIAL VERIFICATIONS ===== */}
        {/* Facebook/Meta */}
        <meta name="facebook-domain-verification" content="1405266637758081" />

        {/* ===== FAVICON & PWA ===== */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/image/logo1.svg" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="EventosOrganizador" />

        {/* ===== PERFORMANCE PRECONNECTIONS ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* ===== GLOBAL SEO META TAGS ===== */}
        <meta name="theme-color" content="#4F46E5" />
        <meta name="msapplication-TileColor" content="#4F46E5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Eventos Organizador, LLC" />
        <meta name="publisher" content="Eventos Organizador, LLC" />
        <meta name="copyright" content="Eventos Organizador, LLC 2025" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />

        {/* ===== GEO TARGETING (US-based) ===== */}
        <meta name="geo.region" content="US-DE" />
        <meta name="geo.placename" content="Dover, Delaware" />
        <meta name="ICBM" content="39.1582, -75.5244" />

        {/* ===== ALTERNATE LANGUAGES (hreflang) ===== */}
        <link rel="alternate" hrefLang="en" href="https://www.eventosorganizador.com" />
        <link rel="alternate" hrefLang="es" href="https://www.eventosorganizador.com/es" />
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
