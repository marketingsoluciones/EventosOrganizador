import React from 'react';
import { GetStaticPropsContext } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/IndexFooter';
import Head from 'next/head';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    titulo: 'Facturas Automáticas',
    descripcion: 'Genera facturas automáticamente al cerrar una venta o al vencer un período de suscripción.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    titulo: 'Múltiples Métodos de Pago',
    descripcion: 'Acepta tarjetas, transferencias, PayPal y más. Todo integrado en un solo lugar.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    titulo: 'Cobros Recurrentes',
    descripcion: 'Configura suscripciones y cobra automáticamente cada mes sin intervención manual.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    titulo: 'Cumplimiento Fiscal',
    descripcion: 'Compatible con requisitos de facturación electrónica y normativas locales.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    titulo: 'Recordatorios de Pago',
    descripcion: 'Envía recordatorios automáticos antes y después del vencimiento de facturas.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    titulo: 'Reportes Financieros',
    descripcion: 'Dashboard con ingresos, pagos pendientes, proyecciones y exportación contable.'
  }
];

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale ?? 'es'}.json`)).default,
    },
  };
}

export default function Facturacion() {
  return (
    <>
      <Head>
        <title>Facturación Automática | EventosOrganizador</title>
        <meta name="description" content="Sistema de facturación automática integrado con tu CRM. Genera facturas, cobra recurrente y gestiona pagos desde una sola plataforma." />
      </Head>

      <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
        <Navbar />

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block px-4 py-2 bg-[#6096B9]/10 text-[#6096B9] rounded-full text-sm font-medium mb-6">
                  Facturación
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Factura y cobra{' '}
                  <span className="text-[#6096B9]">sin esfuerzo</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Genera facturas automáticamente, acepta pagos online y
                  gestiona cobros recurrentes. Todo conectado con tu CRM.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://app.eventosorganizador.com/login?q=register&d=/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6096B9] text-white rounded-lg font-medium hover:bg-[#4b7591] transition-all duration-200 shadow-lg"
                  >
                    Empezar a Facturar
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="/agendar-reunion"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium border border-gray-300 hover:border-[#6096B9] transition-all duration-200"
                  >
                    Ver Demo
                  </a>
                </div>
              </div>

              {/* Invoice Preview */}
              <div className="flex-1 w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Factura</p>
                      <p className="font-bold text-gray-900">#INV-2024-0847</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Pagada
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Cliente</span>
                      <span className="text-gray-900">Empresa ABC S.A.</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Fecha</span>
                      <span className="text-gray-900">15 Ene 2024</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Método</span>
                      <span className="text-gray-900">Tarjeta •••• 4242</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-900">$1,200.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">IVA (16%)</span>
                      <span className="text-gray-900">$192.00</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-100">
                      <span>Total</span>
                      <span className="text-[#6096B9]">$1,392.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Facturación profesional integrada
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Todo lo que necesitas para gestionar tus finanzas sin salir del CRM.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#6096B9]/10 rounded-lg flex items-center justify-center text-[#6096B9] mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="w-full bg-gray-50 py-20 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Acepta todos los métodos de pago
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Integraciones con los principales procesadores de pago
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['Visa', 'Mastercard', 'PayPal', 'Stripe', 'Transferencia', 'Efectivo'].map((method, idx) => (
                <div key={idx} className="bg-white px-8 py-4 rounded-xl border border-gray-200 shadow-sm">
                  <span className="font-medium text-gray-700">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-20 px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Simplifica tu facturación hoy
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Configura tu sistema de facturación en minutos y empieza a cobrar automáticamente.
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
                Hablar con Ventas
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
