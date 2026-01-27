import Navbar from './Navbar/Navbar';
import Footer from './Footer/IndexFooter';
import { FC } from 'react';

export const EventosSociales: FC = () => {
  const features = [
    {
      title: "Centraliza tu evento",
      description: "Gestiona todo en un solo lugar. Olvídate de la información dispersa.",
      icon: "📊"
    },
    {
      title: "Comunicación fluida",
      description: "Mantente en contacto con invitados, proveedores y colaboradores.",
      icon: "💬"
    },
    {
      title: "Lista de invitados",
      description: "Organiza, confirma asistencia y registra preferencias fácilmente.",
      icon: "👥"
    },
    {
      title: "Planificación completa",
      description: "Planos de distribución, presupuestos y listas de tareas.",
      icon: "📋"
    },
    {
      title: "Colaboración en equipo",
      description: "Facilita la organización con amigos y familiares.",
      icon: "🤝"
    },
    {
      title: "Invitaciones digitales",
      description: "Envía invitaciones personalizadas y elegantes en minutos.",
      icon: "✉️"
    }
  ];

  const benefits = [
    { title: "Ahorra tiempo", description: "Reduce el estrés y libera tiempo para disfrutar", icon: "⏰" },
    { title: "Organización perfecta", description: "Mantén control total y evita contratiempos", icon: "✅" },
    { title: "Comunicación efectiva", description: "Conectado con todos en todo momento", icon: "📱" },
    { title: "Personalización total", description: "Eventos únicos que reflejan tu estilo", icon: "🎨" }
  ];

  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
            Eventos Sociales <span className="text-[#6096B9]">Inolvidables</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-[700px] mx-auto">
            Planifica bodas, cumpleaños, aniversarios y más. Sin estrés, con todas las herramientas en un solo lugar.
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

      {/* Features Grid */}
      <section className="w-full py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#6096B9] font-semibold uppercase text-sm tracking-wide mb-3">
              Herramientas Poderosas
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748]">
              Todo lo que necesitas para tu evento
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
      <section className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <img src="image/banner1.svg" alt="EventosOrganizador Platform" className="w-full rounded-2xl shadow-xl" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#6096B9] font-semibold uppercase text-sm tracking-wide mb-3">
              ¿Por qué elegirnos?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748]">
              Beneficios que marcan la diferencia
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

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#6096B9] to-[#4b7591] py-16 px-4">
        <div className="max-w-[800px] mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para crear tu evento perfecto?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Únete a miles de organizadores que ya confían en nosotros
          </p>
          <button className="px-10 py-4 bg-white text-[#6096B9] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
            <a href="https://app.eventosorganizador.com/">Comenzar Ahora</a>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};