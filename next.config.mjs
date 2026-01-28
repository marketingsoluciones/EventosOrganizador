/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/crm-pipeline', destination: '/funcionalidades/crm', permanent: true },
      { source: '/facturacion', destination: '/funcionalidades/finanzas', permanent: true },
      { source: '/automatizaciones', destination: '/funcionalidades/automatizaciones', permanent: true },
      { source: '/gestion-eventos', destination: '/funcionalidades/eventos-bodas', permanent: true },
      { source: '/reportes-analytics', destination: '/funcionalidades/analytics', permanent: true },
      { source: '/soluciones-sector', destination: '/soluciones/agencias-marketing', permanent: false },
      { source: '/enriquecimiento-datos', destination: '/funcionalidades/generacion-leads', permanent: true },
      { source: '/email-marketing', destination: '/funcionalidades/automatizaciones', permanent: true },
      { source: '/campanas-multicanal', destination: '/funcionalidades/crm', permanent: true },
      { source: '/whatsapp-business', destination: '/funcionalidades/crm', permanent: true },
      { source: '/integraciones', destination: '/funcionalidades', permanent: true },
      { source: '/comparativas', destination: '/funcionalidades', permanent: true },
      { source: '/casos-exito', destination: '/funcionalidades', permanent: true },
    ];
  },
};

export default nextConfig;
