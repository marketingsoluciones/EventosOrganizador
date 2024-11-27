import React, { FC } from 'react';
import { CaruselPrincipal } from './Carusel';


const Header: FC = () => {


  return (
    <div className="w-full h-auto flex flex-col items-center justify-center pb-10 bg-white  md:max-w-[1200px] ">
        {/* bg-gradient-to-r from-[#6096B9] to-[#507c99] */}
      <div className="flex flex-col items-center justify-center py-20">
        
        <div className="md:text-4xl flex items-center justify-center text-[26px] font-bold text-black">
          <h1>¿Que <span className='text-transparent bg-clip-text bg-[#6096B9]'>evento creamos</span> hoy?</h1>
          </div>
        
        <div className="w-[100%] flex items-center justify-center md:px-0 px-4 md:text-lg text-xs text-gray-600">
        Con EventosOrganizador.com crea tu eventos, comparte, colabora, invita, difude.
        </div>
        
        <div className='flex md:flex-row flex-col items-center justify-center gap-4 '>
      <button className="mt-10 flex items-center justify-center bg-yellow-500 text-white font-bold md:text-base text-xs py-2 px-4 gap-2 rounded-full hover:bg-yellow-400 shadow-md ">
        <a href="https://app.eventosorganizador.com/">
        Crea tu primer Evento 
        </a>
      <svg className='w-6 h-6' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"></path>
</svg>
      </button>
      <button className="md:mt-10 flex items-center justify-center bg-[#6096B9] text-white font-bold md:text-base text-xs py-2 px-4 gap-2 rounded-full hover:bg-[#4b7591] shadow-md ">
        <a href=" https://meet.brevo.com/eventosorganizador/master-class
        ">
          Recibe una Master Class Gratis
        </a>
        <svg className='w-6 h-6' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"></path>
</svg>
        </button>
      </div>

      </div>

      <div className="md:w-[100%] h-auto flex items-start justify-start">
        <CaruselPrincipal/>
      </div>

      
    </div>
  );
};

export default Header;
