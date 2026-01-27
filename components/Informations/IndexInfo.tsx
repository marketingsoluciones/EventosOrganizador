import React, { FC } from 'react';
import CardInfo from './Card2';


    

const Informations: FC = () => {
  const DataCard = 
  [
    {
      title:"El futuro de los eventos es adaptable.",
      content:"Desde elegantes bodas hasta conferencias empresariales, adapta cada detalle de tu evento a tu estilo y marca personal.",
    },
    {
      title:"Vende entradas en minutos",
      content:"Vende entradas online sin necesidad de tener página web. Configura y clasifica para vender en cualquier canal.",
    },
    {
      title:"Gestiona a tus invitados",
      content:"Envía invitaciones personalizadas, recopila RSVPs, crea listas de invitados y gestiona los asientos.",
    },
  ]


  return (
    <div className="w-[100%] flex flex-row bg-gray-50 items-center justify-center py-20 md:px-12 px-3 box-border max-w-[1200px] mx-auto">

    <div className='flex flex-col items-center justify-start gap-12'>
        <div className='flex flex-col items-center justify-center gap-3'>
        <div className='flex items-start justify-start text-[#6096B9] text-sm font-semibold uppercase tracking-wide'>
        Tu plataforma todo en uno para eventos
        </div>

        <div className='flex items-start justify-start text-[#2d3748] text-3xl md:text-4xl font-bold text-center'>
        Descubre por qué nos eligen
        </div>

        </div>

      <div className='flex md:flex-row flex-col items-center justify-center md:gap-6 gap-6'>
      {
              DataCard.map((item, idx) =>
                  <div key={idx}>
                <CardInfo items={item}/>
                  </div>

                )
              }
      </div>
    </div>
    </div>

  );
};

export default Informations;
