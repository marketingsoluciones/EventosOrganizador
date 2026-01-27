import React, { FC } from 'react';
import Card2 from './Card2';

const Testimonies: FC = () => {
  const DataCard = [
    {
      imgColor: "text-blue-600",
      title: "“Desde que utilizo Eventos Organizador, planificar eventos se ha vuelto mucho más sencillo. La interfaz es intuitiva y me permite gestionar todas las tareas en un solo lugar. ¡Mis asistentes están encantados con la experiencia!”",
      tcolor: "text-blue-600",
      nombre: "María López",
      cargo: "Organizadora de eventos corporativos.",
    },
    {
      imgColor: "text-orange-600",
      title: "“Necesitaba una herramienta que me permitiera crear itinerarios personalizados. Eventos Organizador me ha sorprendido con la cantidad de opciones de personalización que ofrece. ¡Cada evento es una nueva aventura!”",
      tcolor: "text-orange-600",
      nombre: "Pedro García",
      cargo: "Wedding Planner",
    },
    {
      imgColor: "text-blue-600",
      title: "“Gracias a Eventos Organizador, he logrado aumentar las ventas de mis eventos en un 30%. La herramienta de venta de entradas me permite llegar a un público más amplio. ¡Definitivamente la recomiendo!”",
      tcolor: "text-blue-600",
      nombre: "Ana Fernández",
      cargo: "Organizadora de festivales musicales.",
    },
  ];

  return (
<div className="w-[100%] flex flex-col bg-white items-center justify-center py-20 md:px-12 px-3 box-border max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center justify-start gap-12">
        <div className="text-center">
          <p className="text-[#6096B9] font-semibold uppercase text-sm tracking-wide mb-3">
            Testimonios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748]">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-6 gap-6">
          {DataCard.map((item, idx) => (
            <div key={idx}>
              <Card2 items={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;