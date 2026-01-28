import React, { FC } from 'react';
import { CaruselPrincipal } from './Carusel';


const Header: FC = () => {


  return (
    <div className="w-full h-auto flex flex-col items-center justify-center pb-10 bg-gradient-to-b from-gray-50 via-white to-white md:max-w-[1200px] relative overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 pattern-dots opacity-60"></div>
      <div className="absolute inset-0 mesh-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>

      <div className="relative z-10 flex flex-col items-center justify-center py-16 md:py-24 space-y-6 md:space-y-8 px-4">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 bg-[#6096B9]/10 rounded-full border border-[#6096B9]/20 animate-fade-in backdrop-blur-sm">
          <svg className="w-4 h-4 text-[#6096B9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span className="text-sm md:text-[15px] font-semibold text-[#6096B9]">Plataforma líder en gestión de eventos</span>
        </div>

        <div className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] flex items-center justify-center font-bold text-gray-900 animate-fade-in tracking-normal" style={{animationDelay: '0.1s'}}>
          <h1 className="leading-[1.15] text-center px-2">
            ¿Qué{' '}
            <span className='relative inline-block'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#6096B9] via-[#5088a8] to-[#4b7591]'>
                evento creamos
              </span>
              <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,7 Q50,0 100,7 T200,7" fill="none" stroke="#6096B9" strokeWidth="4" opacity="0.4"/>
              </svg>
            </span>
            {' '}hoy?
          </h1>
        </div>

        <div className="w-full flex items-center justify-center text-[17px] md:text-[19px] lg:text-[21px] text-gray-600 max-w-[750px] text-center leading-relaxed px-4 animate-fade-in font-normal" style={{animationDelay: '0.2s'}}>
          Con EventosOrganizador.com crea tus eventos, comparte, colabora, invita y difunde de manera profesional.
        </div>

        <div className='flex md:flex-row flex-col items-stretch md:items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8 w-full max-w-[500px] md:max-w-none px-2 animate-fade-in' style={{animationDelay: '0.3s'}}>
          <button className="group relative flex items-center justify-center bg-gradient-to-r from-[#6096B9] to-[#4b7591] text-white font-medium text-[16px] md:text-[17px] py-4 md:py-[17px] px-7 md:px-9 gap-2 md:gap-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden w-full md:w-auto button-press ripple-effect">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <a href="https://app.eventosorganizador.com/" className="relative flex items-center justify-center gap-2 md:gap-3 z-10 w-full">
              <span className="whitespace-nowrap">Crea tu primer Evento</span>
              <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0' fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
              </svg>
            </a>
          </button>
          <button className="group flex items-center justify-center bg-white text-[#6096B9] border-2 border-[#6096B9] font-medium text-[16px] md:text-[17px] py-4 md:py-[17px] px-7 md:px-9 gap-2 md:gap-3 rounded-xl hover:bg-[#6096B9] hover:text-white transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl w-full md:w-auto button-press smooth-color">
            <a href="https://meet.brevo.com/eventosorganizador/master-class" className="flex items-center justify-center gap-2 md:gap-3 w-full">
              <span className="whitespace-nowrap">Master Class Gratis</span>
              <svg className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0' fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
              </svg>
            </a>
          </button>
        </div>

      </div>

      <div className="relative z-10 md:w-[100%] h-auto flex items-start justify-start max-w-[1200px]">
        <CaruselPrincipal/>
      </div>


    </div>
  );
};

export default Header;
