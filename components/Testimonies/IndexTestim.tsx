import React, { FC } from 'react';
import Card2 from './Card2';


    

const Testimonies: FC = () => {
  const DataCard = 
  [
    {
      imgColor:"text-blue-600",
      title:"“Desde que utilizo Eventos Organizador, planificar eventos se ha vuelto mucho más sencillo. La interfaz es intuitiva y me permite gestionar todas las tareas en un solo lugar. ¡Mis asistentes están encantados con la experiencia!”",
      tcolor:"text-blue-600",
      nombre:"María López",
      cargo:"Organizadora de eventos corporativos.",
    },
    {
      imgColor:"text-orange-600",
      title:"“Necesitaba una herramienta que me permitiera crear itinerarios personalizados. Eventos Organizador me ha sorprendido con la cantidad de opciones de personalización que ofrece. ¡Cada evento es una nueva aventura!”",
      tcolor:"text-orange-600",
      nombre:"Pedro García",
      cargo:"Wedding Planner",
    },
    {
      imgColor:"text-blue-600",
      title:"“Gracias a Eventos Organizador, he logrado aumentar las ventas de mis eventos en un 30%. La herramienta de venta de entradas me permite llegar a un público más amplio. ¡Definitivamente la recomiendo!”",
      tcolor:"text-blue-600",
      nombre:"Ana Fernández",
      cargo:"Organizadora de festivales musicales.",
    },
  ]


  return (
    <div className="w-[100%] flex flex-row bg-[#F7F9FA] items-center justify-center py-20  md:px-12 px-3 box-border ">

    <div className='flex flex-col items-center justify-start gap-12'>
        <div className='flex items-start justify-start text-[#444444] text-2xl font-semibold'>
        Descubre por qué nos eligen
        </div>
        <div className='w-auto absolute left-14 right-0 top-[2510px] bottom-0 text-[#E2E3E4] md:block hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-40">
        <path strokeLinecap="round" strokeLinejoin="round" d="M0.522727 17V12.0909C0.522727 10.697 0.795455 9.27273 1.34091 7.81818C1.88636 6.36364 2.60606 4.99242 3.5 3.70454C4.39394 2.41666 5.36364 1.34091 6.40909 0.477272L10.6818 3C9.83333 4.33333 9.13636 5.72727 8.59091 7.18182C8.06061 8.63636 7.79545 10.2576 7.79545 12.0455V17H0.522727ZM12 17V12.0909C12 10.697 12.2727 9.27273 12.8182 7.81818C13.3636 6.36364 14.0833 4.99242 14.9773 3.70454C15.8712 2.41666 16.8409 1.34091 17.8864 0.477272L22.1591 3C21.3106 4.33333 20.6136 5.72727 20.0682 7.18182C19.5379 8.63636 19.2727 10.2576 19.2727 12.0455V17H12Z" />
        </svg>
        </div>
      <div className='flex md:flex-row flex-col items-start justify-start md:gap-12 gap-6 z-50'>
      {
              DataCard.map((item, idx) => 
                  <div key={idx}>
                <Card2 items={item}/>
                  </div>

                )
              }
      </div>
    </div>
    </div>

  );
};

export default Testimonies;
