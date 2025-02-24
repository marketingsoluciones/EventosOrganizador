import Navbar from './Navbar/Navbar';
import Footer from './Footer/IndexFooter';
import { FC } from 'react';

export const EventosTiketing: FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8 gap-4">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center overflow-auto max-w-[1200px] px-4 py-6">
        <h1 className="text-xl font-bold mb-4 text-center text-[#49516F]">Eventos de ticketing: Planifícalos con EventosOrganizador.com</h1>
        <img src="image/banner2.svg" alt="Banner" className="w-full mb-4" />
        <div className="flex flex-col items-center mb-4">
        <h2 className="text-lg font-semibold mb-2 text-[#49516F] text-left w-full">Gestiona tus eventos con ticketing de forma fácil y profesional con EventosOrganizador.com</h2>
          <div className="mb-4 text-justify text-base w-full">
          ¿Estás organizando un evento que requiere la venta de entradas? Ya sea un concierto, una obra de teatro, un festival, una conferencia o cualquier otro tipo de evento, la gestión de ticketing es un aspecto crucial para el éxito de tu evento.
          </div>
          <h2 className="text-lg font-semibold mb-2 text-[#49516F] text-left w-full">¿Por qué es importante una buena gestión de ticketing?</h2>
          <div className="mb-4 text-justify text-base w-full">
          <ul className="list-disc list-inside mb-4 text-justify w-full text-base">
          <li><strong className="text-[#4B5563]">Control de acceso:</strong> Asegura que solo las personas con entrada puedan acceder a tu evento.</li>
          <li><strong className="text-[#4B5563]">Gestión de aforo:</strong> Permite controlar el número de asistentes y evitar el sobreaforo.</li>
          <li><strong className="text-[#4B5563]">Venta de entradas:</strong> Facilita la venta de entradas online y de forma presencial.</li>
          </ul>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-[#49516F] text-left w-full">¿Cómo te ayuda EventosOrganizador.com?</h2>
        <div className="flex mb-4 w-full">

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Crear diferentes tipos de entradas</div>Define diferentes tipos de entradas (general, VIP, etc.) con precios y características específicas.
          </div>

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Vender entradas online</div> Vende entradas de forma online a través de nuestra plataforma de forma segura y sencilla.
          </div>

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Gestionar el aforo en linea</div>  Controla el número de entradas vendidas y asegúrate de no exceder el aforo permitido.
          </div>

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Realizar un seguimiento</div> Obtén informes detallados sobre las ventas de entradas en tiempo real.
          </div>

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Comunicación 24/7</div> Envía mensajes y recordatorios a los asistentes que han comprado entradas.
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-[#49516F] text-left w-full">Beneficios de usar EventosOrganizador.com para la gestión de ticketing</h2>
        <ul className="list-disc list-inside mb-4 text-justify w-full text-base">
          <li><strong className="text-[#4B5563]">Ahorra tiempo y dinero:</strong> Simplifica la gestión de ticketing y reduce los costes asociados.</li>
          <li><strong className="text-[#4B5563]">Mayor control:</strong> Ten un control total sobre la venta de entradas y el acceso a tu evento.</li>
          <li><strong className="text-[#4B5563]">Seguridad:</strong> entradas de forma segura y evita fraudes.</li>
          <li><strong className="text-[#4B5563]">Comodidad:</strong> Facilita la compra de entradas para tus asistentes.</li>
          <li><strong className="text-[#4B5563]">Profesionalidad:</strong> Ofrece una imagen profesional y organizada de tu evento.</li>
        </ul>
        <p className="mb-4 text-justify w-full text-base">
        No lo pienses más: ¡Gestiona tus eventos con ticketing de forma fácil y profesional con EventosOrganizador.com!
        </p>
      </main>
      <Footer />
    </div>
  );
};
