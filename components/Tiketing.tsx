import Navbar from './Navbar/Navbar';
import Footer from './Footer/IndexFooter';
import { FC } from 'react';

export const EventosTiketing: FC = () => {
  const features = [
    {
      title: "Diferentes tipos de entradas",
      description: "Define entradas general, VIP, early bird y más con precios específicos.",
      icon: "🎫"
    },
    {
      title: "Venta online segura",
      description: "Vende entradas de forma segura a través de nuestra plataforma integrada.",
      icon: "💳"
    },
    {
      title: "Control de aforo",
      description: "Gestiona el número de entradas vendidas y evita el sobreaforo.",
      icon: "📊"
    },
    {
      title: "Seguimiento en tiempo real",
      description: "Obtén informes detallados sobre las ventas de entradas al instante.",
      icon: "📈"
    },
    {
      title: "Comunicación automática",
      description: "Envía mensajes y recordatorios automáticos a los compradores.",
      icon: "✉️"
    },
    {
      title: "Códigos QR y validación",
      description: "Genera códigos QR únicos para cada entrada y valida el acceso.",
      icon: "🔍"
    }
  ];

  const benefits = [
    { title: "Ahorra tiempo", description: "Automatiza la venta y gestión de entradas", icon: "⚡" },
    { title: "Mayor control", description: "Control total sobre ventas y accesos", icon: "🎯" },
    { title: "Seguridad garantizada", description: "Previene fraudes y entradas falsas", icon: "🔒" },
    { title: "Profesionalidad", description: "Imagen organizada y confiable", icon: "⭐" }
  ];

  const eventTypes = [
    { name: "Conciertos", icon: "🎵" },
    { name: "Conferencias", icon: "🎤" },
    { name: "Festivales", icon: "🎉" },
    { name: "Obras de Teatro", icon: "🎭" },
    { name: "Deportes", icon: "⚽" },
    { name: "Exposiciones", icon: "🖼️" }
  ];

  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
            Eventos de <span className="text-[#6096B9]">Ticketing</span> Profesionales
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-[700px] mx-auto">
            Vende entradas, controla el aforo y gestiona el acceso a tus eventos de forma segura y profesional.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#6096B9] text-white font-semibold rounded-lg hover:bg-[#4b7591] transition-all duration-300 shadow-lg hover:shadow-xl">
              <a href="https://app.eventosorganizador.com/">Comienza Gratis</a>
            </button>
            <button className="px-8 py-4 bg-white text-[#6096B9] border-2 border-[#6096B9] font-semibold rounded-lg hover:bg-[#6096B9] hover:text-white transition-all duration-300">
              Ver Demo
            </button>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#6096B9] font-semibold uppercase text-sm tracking-wide mb-3">
              Perfecto para
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748]">
              Todo tipo de eventos con entradas
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {eventTypes.map((type, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-[#6096B9]/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-2">{type.icon}</div>
                <p className="text-sm font-semibold text-gray-700 text-center">{type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#6096B9] font-semibold uppercase text-sm tracking-wide mb-3">
              Herramientas Completas
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748]">
              Todo lo que necesitas para gestionar entradas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-200 rounded-xl hover:border-[#6096B9] hover:shadow-lg transition-all duration-300 group">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#2d3748] mb-2 group-hover:text-[#6096B9] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <img src="image/banner2.svg" alt="EventosOrganizador Platform" className="w-full rounded-2xl shadow-xl" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#6096B9] font-semibold uppercase text-sm tracking-wide mb-3">
              Ventajas Clave
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748]">
              ¿Por qué elegir EventosOrganizador?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-[#2d3748] mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits List */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-[#2d3748] mb-4">Gestión profesional de entradas</h3>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Control de acceso garantizado</h4>
                  <p className="text-gray-600 text-sm">Asegura que solo personas con entrada válida accedan a tu evento</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Gestión de aforo inteligente</h4>
                  <p className="text-gray-600 text-sm">Controla automáticamente el número de asistentes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Múltiples canales de venta</h4>
                  <p className="text-gray-600 text-sm">Vende entradas online y presencial desde un solo lugar</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-[#2d3748] mb-4">Beneficios adicionales</h3>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Comodidad para asistentes</h4>
                  <p className="text-gray-600 text-sm">Facilita la compra de entradas con proceso simple y rápido</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Reducción de costes</h4>
                  <p className="text-gray-600 text-sm">Simplifica la gestión y reduce costes operativos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Imagen profesional</h4>
                  <p className="text-gray-600 text-sm">Ofrece una experiencia organizada y confiable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#6096B9] to-[#4b7591] py-16 px-4">
        <div className="max-w-[800px] mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para profesionalizar tu evento?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Únete a los organizadores que confían en nosotros para gestionar sus entradas
          </p>
          <button className="px-10 py-4 bg-white text-[#6096B9] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
            <a href="https://app.eventosorganizador.com/">Crear Evento con Tickets</a>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
