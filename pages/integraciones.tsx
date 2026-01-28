import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const categorias = [
  {
    nombre: 'Comunicación',
    integraciones: ['WhatsApp Business', 'Gmail', 'Outlook', 'Slack', 'Microsoft Teams'],
    icon: '💬'
  },
  {
    nombre: 'Pagos',
    integraciones: ['Stripe', 'PayPal', 'MercadoPago', 'Conekta'],
    icon: '💳'
  },
  {
    nombre: 'Marketing',
    integraciones: ['Google Ads', 'Facebook Ads', 'Mailchimp', 'HubSpot'],
    icon: '📢'
  },
  {
    nombre: 'Productividad',
    integraciones: ['Google Calendar', 'Zapier', 'Make', 'Google Sheets'],
    icon: '⚡'
  },
  {
    nombre: 'Redes Sociales',
    integraciones: ['Instagram', 'Facebook', 'LinkedIn', 'TikTok'],
    icon: '📱'
  },
  {
    nombre: 'Almacenamiento',
    integraciones: ['Google Drive', 'Dropbox', 'AWS S3'],
    icon: '☁️'
  }
];

const apiFeatures = [
  { titulo: 'REST API Completa', descripcion: 'Accede a todos los recursos con endpoints documentados.' },
  { titulo: 'Webhooks', descripcion: 'Recibe notificaciones en tiempo real de eventos del sistema.' },
  { titulo: 'SDKs Oficiales', descripcion: 'Librerías para JavaScript, Python, PHP y más.' },
  { titulo: 'Rate Limits Generosos', descripcion: 'Hasta 10,000 requests por minuto en planes empresariales.' }
];

export default function Integraciones() {
  return (
    <>
      <Head>
        <title>Integraciones y API | EventosOrganizador</title>
        <meta name="description" content="Conecta EventosOrganizador con tus herramientas favoritas. +100 integraciones nativas, API REST completa y webhooks." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#6096B9]/10 text-[#6096B9] rounded-full text-sm font-medium mb-6">
              Integraciones y API
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Conecta con{' '}
              <span className="text-[#6096B9]">todo tu ecosistema</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              +100 integraciones nativas, API REST completa y webhooks.
              Conecta EventosOrganizador con las herramientas que ya usas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6096B9] text-white rounded-lg font-medium hover:bg-[#4b7591] transition-all duration-200 shadow-lg"
              >
                Explorar Integraciones
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-[#6096B9] transition-all duration-200"
              >
                Documentación API
              </a>
            </div>
          </div>
        </section>

        {/* Integrations by Category */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Integraciones por categoría
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorias.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{cat.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{cat.nombre}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.integraciones.map((integracion, iIdx) => (
                      <span
                        key={iIdx}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {integracion}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="w-full bg-[#f6f9fc] py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-block px-4 py-2 bg-[#6096B9]/20 text-[#6096B9] rounded-full text-sm font-medium mb-6">
                  API para Desarrolladores
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  API REST completa
                </h2>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  Construye integraciones personalizadas con nuestra API documentada.
                </p>
                <div className="space-y-4">
                  {apiFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#6096B9] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-gray-900 font-medium">{feature.titulo}</p>
                        <p className="text-gray-500 text-sm">{feature.descripcion}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Preview */}
              <div className="flex-1 w-full">
                <div className="bg-gray-800 rounded-xl p-6 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <pre className="text-gray-300 overflow-x-auto">
{`// Obtener contactos
const response = await fetch(
  'https://api.eventosorganizador.com/v1/contacts',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

const contacts = await response.json();
// { data: [...], total: 847 }`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Conecta todo tu stack tecnológico
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Empieza a integrar tus herramientas favoritas hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.eventosorganizador.com/login?q=register&d=/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6096B9] text-white rounded-lg font-medium hover:bg-[#4b7591] transition-all duration-200 shadow-lg"
              >
                Comenzar Gratis
              </a>
              <a
                href="/agendar-reunion"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-[#6096B9] transition-all duration-200"
              >
                Ver Documentación
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
