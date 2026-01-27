import { Component, FC, useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import DropdownMenu from './DropdownMenu'; // Assuming DropdownMenu is a separate component for dropdown menus
import { Ayuda } from '../Ayuda/Ayuda';
import { useRouter } from 'next/router'; // Import useRouter
import { EventosSociales } from '../Socials';
import { EventosTiketing } from '../Tiketing';

export const menuItems = [
  { title: 'Eventos Sociales', 
    slug:"/socials",
    component: <EventosSociales/> ,
    description: 'Bodas, Cumpleaños, Baby Showers, etc.' 
  },

  { title: 'Eventos de Tikecting', 
    slug:"/tiketing",
    component:<EventosTiketing/>,
    description: 'Conferencias, Festivales, Restaurantes, etc.' 
  },

  { title: 'Ayuda', 
    slug:"/help",
    component:<Ayuda/>,
    description: 'Gestión, Colaboración, Planes.' 
  },
];

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSoluciones, setIsOpenSoluciones] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = () => {
    router.push('/contacto'); // Redirect to ContactoC.tsx
  };

  const menuItems2 = [
    { title: 'Contacto', href: '/contacto',},
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-row justify-between items-center h-20">
          {/* Logo - sección izquierda */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center transition-opacity duration-200 hover:opacity-80">
              <img src="image/logo1.svg" alt="Logo" className="h-11" />
            </a>
          </div>

          {/* Menú principal centrado (escritorio) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex flex-row items-center gap-12">
              <DropdownMenu title="Soluciones" items={menuItems} />
              <li className="text-gray-700 text-[15px] font-semibold hover:text-[#6096B9] transition-colors duration-200 cursor-pointer">
                <a href="contacto" onClick={handleContactClick}>Contacto</a>
              </li>
            </ul>
          </div>

          {/* Botones de acción (escritorio) - sección derecha */}
          <div className="hidden lg:flex gap-3 flex-shrink-0">
            <button className="px-6 py-2.5 text-[15px] bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 border-2 border-gray-300 hover:border-[#6096B9]">
              <a href="https://app.eventosorganizador.com/login?q=register&d=/">Registrarse</a>
            </button>
            <button className="px-6 py-2.5 text-[15px] bg-[#6096B9] rounded-lg text-white font-semibold hover:bg-[#4b7591] transition-all duration-200 shadow-md hover:shadow-lg">
              <a href="https://app.eventosorganizador.com/login?d=/">Iniciar sesión</a>
            </button>
          </div>

          {/* Menú desplegable (móvil) */}
          <div className="flex lg:hidden">
            <button
              className={`flex items-center justify-center w-10 h-10 rounded-lg ${isOpen ? 'bg-gray-100' : 'bg-transparent'} hover:bg-gray-100 transition-colors duration-200`}
              onClick={handleToggleMenu}
            >
              {isOpen ? <XIcon className="h-6 w-6 text-gray-700" /> : <MenuIcon className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Menú móvil expandido */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-lg">
            <ul className="flex flex-col space-y-1 px-4 py-4">
              {menuItems2.map((item) => (
                <li key={item.title} className="text-gray-700 hover:text-[#6096B9] py-3 px-3 rounded-md hover:bg-gray-50 transition-all duration-200 font-medium">
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
              <li className="text-gray-700 hover:text-[#6096B9] py-3 px-3 rounded-md hover:bg-gray-50 transition-all duration-200">
                <button className="w-full text-left font-medium" onClick={() => setIsOpenSoluciones(!isOpenSoluciones)}>
                  Soluciones
                </button>
                {isOpenSoluciones && (
                  <ul className="flex flex-col space-y-1 pl-4 mt-2">
                    <li className="text-gray-600 hover:text-[#6096B9] py-2 transition-colors duration-200">
                      <a href="/socials">Eventos Sociales</a>
                    </li>
                    <li className="text-gray-600 hover:text-[#6096B9] py-2 transition-colors duration-200">
                      <a href="/tiketing">Eventos de Tiketing</a>
                    </li>
                    <li className="text-gray-600 hover:text-[#6096B9] py-2 transition-colors duration-200">
                      <a href="/help">Ayuda</a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            {/* Botones de acción en móvil */}
            <div className="flex flex-col gap-2 px-4 pb-4 pt-2 border-t border-gray-100">
              <a href="https://app.eventosorganizador.com/login?q=register&d=/" className="w-full py-2.5 text-center text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 border-2 border-gray-300 hover:border-[#6096B9]">
                Registrarse
              </a>
              <a href="https://app.eventosorganizador.com/login?d=/" className="w-full py-2.5 text-center bg-[#6096B9] rounded-lg text-white font-semibold hover:bg-[#4b7591] transition-all duration-200 shadow-md">
                Iniciar sesión
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;