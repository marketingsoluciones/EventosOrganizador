import Navbar from './Navbar/Navbar';
import Footer from './Footer/IndexFooter';
import { FC } from 'react';

export const EventosSociales: FC = () => {
  return (
    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8 gap-4">
      <Navbar />
      <main className="w-full flex flex-col items-center justify-center overflow-auto max-w-[1200px] px-4 py-6">
        <h1 className="text-xl font-bold mb-4 text-center text-[#49516F]">Eventos sociales inolvidables: Planifícalos con EventosOrganizador.com</h1>
        <img src="image/banner1.svg" alt="Banner" className="w-full mb-4" />
        <div className="flex flex-col items-center mb-4">
        <h2 className="text-lg font-semibold mb-2 text-[#49516F] text-left w-full">Los eventos sociales son momentos especiales que compartimos con nuestros seres queridos. </h2>
          <div className="mb-4 text-justify text-base w-full">
          Ya sea una boda, un cumpleaños, un aniversario o una fiesta de graduación, estos eventos nos permiten celebrar la vida y crear recuerdos duraderos. Pero, ¿quién no ha sentido el estrés de planificar un evento social? La lista de tareas parece interminable: elegir el lugar, enviar invitaciones, coordinar proveedores, hacer un seguimiento de los invitados, ¡y mucho más!
          </div>
          <h2 className="text-lg font-semibold mb-2 text-[#49516F] text-left w-full">¿Te identificas?</h2>
          <div className="mb-4 text-justify text-base w-full">
            Si la planificación de eventos sociales te genera más estrés que emoción, ¡tenemos la solución perfecta para ti! EventosOrganizador.com es la plataforma integral que te ayudará a simplificar cada etapa del proceso y a crear eventos inolvidables.
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-[#49516F] text-left w-full">¿Qué te ofrece EventosOrganizador.com?</h2>
        <div className="flex mb-4 w-full">

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Centraliza la gestión de tu evento</div> Olvídate de la información dispersa. Con EventosOrganizador.com, gestiona todo en un solo lugar.
          </div>

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Comunicación fluida con todos</div> Mantente en contacto con invitados, proveedores y colaboradores a través de la plataforma.
          </div>

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Gestiona tu lista de invitados</div> Organiza la lista, confirma asistencia, registra alergias y preferencias, y mucho más.
          </div>

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Herramientas de planificación</div> Crea planos de distribución, gestiona presupuestos, crea listas de tareas y más.
          </div>

          <div className="flex flex-col items-center justify-start text-center mx-4 text-sm">
            <div className="w-full flex items-center justify-center font-semibold text-lg text-center text-[#6096B9]">Colabora en equipo</div> Si organizas un evento con amigos o familiares, EventosOrganizador.com facilita la colaboración.
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-2 text-[#49516F] text-left w-full">Beneficios de usar EventosOrganizador.com</h2>
        <ul className="list-disc list-inside mb-4 text-justify w-full text-base">
          <li><strong className="text-[#4B5563]">Ahorra tiempo y reduce el estrés:</strong> Simplifica la planificación de tu evento y libera tiempo para disfrutar de los preparativos.</li>
          <li><strong className="text-[#4B5563]">Organización impecable:</strong> Mantén todos los detalles de tu evento bajo control y evita contratiempos de última hora.</li>
          <li><strong className="text-[#4B5563]">Comunicación efectiva:</strong> Mantente conectado con tus invitados y colaboradores en todo momento.</li>
          <li><strong className="text-[#4B5563]">Eventos personalizados:</strong> Crea eventos únicos y personalizados que reflejen tu estilo y personalidad.</li>
        </ul>
        <p className="mb-4 text-justify w-full text-base">
          No lo pienses más: ¡Planifica tu próximo evento social con EventosOrganizador.com!
        </p>
      </main>
      <Footer />
    </div>
  );
};