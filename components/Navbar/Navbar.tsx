import { FC, useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Ayuda } from '../Ayuda/Ayuda';
import { EventosSociales } from '../Socials';
import { EventosTiketing } from '../Tiketing';

// Menú Soluciones (por tipo de evento) — legacy export
export const menuItems = [
  { title: 'Eventos Sociales', slug: "/socials", component: <EventosSociales />, description: 'Bodas, Cumpleaños, Baby Showers, etc.' },
  { title: 'Eventos de Tikecting', slug: "/tiketing", component: <EventosTiketing />, description: 'Conferencias, Festivales, Restaurantes, etc.' },
  { title: 'Ayuda', slug: "/help", component: <Ayuda />, description: 'Gestión, Colaboración, Planes.' },
];

const productoItems = [
  { t: 'Generación de Leads', d: 'Cola 24/7 + 6 fuentes de datos', h: '/funcionalidades/generacion-leads', icon: '🎯' },
  { t: 'CRM Pipeline', d: 'Kanban + scoring 0-100', h: '/funcionalidades/crm', icon: '📊' },
  { t: 'ERP', d: 'Catálogo, inventario, proveedores', h: '/funcionalidades/erp', icon: '📦' },
  { t: 'Finanzas + OCR', d: 'Facturación con IA', h: '/funcionalidades/finanzas', icon: '💰' },
  { t: 'Automatizaciones', d: 'Colas y workers 24/7', h: '/funcionalidades/automatizaciones', icon: '⚡' },
  { t: 'Eventos y Bodas', d: 'RSVP, catering, proveedores', h: '/funcionalidades/eventos-bodas', icon: '💒' },
  { t: 'Analytics', d: 'Dashboards en tiempo real', h: '/funcionalidades/analytics', icon: '📈' },
];

const solucionesItems = [
  { t: 'Agencias Marketing', d: 'Leads para tus clientes', h: '/soluciones/agencias-marketing', icon: '🏢' },
  { t: 'Equipos de Ventas', d: 'CRM que genera leads', h: '/soluciones/equipos-ventas', icon: '🚀' },
  { t: 'Wedding Planners', d: 'CRM para bodas', h: '/soluciones/wedding-planners', icon: '💒' },
  { t: 'Startups', d: 'Tu primer SDR virtual', h: '/soluciones/startups', icon: '🌱' },
  { t: 'Finanzas', d: 'OCR y facturación IA', h: '/soluciones/finanzas', icon: '💰' },
  { t: 'Consultores', d: 'Prospección nocturna', h: '/soluciones/consultores', icon: '💼' },
  { t: 'Venues', d: 'Gestión de fincas', h: '/soluciones/venues', icon: '🏛️' },
  { t: 'Distribuidores', d: 'Nuevos puntos de venta', h: '/soluciones/distribuidores', icon: '📦' },
];

const menus = [
  { label: 'Producto', key: 'producto', items: productoItems },
  { label: 'Soluciones', key: 'soluciones', items: solucionesItems },
];

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <nav className="w-full sticky top-0 z-[100] bg-gradient-to-r from-[#f8fbfd] to-[#f0f6fa] border-b border-[#6096B9]/10 backdrop-blur-xl">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0 transition-transform duration-200 hover:scale-105">
          <img src="image/logo1.svg" alt="EventosOrganizador" className="h-9" />
        </a>

        {/* Pill navigation — desktop */}
        <div className="hidden lg:flex items-center bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/60 px-1 py-1 gap-0.5">
          {menus.map((menu) => (
            <div key={menu.key} className="relative" onMouseEnter={() => setDropdown(menu.key)} onMouseLeave={() => setDropdown(null)}>
              <button className={`px-4 py-1.5 text-[13px] font-medium transition-all rounded-full flex items-center gap-1 ${dropdown === menu.key ? 'bg-[#6096B9] text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-white'}`}>
                {menu.label}
                <svg className={`w-3 h-3 transition-transform ${dropdown === menu.key ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdown === menu.key && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xl shadow-[#6096B9]/8 p-2 min-w-[260px]">
                    {menu.items.map((item) => (
                      <a key={item.h} href={item.h} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#6096B9]/5 transition-colors group">
                        <span className="text-base">{item.icon}</span>
                        <div>
                          <p className="text-[13px] font-medium text-gray-900 group-hover:text-[#6096B9] transition-colors">{item.t}</p>
                          <p className="text-[10px] text-gray-400">{item.d}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href="/pricing" className="px-4 py-1.5 text-[13px] text-gray-600 hover:text-gray-900 font-medium transition-colors rounded-full hover:bg-white">Precios</a>
          <a href="/contacto" className="px-4 py-1.5 text-[13px] text-gray-600 hover:text-gray-900 font-medium transition-colors rounded-full hover:bg-white">Contacto</a>
        </div>

        {/* CTAs — desktop */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a href="https://app.eventosorganizador.com/login?d=/" className="px-4 py-2 text-[13px] text-[#6096B9] font-medium hover:text-[#4b7591] transition-colors">
            Iniciar sesión
          </a>
          <a href="https://app.eventosorganizador.com/login?q=register&d=/" className="px-5 py-2.5 text-[13px] font-semibold text-white bg-[#6096B9] rounded-full hover:bg-[#4b7591] transition-colors shadow-md shadow-[#6096B9]/20">
            Empieza Gratis →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`flex lg:hidden items-center justify-center w-10 h-10 rounded-full ${isOpen ? 'bg-[#6096B9]/10' : ''} hover:bg-[#6096B9]/10 transition-colors`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon className="h-5 w-5 text-gray-700" /> : <MenuIcon className="h-5 w-5 text-gray-700" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#6096B9]/10 bg-white px-6 py-4 max-h-[80vh] overflow-y-auto">
          <p className="text-[10px] font-semibold text-[#6096B9] uppercase tracking-wider mb-2">Producto</p>
          {productoItems.map((item) => (
            <a key={item.h} href={item.h} className="flex items-center gap-2.5 py-2.5 text-[14px] text-gray-700 hover:text-[#6096B9] transition-colors">
              <span>{item.icon}</span> {item.t}
            </a>
          ))}
          <p className="text-[10px] font-semibold text-[#6096B9] uppercase tracking-wider mt-4 mb-2">Soluciones</p>
          {solucionesItems.map((item) => (
            <a key={item.h} href={item.h} className="flex items-center gap-2.5 py-2.5 text-[14px] text-gray-700 hover:text-[#6096B9] transition-colors">
              <span>{item.icon}</span> {item.t}
            </a>
          ))}
          <a href="/pricing" className="block py-2.5 mt-2 text-[14px] text-gray-700 font-medium hover:text-[#6096B9]">Precios</a>
          <a href="/contacto" className="block py-2.5 text-[14px] text-gray-700 font-medium hover:text-[#6096B9]">Contacto</a>

          <div className="pt-4 mt-3 border-t border-gray-100 space-y-2">
            <a href="https://app.eventosorganizador.com/login?d=/" className="block py-2.5 text-center text-[14px] text-[#6096B9] font-medium border border-[#6096B9]/20 rounded-full hover:bg-[#6096B9]/5 transition-colors">
              Iniciar sesión
            </a>
            <a href="https://app.eventosorganizador.com/login?q=register&d=/" className="block py-2.5 text-center text-[14px] font-semibold text-white bg-[#6096B9] rounded-full hover:bg-[#4b7591] transition-colors">
              Empieza Gratis →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
