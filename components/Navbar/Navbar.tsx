import { FC, useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Ayuda } from '../Ayuda/Ayuda';
import { EventosSociales } from '../Socials';
import { EventosTiketing } from '../Tiketing';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`w-full sticky top-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
      <div className={`max-w-[1200px] mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}>
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img src="/image/logo1.svg" alt="EventosOrganizador" className="h-8" />
        </a>

        {/* Navigation — desktop (grouped pill) */}
        <div className="hidden lg:flex items-center gap-1 border border-gray-200/80 rounded-full px-1.5 py-1 bg-white/60 backdrop-blur-sm shadow-sm">
          {menus.map((menu) => (
            <div key={menu.key} className="relative" onMouseEnter={() => setDropdown(menu.key)} onMouseLeave={() => setDropdown(null)}>
              <button className={`px-3.5 py-1.5 text-[13px] font-medium transition-all rounded-full flex items-center gap-1 ${dropdown === menu.key ? 'text-gray-900 bg-gray-100' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}>
                {menu.label}
                <svg className={`w-3 h-3 transition-transform ${dropdown === menu.key ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdown === menu.key && (
                <div className="absolute top-full left-0 pt-3 z-50">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-xl p-2 min-w-[260px]">
                    {menu.items.map((item) => (
                      <a key={item.h} href={item.h} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group">
                        <span className="text-base w-6 text-center">{item.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.t}</p>
                          <p className="text-[11px] text-gray-400">{item.d}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="w-px h-4 bg-gray-200 mx-0.5" />
          <a href="/pricing" className="px-3.5 py-1.5 text-[13px] text-gray-500 hover:text-gray-900 hover:bg-gray-50 font-medium transition-all rounded-full">Precios</a>
          <a href="/demo" className="px-3.5 py-1.5 text-[13px] text-gray-500 hover:text-gray-900 hover:bg-gray-50 font-medium transition-all rounded-full">Demo</a>
        </div>

        {/* CTAs — desktop */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <LanguageSelector />
          <a href="https://app.eventosorganizador.com/login?d=/" className="px-4 py-2 text-[13px] text-gray-500 font-medium hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50">
            Iniciar sesión
          </a>
          <a href="https://app.eventosorganizador.com/login?q=register&d=/" className="px-5 py-2 text-[13px] font-medium text-white bg-[#6096B9] rounded-full hover:bg-[#4b7591] transition-colors shadow-sm">
            Empieza Gratis
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex lg:hidden items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon className="h-5 w-5 text-gray-600" /> : <MenuIcon className="h-5 w-5 text-gray-600" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 max-h-[80vh] overflow-y-auto">
          <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-2">Producto</p>
          {productoItems.map((item) => (
            <a key={item.h} href={item.h} className="flex items-center gap-2.5 py-2.5 text-sm text-gray-700 hover:text-[#6096B9] transition-colors">
              <span>{item.icon}</span> {item.t}
            </a>
          ))}
          <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mt-4 mb-2">Soluciones</p>
          {solucionesItems.map((item) => (
            <a key={item.h} href={item.h} className="flex items-center gap-2.5 py-2.5 text-sm text-gray-700 hover:text-[#6096B9] transition-colors">
              <span>{item.icon}</span> {item.t}
            </a>
          ))}
          <a href="/pricing" className="block py-2.5 mt-2 text-sm text-gray-700 font-medium hover:text-[#6096B9]">Precios</a>
          <a href="/demo" className="block py-2.5 text-sm text-gray-700 font-medium hover:text-[#6096B9]">Demo</a>

          <div className="pt-4 mt-3 border-t border-gray-100 space-y-2">
            <div className="flex items-center justify-center py-2">
              <LanguageSelector />
            </div>
            <a href="https://app.eventosorganizador.com/login?d=/" className="block py-2.5 text-center text-sm text-gray-700 font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Iniciar sesión
            </a>
            <a href="https://app.eventosorganizador.com/login?q=register&d=/" className="block py-2.5 text-center text-sm font-medium text-white bg-[#6096B9] rounded-lg hover:bg-[#4b7591] transition-colors">
              Empieza Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
