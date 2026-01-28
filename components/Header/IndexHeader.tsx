import React, { FC, useState, useEffect } from 'react';
import { CaruselPrincipal } from './Carusel';

const rotatingTexts = [
  { highlight: 'evento creamos', question: '¿Qué', suffix: 'hoy?' },
  { highlight: 'boda organizamos', question: '¿Qué', suffix: 'hoy?' },
  { highlight: 'festival lanzamos', question: '¿Qué', suffix: 'hoy?' },
  { highlight: 'conferencia hacemos', question: '¿Qué', suffix: 'hoy?' },
  { highlight: 'experiencia creamos', question: '¿Qué', suffix: 'hoy?' },
];

const Header: FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
        setIsAnimating(false);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const text = rotatingTexts[currentText];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center pb-10 bg-gradient-to-b from-gray-50 via-white to-white relative overflow-hidden">
      {/* Background patterns - responsive */}
      <div className="absolute inset-0 pattern-dots opacity-40 md:opacity-60" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />

      <div className="relative z-10 flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 space-y-5 sm:space-y-6 md:space-y-8 px-4 w-full max-w-[1200px] mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 bg-[#6096B9]/10 rounded-full border border-[#6096B9]/20 animate-fade-in backdrop-blur-sm">
          <svg className="w-4 h-4 text-[#6096B9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span className="text-xs sm:text-sm md:text-[15px] font-semibold text-[#6096B9]">Plataforma líder en gestión de eventos</span>
        </div>

        {/* Rotating title */}
        <div className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px] flex items-center justify-center font-bold text-gray-900 animate-fade-in tracking-normal" style={{animationDelay: '0.1s'}}>
          <h1 className="leading-[1.15] text-center px-2">
            {text.question}{' '}
            <span className="relative inline-block">
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r from-[#6096B9] via-[#5088a8] to-[#4b7591] transition-all duration-400 inline-block ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
              >
                {text.highlight}
              </span>
              <svg className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 left-0 w-full h-2 sm:h-3 md:h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,7 Q50,0 100,7 T200,7" fill="none" stroke="#6096B9" strokeWidth="4" opacity="0.4"/>
              </svg>
            </span>
            {' '}{text.suffix}
          </h1>
        </div>

        {/* Subtitle */}
        <div className="w-full flex items-center justify-center text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] text-gray-600 max-w-[750px] text-center leading-relaxed px-4 animate-fade-in font-normal" style={{animationDelay: '0.2s'}}>
          Con EventosOrganizador.com crea tus eventos, comparte, colabora, invita y difunde de manera profesional.
        </div>

        {/* CTAs */}
        <div className="flex md:flex-row flex-col items-stretch md:items-center justify-center gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8 w-full max-w-[650px] md:max-w-none px-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <button className="group relative flex items-center justify-center bg-gradient-to-r from-[#6096B9] to-[#4b7591] text-white font-medium text-[15px] sm:text-[16px] md:text-[17px] py-3.5 sm:py-4 md:py-[17px] px-6 sm:px-7 md:px-9 gap-2 md:gap-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden w-full md:w-auto button-press ripple-effect">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <a href="https://app.eventosorganizador.com/" className="relative flex items-center justify-center gap-2 md:gap-3 z-10 w-full">
              <span className="whitespace-nowrap">Crea tu primer Evento</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </button>
          <button className="group flex items-center justify-center bg-green-600 text-white font-medium text-[15px] sm:text-[16px] md:text-[17px] py-3.5 sm:py-4 md:py-[17px] px-6 sm:px-7 md:px-9 gap-2 md:gap-3 rounded-xl hover:bg-green-700 transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl w-full md:w-auto button-press">
            <a href="/agendar-reunion" className="flex items-center justify-center gap-2 md:gap-3 w-full">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span className="whitespace-nowrap">Agendar Reunión</span>
            </a>
          </button>
          <button className="group flex items-center justify-center bg-white text-[#6096B9] border-2 border-[#6096B9] font-medium text-[15px] sm:text-[16px] md:text-[17px] py-3.5 sm:py-4 md:py-[17px] px-6 sm:px-7 md:px-9 gap-2 md:gap-3 rounded-xl hover:bg-[#6096B9] hover:text-white transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl w-full md:w-auto button-press smooth-color">
            <a href="https://meet.brevo.com/eventosorganizador/master-class" className="flex items-center justify-center gap-2 md:gap-3 w-full">
              <span className="whitespace-nowrap">Master Class Gratis</span>
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </a>
          </button>
        </div>

        {/* Text indicators */}
        <div className="flex gap-1.5 mt-2">
          {rotatingTexts.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${i === currentText ? 'w-6 bg-[#6096B9]' : 'w-1.5 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full h-auto flex items-start justify-center max-w-[1200px] mx-auto">
        <CaruselPrincipal />
      </div>
    </div>
  );
};

export default Header;
