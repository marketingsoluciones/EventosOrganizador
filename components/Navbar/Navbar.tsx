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
    { title: 'Inicio', href: '/',},
    { title: 'Contacto', href: '/contacto',},

  ];

  return (
    <nav className="w-[100%] flex flex-row justify-between items-center px-8 overflow-hidden md:max-w-[1200px] ">
      {/* Logo */}
      <div className="flex flex-row items-center justify-center gap-3">
        <a href="/" className="flex items-center justify-center h-12 pr-4">
          <img src="image/logo1.svg" alt="Logo" className="h-8" />
        </a>
              {/* Menú principal (escritorio) */}
      <div className="hidden lg:flex flex-col">
        <ul className="flex flex-row justify-center gap-6 ">
        <div className='w-auto flex items-center justify-center text-[#6096B9] font-medium'><a href="/">Inicio</a></div>
          <DropdownMenu title="Soluciones" items={menuItems} />
          <div className='w-auto flex items-center justify-center text-[#6096B9] font-medium' ><a href="contacto" onClick={handleContactClick}>Contacto</a></div>
        </ul>
      </div>
      </div>



      {/* Botones de acción (escritorio) */}
      <div className="hidden lg:flex gap-2">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300">
          <a href="https://app.eventosorganizador.com/login?q=register&d=/">Registrarse</a>
        </button>
        <button className="px-4 py-2 bg-[#6096B9] rounded-full text-white font-semibold hover:bg-[#4e7a97]">
          
          <a href="https://app.eventosorganizador.com/login?d=/">Iniciar sesión</a>
        </button>
      </div>

{/* Menú desplegable (móvil) */}
<div className="flex w-auto md:hidden z-50">
  <button
    className={`flex flex-row items-center justify-center w-auto h-12 rounded-full ${isOpen ? 'bg-white' : 'bg-transparent'} hover:bg-gray-100`}
    onClick={handleToggleMenu}
  >
    {isOpen ? <XIcon className="h-6 w-6 text-black" /> : <MenuIcon className="h-6 w-6 text-black" />}
  </button>

  {isOpen && ( // Render menu only when open
    <div className="absolute top-16 left-0 right-0 bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
      <ul className="flex flex-col space-y-1 px-4 py-2">
        {menuItems2.map((item) => (
          <li key={item.title} className="text-gray-700 hover:text-gray-900">
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
        <li className="text-gray-700 hover:text-gray-900">
          <button className="w-full text-left" onClick={() => setIsOpenSoluciones(!isOpenSoluciones)}>
            Soluciones
          </button>
          {isOpenSoluciones && (
            <ul className="flex flex-col space-y-1 pl-4">
              <li className="text-gray-700 hover:text-gray-900">
                <a href="/socials">Eventos Sociales</a>
              </li>
              <li className="text-gray-700 hover:text-gray-900">
                <a href="/tiketing">Eventos de Tiketing</a>
              </li>
              <li className="text-gray-700 hover:text-gray-900">
                <a href="/help">Ayuda</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  )}
</div>
    </nav>
  );
};

export default Navbar;