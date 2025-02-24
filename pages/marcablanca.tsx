import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/IndexFooter';

const MarcaBlanca: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8 gap-4">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center overflow-auto max-w-[1200px] gap-12 px-4 py-6">
        <div className="w-full flex items-center justify-center gap-4 mb-4">
          <div className='flex flex-col items-center justify-center text-center gap-6'>          
          <h1 className="text-2xl font-bold text-[#6096B9]">¿Qué es la Marca Blanca en EventosOrganizador?</h1>
          <button className="px-4 py-2 bg-[#6096B9] rounded-full text-white font-semibold hover:bg-[#4e7a97] mb-4">
          <a href="https://meet.brevo.com/eventosorganizador-com/agenda-2025-webinar">Crear mi marca blanca</a>
        </button>
        </div>
          <img src="image/banner5.svg" alt="Imagen" className="w-2/4 h-auto rounded-md" />
        </div> 

        <div className="w-full flex flex-col items-center justify-center gap-4 mb-4">
        <h2 className="text-lg font-semibold mb-2 text-[#49516F]">Si eres un profesional de la organización de eventos, sabes que la imagen de tu marca es fundamental para el éxito.</h2>
        <p className="mb-4 text-justify text-[#4B5563] text-base">
        Con la opción de Marca Blanca de EventosOrganizador.com, puedes ofrecer a tus clientes una experiencia personalizada y profesional, utilizando nuestra potente plataforma con tu propia marca.
        </p>
        </div>



        <div className="w-full flex flex-col items-start justify-start text-left">

            <h2 className="text-2xl font-semibold mb-2 text-[#6096B9]">¿En qué consiste la Marca Blanca?</h2>
            
            <div className="flex items-center justify-center  mb-4 text-justify text-[#4B5563] text-base">
            La Marca Blanca te permite utilizar EventosOrganizador.com como si fuera tu propia plataforma. Esto significa que puedes:
        </div>
            
            <ul className="list-disc list-inside mb-4 text-justify text-base">
              <li><strong className="text-[#4B5563]">Personalizar la interfaz:</strong> Mostrar tu logotipo, colores y fuentes en la plataforma, creando una experiencia de marca coherente para tus clientes.</li>
              <li><strong className="text-[#4B5563]">Utilizar tu propio dominio:</strong> Acceder a la plataforma a través de tu propio dominio web (por ejemplo, [tumarca].com), lo que refuerza la imagen de tu marca.</li>
              <li><strong className="text-[#4B5563]">Ofrecer un servicio exclusivo:</strong> Brindar a tus clientes una herramienta potente y personalizada para la gestión de sus eventos, lo que te diferencia de la competencia.</li>
            </ul>
          
        </div>

        <h2 className="text-lg font-semibold mb-2 text-[#49516F] text-left w-full">¿Cuáles son los beneficios de la Marca Blanca?</h2>
        <div className="flex mb-4 w-full">

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Fortalece tu marca</div>  Construir una imagen de marca sólida y coherente, lo que genera confianza y credibilidad entre tus clientes.
          </div>

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Mejora la experiencia del cliente</div> Al ofrecer una plataforma personalizada con tu marca, brindas a tus clientes una experiencia exclusiva.
          </div>

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Aumenta lafidelidad</div> al tener una experiencia personalizada tus clientes serán más propensos a volver a contratar tus servicios en el futuro.
          </div>

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Genera ingresos nuevos</div> vende tus ebooks, infoproductos o cursos desde una página confiable con tu marca.
          </div>

        </div>
        <div className="w-full flex flex-col items-start justify-start text-left">
        <h2 className="text-lg font-semibold mb-2 text-[#49516F] text-left w-full">¿Cómo puedo obtener la Marca Blanca?</h2>
        <p className="mb-4 text-justify text-[#4B5563] text-base">
        Si estás interesado en la opción de Marca Blanca, <strong className='text-[#6096B9]'>contáctanos</strong> y te brindaremos toda la información que necesitas.
        </p>
        </div>

      </main>
      
      <Footer />
    </div>
  );
};

export default MarcaBlanca;