
import React from 'react';

interface CardProps {
  item: {
    title: string;
    imgUrl: string;
    color: string; // Prop para recibir la clase CSS del color
    ubication: string;
};
}

const Card1: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="w-[340px] h-[420px] relative flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] cursor-pointer group">

      {/* Contenedor de imagen - PROTAGONISTA 85% del espacio */}
      <div className="relative w-full h-[85%] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 overflow-hidden">
        <img
          className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105 filter drop-shadow-xl"
          src={item.imgUrl}
          alt={item.title}
          style={{
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />

        {/* Efecto de brillo sutil en hover */}
        <div className="absolute -inset-full h-full w-1/2 z-10 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></div>
      </div>

      {/* Barra de título con gradiente - 15% del espacio */}
      <div className={`w-full h-[15%] relative flex items-center justify-center ${item.color} px-4`}>
        {/* Overlay para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Título compacto */}
        <h3 className="text-lg font-extrabold text-center text-white z-10 relative drop-shadow-lg tracking-wide group-hover:scale-105 transition-transform duration-300">
          {item.title}
        </h3>

        {/* Borde superior brillante */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </div>

      {/* Borde exterior sutil */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-2 group-hover:ring-black/10 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default Card1;