import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/IndexFooter';

const MarcaBlanca: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8 gap-4">
      <Navbar />

      <main className="w-full flex flex-col items-center justify-center overflow-auto max-w-[1000px] px-4 py-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-[#6096B9]">¿Qué es la Marca Blanca en EventosOrganizador.com y cómo puede beneficiar a tu negocio?</h1>
        <p className="mb-4 text-justify">
          Si eres un profesional de la organización de eventos, sabes que la imagen de tu marca es fundamental para el éxito de tu negocio. Con la opción de <strong className="text-[#6096B9]">Marca Blanca</strong> de EventosOrganizador.com, puedes ofrecer a tus clientes una experiencia personalizada y profesional, utilizando nuestra potente plataforma con tu propia marca.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">¿En qué consiste la Marca Blanca?</h2>
        <p className="mb-4 text-justify">
          La Marca Blanca te permite utilizar EventosOrganizador.com como si fuera tu propia plataforma. Esto significa que puedes:
        </p>
        <ul className="list-disc list-inside mb-4 text-justify">
          <li><strong className="text-[#6096B9]">Personalizar la interfaz:</strong> Mostrar tu logotipo, colores y fuentes en la plataforma, creando una experiencia de marca coherente para tus clientes.</li>
          <li><strong className="text-[#6096B9]">Utilizar tu propio dominio:</strong> Acceder a la plataforma a través de tu propio dominio web (por ejemplo, [tumarca].eventosorganizador.com), lo que refuerza la imagen de tu marca.</li>
          <li><strong className="text-[#6096B9]">Ofrecer un servicio exclusivo:</strong> Brindar a tus clientes una herramienta potente y personalizada para la gestión de sus eventos, lo que te diferencia de la competencia.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">¿Cuáles son los beneficios de la Marca Blanca?</h2>
        <ul className="list-disc list-inside mb-4 text-justify">
          <li><strong className="text-[#6096B9]">Fortalece tu marca:</strong> La Marca Blanca te permite construir una imagen de marca sólida y coherente, lo que genera confianza y credibilidad entre tus clientes.</li>
          <li><strong className="text-[#6096B9]">Mejora la experiencia del cliente:</strong> Al ofrecer una plataforma personalizada con tu marca, brindas a tus clientes una experiencia exclusiva y profesional.</li>
          <li><strong className="text-[#6096B9]">Aumenta la fidelidad:</strong> Al sentir que están utilizando una plataforma diseñada específicamente para ellos, tus clientes serán más propensos a volver a contratar tus servicios en el futuro.</li>
          <li><strong className="text-[#6096B9]">Ahorra tiempo y dinero:</strong> En lugar de invertir en el desarrollo de tu propia plataforma, puedes utilizar EventosOrganizador.com con tu marca, lo que te permite ahorrar tiempo y dinero.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">¿Cómo puedo obtener la Marca Blanca?</h2>
        <p className="mb-4 text-justify">
          Si estás interesado en la opción de Marca Blanca, contáctanos y te brindaremos toda la información que necesitas.
        </p>
        <button className="px-4 py-2 bg-[#6096B9] rounded-full text-white font-semibold hover:bg-[#4e7a97]">
            <a href="https://app.eventosorganizador.com/login?q=register&d=/">Entra ya!</a>
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default MarcaBlanca;