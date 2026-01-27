import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {

  
  return (
<footer className="w-full bg-gradient-to-r from-[#6096B9] to-[#4b7591] text-white py-16 px-4 md:px-10 flex flex-col items-center mx-auto">
<div className="w-full flex flex-col items-start md:max-w-[1200px] gap-12">
      {/* Primera sección: Logo y descripción */}
      <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-12">

        {/* Logo y descripción */}
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="bg-white rounded-lg px-4 py-2 w-fit">
            <img src="image/logo1.svg" alt="Logo" className="h-10" />
          </div>
          <p className="text-white/90 text-sm leading-relaxed">
            La plataforma todo en uno para organizar eventos sociales y de ticketing con herramientas profesionales.
          </p>
        </div>

        {/* Enlaces */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-base mb-2">Información</h3>
            <a href="/soporte" className="text-white/80 hover:text-white text-sm transition-colors duration-200">Soporte 24/7</a>
            <a href="/politicas" className="text-white/80 hover:text-white text-sm transition-colors duration-200">Política de Privacidad</a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-base mb-2">Servicios</h3>
            <a href="/masterclass" className="text-white/80 hover:text-white text-sm transition-colors duration-200">Master Class</a>
            <a href="/marcablanca" className="text-white/80 hover:text-white text-sm transition-colors duration-200">Marca Blanca</a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-base mb-2">Soluciones</h3>
            <a href="/socials" className="text-white/80 hover:text-white text-sm transition-colors duration-200">Eventos Sociales</a>
            <a href="/tiketing" className="text-white/80 hover:text-white text-sm transition-colors duration-200">Eventos de Ticketing</a>
          </div>
        </div>
      </div>

       {/* Tercera sección: Términos y condiciones, copyright */}
       <section className="self-stretch w-full flex flex-col md:flex-row md:items-center items-center justify-between gap-6 pt-8 border-t border-white/20">
  <div className="flex items-center justify-center md:justify-start text-white/80 text-sm">
    © 2024 EventosOrganizador. Todos los derechos reservados
  </div>
  
  <div className="w-full md:w-auto flex flex-row items-center justify-center md:justify-end gap-4">
      <a href="https://www.facebook.com/profile.php?id=61559662832886" className="opacity-90 hover:opacity-100 transition-opacity duration-200">
        <svg width="32" height="32" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1.82227" width="34" height="34" rx="17" stroke="white" strokeWidth="2"/>
          <path d="M21.7266 19.8223L22.1709 16.9266H19.3925V15.0476C19.3925 14.2554 19.7806 13.4832 21.025 13.4832H22.2881V11.0179C22.2881 11.0179 21.1419 10.8223 20.0459 10.8223C17.7578 10.8223 16.2622 12.2091 16.2622 14.7198V16.9266H13.7188V19.8223H16.2622V26.8223H19.3925V19.8223H21.7266Z" fill="white"/>
        </svg>
      </a>

      <a href="https://www.youtube.com/@EventosOrganizador" className="opacity-90 hover:opacity-100 transition-opacity duration-200">
        <img src="image/yutu.svg" alt="YouTube" className="w-8 h-8" />
      </a>

      <a href="https://www.instagram.com/eventosorganizador" className="opacity-90 hover:opacity-100 transition-opacity duration-200">
        <svg width="32" height="32" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1.82227" width="34" height="34" rx="17" stroke="white" strokeWidth="2"/>
          <path d="M18.0055 15.2286C16.018 15.2286 14.4148 16.8317 14.4148 18.8192C14.4148 20.8067 16.018 22.4099 18.0055 22.4099C19.993 22.4099 21.5961 20.8067 21.5961 18.8192C21.5961 16.8317 19.993 15.2286 18.0055 15.2286ZM18.0055 21.1536C16.7211 21.1536 15.6711 20.1067 15.6711 18.8192C15.6711 17.5317 16.718 16.4849 18.0055 16.4849C19.293 16.4849 20.3398 17.5317 20.3398 18.8192C20.3398 20.1067 19.2898 21.1536 18.0055 21.1536ZM22.5805 15.0817C22.5805 15.5474 22.2055 15.9192 21.743 15.9192C21.2773 15.9192 20.9055 15.5442 20.9055 15.0817C20.9055 14.6192 21.2805 14.2442 21.743 14.2442C22.2055 14.2442 22.5805 14.6192 22.5805 15.0817ZM24.9586 15.9317C24.9055 14.8099 24.6492 13.8161 23.8273 12.9974C23.0086 12.1786 22.0148 11.9224 20.893 11.8661C19.7367 11.8005 16.2711 11.8005 15.1148 11.8661C13.9961 11.9192 13.0023 12.1755 12.1805 12.9942C11.3586 13.813 11.1055 14.8067 11.0492 15.9286C10.9836 17.0849 10.9836 20.5505 11.0492 21.7067C11.1023 22.8286 11.3586 23.8224 12.1805 24.6411C13.0023 25.4599 13.993 25.7161 15.1148 25.7724C16.2711 25.838 19.7367 25.838 20.893 25.7724C22.0148 25.7192 23.0086 25.463 23.8273 24.6411C24.6461 23.8224 24.9023 22.8286 24.9586 21.7067C25.0242 20.5505 25.0242 17.088 24.9586 15.9317ZM23.4648 22.9474C23.2211 23.5599 22.7492 24.0317 22.1336 24.2786C21.2117 24.6442 19.0242 24.5599 18.0055 24.5599C16.9867 24.5599 14.7961 24.6411 13.8773 24.2786C13.2648 24.0349 12.793 23.563 12.5461 22.9474C12.1805 22.0255 12.2648 19.838 12.2648 18.8192C12.2648 17.8005 12.1836 15.6099 12.5461 14.6911C12.7898 14.0786 13.2617 13.6067 13.8773 13.3599C14.7992 12.9942 16.9867 13.0786 18.0055 13.0786C19.0242 13.0786 21.2148 12.9974 22.1336 13.3599C22.7461 13.6036 23.218 14.0755 23.4648 14.6911C23.8305 15.613 23.7461 17.8005 23.7461 18.8192C23.7461 19.838 23.8305 22.0286 23.4648 22.9474Z" fill="white"/>
        </svg>
      </a>

      <a href="https://www.tiktok.com/@eventosorganizador" className="opacity-90 hover:opacity-100 transition-opacity duration-200">
        <svg width="32" height="32" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1.82227" width="34" height="34" rx="17" stroke="white" strokeWidth="2"/>
          <path d="M25.1717 14.5575C24.1788 14.5575 23.2266 14.1919 22.5245 13.5411C21.8225 12.8903 21.4281 12.0076 21.4281 11.0873C21.4281 11.0739 21.4281 11.0605 21.4281 11.0472V10.8223H18.4815V21.735C18.4812 22.2275 18.3143 22.7075 18.0041 23.1075C17.6941 23.5075 17.2564 23.8072 16.7529 23.9645C16.2494 24.1217 15.7054 24.1286 15.1974 23.9842C14.6894 23.8398 14.2431 23.5512 13.9213 23.1593C13.5995 22.7674 13.4184 22.2918 13.4036 21.7994C13.3887 21.3071 13.5408 20.8228 13.8385 20.4148C14.1362 20.0069 14.5644 19.6957 15.0629 19.5251C15.5614 19.3546 16.105 19.3334 16.6172 19.4643V16.6864C16.3927 16.6608 16.1668 16.6479 15.9406 16.6479C12.9107 16.6479 10.4531 18.9254 10.4531 21.735C10.4531 24.5445 12.91 26.8223 15.9406 26.8223C16.1668 26.8223 16.3927 26.8094 16.6172 26.7838C17.9453 26.631 19.1674 26.0335 20.0534 25.1037C20.9395 24.174 21.4284 22.9761 21.4281 21.7355V15.8656C21.9081 16.4292 22.547 16.8587 23.274 17.1065C24.001 17.3544 24.7879 17.4109 25.5475 17.2699V14.5403C25.4241 14.5517 25.2985 14.5575 25.1717 14.5575Z" fill="white"/>
        </svg>
      </a>
  </div>
    </section>
  </div>
    </footer>
  );
};

export default Footer;