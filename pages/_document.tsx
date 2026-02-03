import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Verificación de dominio - Facebook/Meta */}
        <meta name="facebook-domain-verification" content="1405266637758081" />

        {/* Favicon y Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* Preconexiones para rendimiento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Meta tags globales */}
        <meta name="theme-color" content="#4F46E5" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="EventosOrganizador" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
