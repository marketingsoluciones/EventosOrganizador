import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const schemaOrg = {
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
      "ratingCount": "150"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EventosOrganizador",
      "url": "https://www.eventosorganizador.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.eventosorganizador.com/image/logo1.svg"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61559662832886",
        "https://www.instagram.com/eventosorganizador",
        "https://www.youtube.com/@EventosOrganizador",
        "https://www.tiktok.com/@eventosorganizador"
      ]
    }
  };

  return (
    <Html>
      <Head>
        {/* Verificación de dominio - Facebook/Meta */}
        <meta name="facebook-domain-verification" content="1405266637758081" />

        {/* Favicon, Apple Touch Icon y PWA */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconexiones para rendimiento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Meta tags globales */}
        <meta name="theme-color" content="#4F46E5" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="EventosOrganizador" />
        <meta name="googlebot" content="index, follow" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
