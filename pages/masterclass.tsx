import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/IndexFooter';

const MasterClass: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-40"></div>
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
                ¡Domina la organización de <span className="text-[#6096B9]">eventos</span>!
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Con nuestra Master Class gratuita de EventosOrganizador
              </p>
              <p className="text-lg text-gray-600 mb-8">
                ¿Estás listo para llevar tus habilidades de planificación de eventos al siguiente nivel? Ya seas un profesional experimentado o estés dando tus primeros pasos en este emocionante mundo, tenemos una oportunidad imperdible para ti.
              </p>
              <button className="px-8 py-4 bg-[#6096B9] rounded-lg text-white font-semibold hover:bg-[#4b7591] transition-all duration-300 shadow-lg hover:shadow-xl">
                <a href="https://meet.brevo.com/eventosorganizador-com/agenda-2025-webinar">Recibe una Master Class Gratis</a>
              </button>
            </div>
            <div>
              <img src="image/banner3.svg" alt="Master Class" className="w-full h-auto rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-lg text-gray-600">
            Te invitamos a participar en un webinar exclusivo donde uno de nuestros agentes expertos te guiará a través de las funcionalidades y te mostrará cómo aprovechar al máximo esta poderosa herramienta.
          </p>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="image/banner4.svg" alt="Aprendizaje" className="w-full rounded-2xl shadow-xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-6">
                ¿Qué aprenderás en esta masterclass?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="text-[#6096B9] text-2xl">✓</div>
                  <div>
                    <strong className="text-gray-800">Navegación intuitiva:</strong>
                    <p className="text-gray-600">Aprende a moverte por la plataforma de manera fácil y a encontrar las herramientas que necesitas en cada momento.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-[#6096B9] text-2xl">✓</div>
                  <div>
                    <strong className="text-gray-800">Creación de eventos paso a paso:</strong>
                    <p className="text-gray-600">Descubre cómo crear eventos desde cero, personalizarlos con tu marca y configurarlos para satisfacer tus necesidades específicas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-[#6096B9] text-2xl">✓</div>
                  <div>
                    <strong className="text-gray-800">Gestión de invitados sin complicaciones:</strong>
                    <p className="text-gray-600">Domina el módulo de invitados, desde la importación de listas hasta el seguimiento de confirmaciones y la comunicación personalizada.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-[#6096B9] text-2xl">✓</div>
                  <div>
                    <strong className="text-gray-800">Herramientas de planificación avanzada:</strong>
                    <p className="text-gray-600">Explora las funciones de planificación, como la creación de planos de distribución, la gestión de presupuestos y la asignación de tareas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-[#6096B9] text-2xl">✓</div>
                  <div>
                    <strong className="text-gray-800">Colaboración en equipo:</strong>
                    <p className="text-gray-600">Aprende a trabajar en equipo de manera eficiente con otros organizadores, proveedores y colaboradores a través de la plataforma.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-12 text-center">
            ¿Por qué asistir a esta masterclass?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 glassmorphism rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6096B9]/0 via-[#6096B9]/0 to-[#6096B9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-7 h-7 text-[#6096B9]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2 group-hover:text-[#6096B9] transition-colors duration-300">Aprende de los expertos</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Recibirás consejos y trucos de uno de nuestros agentes con experiencia en la plataforma.</p>
              </div>
            </div>
            <div className="group p-6 glassmorphism rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6096B9]/0 via-[#6096B9]/0 to-[#6096B9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-7 h-7 text-[#6096B9]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2 group-hover:text-[#6096B9] transition-colors duration-300">Resolución de dudas en vivo</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Tendrás la oportunidad de hacer preguntas y recibir respuestas personalizadas durante el webinar.</p>
              </div>
            </div>
            <div className="group p-6 glassmorphism rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6096B9]/0 via-[#6096B9]/0 to-[#6096B9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-7 h-7 text-[#6096B9]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2 group-hover:text-[#6096B9] transition-colors duration-300">Ahorra tiempo y esfuerzo</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Descubre cómo EventosOrganizador.com puede simplificar la gestión de tus eventos y liberarte de tareas tediosas.</p>
              </div>
            </div>
            <div className="group p-6 glassmorphism rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6096B9]/0 via-[#6096B9]/0 to-[#6096B9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-7 h-7 text-[#6096B9]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2 group-hover:text-[#6096B9] transition-colors duration-300">Impulsa tu negocio</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Aprende a utilizar EventosOrganizador.com para ofrecer un servicio más profesional y eficiente a tus clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#f6f9fc] py-16 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Únete a nuestra master class gratuita y aprende a organizar eventos como un profesional
          </p>
          <a href="https://meet.brevo.com/eventosorganizador-com/agenda-2025-webinar" className="inline-flex items-center gap-2 px-8 py-4 bg-[#6096B9] text-white font-medium rounded-xl hover:bg-[#4b7591] transition-colors shadow-md">
            Únete ahora mismo al webinar
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MasterClass;