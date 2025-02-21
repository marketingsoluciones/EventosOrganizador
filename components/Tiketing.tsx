import Navbar from './Navbar/Navbar';
import Footer from './Footer/IndexFooter';
import { FC } from 'react';

export const EventosTiketing: FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8 gap-4">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center overflow-auto max-w-[1000px] px-4 py-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-[#6096B9]">Gestiona tus eventos con ticketing de forma fácil y profesional con EventosOrganizador.com</h1>
        <p className="mb-4 text-justify">
          ¿Estás organizando un evento que requiere la venta de entradas? Ya sea un concierto, una obra de teatro, un festival, una conferencia o cualquier otro tipo de evento, la gestión de ticketing es un aspecto crucial para el éxito de tu evento.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">¿Por qué es importante una buena gestión de ticketing?</h2>
        <ul className="list-disc list-inside mb-4 text-justify">
          <li><strong className="text-[#6096B9]">Control de acceso:</strong> Asegura que solo las personas con entrada puedan acceder a tu evento.</li>
          <li><strong className="text-[#6096B9]">Gestión de aforo:</strong> Permite controlar el número de asistentes y evitar el sobreaforo.</li>
          <li><strong className="text-[#6096B9]">Venta de entradas:</strong> Facilita la venta de entradas online y de forma presencial.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">¿Cómo te ayuda EventosOrganizador.com?</h2>
        <p className="mb-4 text-justify">
          EventosOrganizador.com te ofrece una solución integral para la gestión de ticketing de tus eventos. Nuestra plataforma te permite:
        </p>
        <ul className="list-disc list-inside mb-4 text-justify">
          <li><strong className="text-[#6096B9]">Crear diferentes tipos de entradas:</strong> Define diferentes tipos de entradas (general, VIP, etc.) con precios y características específicas.</li>
          <li><strong className="text-[#6096B9]">Vender entradas online:</strong> Vende entradas de forma online a través de nuestra plataforma de forma segura y sencilla.</li>
          <li><strong className="text-[#6096B9]">Gestionar el aforo:</strong> Controla el número de entradas vendidas y asegúrate de no exceder el aforo permitido.</li>
          <li><strong className="text-[#6096B9]">Realizar un seguimiento de las ventas:</strong> Obtén informes detallados sobre las ventas de entradas en tiempo real.</li>
          <li><strong className="text-[#6096B9]">Comunicarte con los asistentes:</strong> Envía mensajes y recordatorios a los asistentes que han comprado entradas.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-[#6096B9]">Beneficios de usar EventosOrganizador.com para la gestión de ticketing</h2>
        <ul className="list-disc list-inside mb-4 text-justify">
          <li><strong className="text-[#6096B9]">Ahorra tiempo y dinero:</strong> Simplifica la gestión de ticketing y reduce los costes asociados.</li>
          <li><strong className="text-[#6096B9]">Mayor control:</strong> Ten un control total sobre la venta de entradas y el acceso a tu evento.</li>
          <li><strong className="text-[#6096B9]">Seguridad:</strong> Vende entradas de forma segura y evita fraudes.</li>
          <li><strong className="text-[#6096B9]">Comodidad:</strong> Facilita la compra de entradas para tus asistentes.</li>
          <li><strong className="text-[#6096B9]">Profesionalidad:</strong> Ofrece una imagen profesional y organizada de tu evento.</li>
        </ul>
        <p className="mb-4 text-justify">
          No lo pienses más: ¡Gestiona tus eventos con ticketing de forma fácil y profesional con EventosOrganizador.com!
        </p>
      </main>
      <Footer />
    </div>
  );
};
