import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/IndexFooter';

const MarcaBlanca: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
                Marca <span className="text-[#6096B9]">Blanca</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Tu plataforma de eventos personalizada con tu propia marca
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Si eres un profesional de la organización de eventos, sabes que la imagen de tu marca es fundamental para el éxito. Con la opción de Marca Blanca de EventosOrganizador.com, puedes ofrecer a tus clientes una experiencia personalizada y profesional.
              </p>
              <button className="px-8 py-4 bg-[#6096B9] rounded-lg text-white font-semibold hover:bg-[#4b7591] transition-all duration-300 shadow-lg hover:shadow-xl">
                <a href="https://meet.brevo.com/eventosorganizador-com/agenda-2025-webinar">Crear mi marca blanca</a>
              </button>
            </div>
            <div>
              <img src="image/banner5.svg" alt="Marca Blanca" className="w-full h-auto rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What is White Label Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-6 text-center">
            ¿En qué consiste la Marca Blanca?
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-[800px] mx-auto">
            La Marca Blanca te permite utilizar EventosOrganizador.com como si fuera tu propia plataforma. Esto significa que puedes:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-7 h-7 text-[#6096B9]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-3 group-hover:text-[#6096B9] transition-colors duration-300">Personalizar la interfaz</h3>
              <p className="text-gray-600 leading-relaxed">
                Mostrar tu logotipo, colores y fuentes en la plataforma, creando una experiencia de marca coherente para tus clientes.
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-7 h-7 text-[#6096B9]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-3 group-hover:text-[#6096B9] transition-colors duration-300">Utilizar tu propio dominio</h3>
              <p className="text-gray-600 leading-relaxed">
                Acceder a la plataforma a través de tu propio dominio web (por ejemplo, [tumarca].com), lo que refuerza la imagen de tu marca.
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer">
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-7 h-7 text-[#6096B9]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2d3748] mb-3 group-hover:text-[#6096B9] transition-colors duration-300">Ofrecer un servicio exclusivo</h3>
              <p className="text-gray-600 leading-relaxed">
                Brindar a tus clientes una herramienta potente y personalizada para la gestión de sus eventos, lo que te diferencia de la competencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-12 text-center">
            ¿Cuáles son los beneficios de la Marca Blanca?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer text-center">
              <div className="w-14 h-14 mb-4 mx-auto rounded-xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-7 h-7 text-[#6096B9]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2 group-hover:text-[#6096B9] transition-colors duration-300">Fortalece tu marca</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Construir una imagen de marca sólida y coherente, lo que genera confianza y credibilidad entre tus clientes.
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer text-center">
              <div className="w-14 h-14 mb-4 mx-auto rounded-xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-7 h-7 text-[#6096B9]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2 group-hover:text-[#6096B9] transition-colors duration-300">Mejora la experiencia del cliente</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Al ofrecer una plataforma personalizada con tu marca, brindas a tus clientes una experiencia exclusiva.
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer text-center">
              <div className="w-14 h-14 mb-4 mx-auto rounded-xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-7 h-7 text-[#6096B9]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2 group-hover:text-[#6096B9] transition-colors duration-300">Aumenta la fidelidad</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Al tener una experiencia personalizada tus clientes serán más propensos a volver a contratar tus servicios en el futuro.
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#6096B9] hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer text-center">
              <div className="w-14 h-14 mb-4 mx-auto rounded-xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg className="w-7 h-7 text-[#6096B9]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#2d3748] mb-2 group-hover:text-[#6096B9] transition-colors duration-300">Genera ingresos nuevos</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vende tus ebooks, infoproductos o cursos desde una página confiable con tu marca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#f6f9fc] py-16 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo puedo obtener la Marca Blanca?
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Si estás interesado en la opción de Marca Blanca, contáctanos y te brindaremos toda la información que necesitas.
          </p>
          <a href="https://meet.brevo.com/eventosorganizador-com/agenda-2025-webinar" className="inline-flex items-center gap-2 px-8 py-4 bg-[#6096B9] text-white font-medium rounded-xl hover:bg-[#4b7591] transition-colors shadow-md">
            Contáctanos ahora
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarcaBlanca;
