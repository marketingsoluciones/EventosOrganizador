
import { FC } from "react";

interface props {
    componentState: any;
    setComponentState: any;
  
  }

const Resumen1: FC<props> = ({componentState, setComponentState}) => {

  return (

<section className="self-stretch flex md:flex-row rounded-2xl items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-start justify-start md:gap-[65px] gap-[16px]">
  
  <div className="h-auto md:flex-[0.75] flex flex-row items-start justify-start py-0 px-4 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
    <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/63c9d298-8d6d-4017-a238-7e0bbcceec00/public" alt="" />
  </div>

  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
    <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
      <h1 className="m-0 self-stretch relative md:text-[30px] text-xl tracking-[1px] leading-[36px] font-bold font-inherit">
        Crea tu propio evento
      </h1>
      <div className="self-stretch  h-[168px] relative leading-[24px] flex flex-col gap-4 items-center md:text-lg text-sm">
        
          <p className="m-0 font-light">
          Centralización de la gestión de los eventos a través de un panel intuitivo con acceso a la información relevante de la planificación en curso.
          </p>

          <p className="m-0 font-light">
          Posibilidad de coordinación de uno o múltiples eventos con el panel profesional capaz de integrar la tareas y la agenda.
          </p>

      </div>

      <button className="flex items-center justify-center bg-[#6096B9] text-white font-normal md:text-base text-xs py-2 px-4 gap-2 rounded-full hover:bg-[#4b7591] shadow-md ">
      Saber más de crear evento 
      <svg className='w-6 h-6' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"></path>
      </svg>
      </button>

    </div>
  </div>
</div>
</section>

  );
};

export default Resumen1;