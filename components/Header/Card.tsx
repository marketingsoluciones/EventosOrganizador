
import React, { useState } from 'react';

interface CardProps {
  item: {
    title: string;
    imgUrl: string;
    color: string;
    ubication: string;
    isIntro?: boolean;
};
}

const Card1: React.FC<CardProps> = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (item.isIntro) {
    return (
      <div className="w-[340px] h-[420px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#6096B9] via-[#4b7591] to-[#6096B9] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />
        <span className="text-white/70 text-sm font-medium mb-4">EventosOrganizador</span>
        <h3 className="text-3xl md:text-4xl font-bold text-white text-center px-8 leading-tight drop-shadow-lg">
          ¿Qué eventos<br />creamos hoy?
        </h3>
        <div className="mt-6 w-12 h-1 bg-white/40 rounded-full" />
      </div>
    );
  }

  return (
    <div className="w-[340px] h-[420px] relative flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_35px_90px_rgba(96,150,185,0.25)] cursor-pointer group">

      {/* Contenedor de imagen - PROTAGONISTA 85% del espacio */}
      <div className="relative w-full h-[85%] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 overflow-hidden">

        {/* Blur placeholder con animación de pulso mientras carga */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-gray-200/80 via-gray-100/60 to-gray-200/80 animate-pulse"></div>
            <div className="absolute w-16 h-16 border-4 border-[#6096B9]/30 border-t-[#6096B9] rounded-full animate-spin"></div>
          </div>
        )}

        <img
          className={`w-full h-full object-contain transition-all duration-700 group-hover:scale-110 filter drop-shadow-2xl ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={item.imgUrl}
          alt={item.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          style={{
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />

        {/* Overlay oscuro sutil en hover para mayor contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Efecto de brillo mejorado en hover */}
        <div className="absolute -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></div>

        {/* Efecto de partículas/brillo en las esquinas */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6096B9]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#6096B9]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>

      {/* Barra de título con gradiente - 15% del espacio */}
      <div className={`w-full h-[15%] relative flex items-center justify-center ${item.color} px-4 overflow-hidden`}>
        {/* Overlay para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Efecto de onda animado en hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

        {/* Título compacto */}
        <h3 className="text-lg font-extrabold text-center text-white z-10 relative drop-shadow-lg tracking-wide group-hover:scale-110 transition-transform duration-300">
          {item.title}
        </h3>

        {/* Borde superior brillante con animación */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:via-white/80 transition-all duration-300"></div>
      </div>

      {/* Borde exterior mejorado con glow effect */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-2 group-hover:ring-[#6096B9]/30 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default Card1;