import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/IndexFooter';

const MasterClass: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8 gap-4">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center overflow-auto max-w-[1200px] gap-12 px-4 py-6">
        <div className="w-full flex items-center justify-center gap-4 mb-4">
          <h1 className="text-2xl font-bold text-[#6096B9]">¡Domina la organización de eventos!</h1>
          <img src="image/banner3.svg" alt="Imagen" className="w-2/4 h-auto rounded-md" />
        </div> 

        <div className="w-full flex flex-col items-center justify-center gap-4 mb-4">
        <h2 className="text-lg font-semibold mb-2 text-[#49516F]">Con nuestra Masterclass gratuita de EventosOrganizador</h2>
        <p className="mb-4 text-justify text-[#4B5563] text-base">
          ¿Estás listo para llevar tus habilidades de planificación de eventos al siguiente nivel? Ya seas un profesional experimentado o estés dando tus primeros pasos en este emocionante mundo, tenemos una oportunidad imperdible para ti. <strong className='text-[#4B5563]'>Únete a nuestra masterclass gratuita</strong>
        </p>
        <button className="px-4 py-2 bg-[#6096B9] rounded-full text-white font-semibold hover:bg-[#4e7a97] mb-4">
          <a href="https://meet.brevo.com/eventosorganizador-com/agenda-2025-webinar">Recibe una Master Class Gratis</a>
        </button>
        </div>

        <div className="flex items-center justify-center  mb-4 text-justify text-[#4B5563] text-base">
          Te invitamos a participar en un webinar exclusivo donde uno de nuestros agentes expertos te guiará a través de las funcionalidades y te mostrará cómo aprovechar al máximo esta poderosa herramienta.
        </div>

        <div className="w-full flex items-center justify-center">
          <img src="image/banner4.svg" alt="Banner" className="w-full mb-4" />
          <div className="w-full max-w-[1200px] px-4">
            <h2 className="text-2xl font-semibold mb-2 text-[#6096B9]">¿Qué aprenderás en esta masterclass?</h2>
            <ul className="list-disc list-inside mb-4 text-justify text-base">
              <li><strong className="text-[#4B5563]">Navegación intuitiva:</strong> Aprende a moverte por la plataforma de manera fácil y a encontrar las herramientas que necesitas en cada momento.</li>
              <li><strong className="text-[#4B5563]">Creación de eventos paso a paso:</strong> Descubre cómo crear eventos desde cero, personalizarlos con tu marca y configurarlos para satisfacer tus necesidades específicas.</li>
              <li><strong className="text-[#4B5563]">Gestión de invitados sin complicaciones:</strong> Domina el módulo de invitados, desde la importación de listas hasta el seguimiento de confirmaciones y la comunicación personalizada.</li>
              <li><strong className="text-[#4B5563]">Herramientas de planificación avanzada:</strong> Explora las funciones de planificación, como la creación de planos de distribución, la gestión de presupuestos y la asignación de tareas.</li>
              <li><strong className="text-[#4B5563]">Colaboración en equipo:</strong> Aprende a trabajar en equipo de manera eficiente con otros organizadores, proveedores y colaboradores a través de la plataforma.</li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-[1200px] px-4 text-left">
          <h2 className="text-2xl font-semibold mb-2 text-[#4B5563]">¿Por qué asistir a esta masterclass?</h2>
          <ul className="list-disc list-inside mb-4 text-justify text-base">
            <li><strong className="text-[#4B5563]">Aprende de los expertos:</strong> Recibirás consejos y trucos de uno de nuestros agentes con experiencia en la plataforma.</li>
            <li><strong className="text-[#4B5563]">Resolución de dudas en vivo:</strong> Tendrás la oportunidad de hacer preguntas y recibir respuestas personalizadas durante el webinar.</li>
            <li><strong className="text-[#4B5563]">Ahorra tiempo y esfuerzo:</strong> Descubre cómo EventosOrganizador.com puede simplificar la gestión de tus eventos y liberarte de tareas tediosas.</li>
            <li><strong className="text-[#4B5563]">Impulsa tu negocio:</strong> Aprende a utilizar EventosOrganizador.com para ofrecer un servicio más profesional y eficiente a tus clientes.</li>
          </ul>
        </div>

        <button className="px-4 py-2 bg-[#6096B9] rounded-full text-white font-semibold hover:bg-[#4e7a97]">
          <a href="https://meet.brevo.com/eventosorganizador-com/agenda-2025-webinar">Únete ahora mismo al webinar</a>
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default MasterClass;