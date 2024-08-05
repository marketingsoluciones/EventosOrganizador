import { FC, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
interface propsModalReservas {
    addInfo:any
    setAddInfo:any
}

export const ModalReservas: FC <propsModalReservas> = ({addInfo,setAddInfo}) => {
    return (
<ClickAwayListener onClickAway={() => addInfo && setAddInfo(false)}>

<div className="w-auto max-w-full flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-10 leading-[normal] tracking-[normal] text-left text-sm text-steelblue-100">
        <div className="w-full flex flex-row items-center justify-between text-[#6096B9] text-[18px] md:hidden ">
        <div className="flex items-start justify-start uppercase font-bold">
            Reservas
        </div>
        <button onClick={() => {setAddInfo(!addInfo)}} className="w-8 h-8 flex items-start justify-start text-gray-400">
        <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
</svg>
        </button>
        </div>
      
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-2 box-border max-w-full text-black ">
        <div className="flex flex-col items-center justify-start box-border max-w-full shrink-0">
          <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <b className="self-stretch relative md:tracking-[1px] md:leading-[48px] leading-6 md:text-[28px] text-[18px] ">
              App para gestión
              de reservados VIP
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-3 md:text-[18px] text-[12px] ">
              <div className="relative leading-[28px]">
                    EventosOrganizador te permite tener, en una sola aplicación,
                    todo lo que necesitas para ofrecer un servicio
                    excepcional a todos tus clientes. Gestiona todas tus
                    reservas con total flexibilidad en tiempo real.
                    Conseguimos hacerte la vida más sencilla optimizando
                    y digitalizando tus procesos de gestión.
              </div>
            </div>
            <div className="self-stretch flex md:flex-row flex-col items-center justify-start [row-gap:20px] text-center text-[12px] text-steelblue-100 ">
            <button className="flex items-center justify-center bg-[#6096B9] text-white font-normal md:text-[16px] text-[12px] py-2 px-4 gap-2 rounded-full hover:bg-[#4b7591] shadow-md ">
      Empieza Ahora
      <svg className='w-6 h-6' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"></path>
      </svg>
      </button>
              <button className="flex flex-row items-center justify-center py-2 px-5 text-[12px] text-[#6096B9] ">

                  Solicita tu demo 
                
              </button>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start box-border max-w-full text-[8px] text-black">
              <div className="relative leading-[8px] font-light inline-block max-w-full">
                Acceso completo sin necesidad de registrar tarjeta de crédito
              </div>
            </div>
          </div>

          <div className="self-stretch flex flex-col items-center justify-start py-0 px-4">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/014950b5-fe50-4c20-327b-6c0998983300/public"
            />
          </div>
        </div>
      </div>


      <div className="self-stretch bg-[#E6E9ED] flex flex-col items-start justify-start py-5 md:px-[30px] px-3 gap-5 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
        Mapa interactivo de reservas
        </b>
        <b className="self-stretch flex md:text-[24px] text-[18px] md:tracking-[1px] md:leading-[32px] leading-5">
        Gestiona con total flexibilidad tus
        reservas y ofrece una atención
        excepcional
        </b>
        </div>


        <div className="self-stretch flex flex-col items-start justify-start max-w-full md:text-[16px] text-[12px] gap-[20px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="relative leading-[24px] font-light text-[#6096B9] gap-4 ">
        <p className="">
        te permitimos gestionar de manera más sencilla
        y eficaz los reservados de tu local.
        ¡Tus clientes podrán elegir su ubicación favorita!
        </p>

        <p className=""> 
        Modifica precios de forma sencilla, asigna reservas a espacios y
        recepcionalas en dos clicks. Conoce los consumos de tus
        clientes en tiempo real, analiza sus gustos y mucho más.
        </p>
            </div>
          </div>
      </div>

      <img className="w-auto h-auto flex justify-center items-center" src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/6f043327-f299-4346-b3ec-77fa12937d00/public" alt="" />
    </div>

    <div className="self-stretch flex flex-row items-start justify-start box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start py-6 box-border max-w-[1024px] gap-4">
          
          <div className="self-stretch flex flex-col gap-4 items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase text-sm text-[8px] ">
                Toma decisiones basadas en datos reales
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start md:text-[24px] text-[18px] text-black">
                <b className="self-stretch relative md:tracking-[1px] md:leading-[32px] leading-5">
                Conócelo todo sobre tus clientes y controla cómo está yendo el turno en tu local
                </b>
              </div>
          </div>

          <div className="w-full flex flex-col items-center justify-start box-border max-w-full md:text-base text-[12px] text-black md:gap-8 gap-2">
            <div className="self-stretch flex flex-col items-start justify-center py-8 px-0 shrink-0">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[9px] gap-1">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[24px] font-medium">
                    CRM
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative leading-[24px] font-light">
                    <p className="m-0">
                    Reduce las cancelaciones de última hora y no te quedes
                    con mesas vacías. Gestiona los ‘no-show’ y comunícate
                    con aquellos clientes que estén en lista de espera para
                    que ocupen su lugar.
                    </p>
                  </div>
                </div>
                
                <img
                  className="w-full md:h-[487.5px] h-auto relative md:max-w-[480px] overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/c4a99cc2-84c5-4916-b93a-2175284b0300/public"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center py-8 px-0 shrink-0">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[9px] gap-1">
                <div className="self-stretch flex flex-col items-start justify-start shrink-0">
                  <div className="self-stretch relative leading-[24px] font-medium">
                  Datos en tiempo real
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-9 shrink-0">
                  <div className="relative leading-[24px] font-light">
                    Incrementa la rentabilidad de tus espacios aumentando su
                    rotación y no dejes libre ninguna mesa sin facturar.
                    Consíguelo de forma automática con la asignación
                    recomendada de nuestro algoritmo.
                  </div>
                </div>
                <img
                  className="w-full md:h-[448.5px] h-auto relative max-w-[480px] overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/128765ae-cd5a-4419-3b13-db77d6eac600/public"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</ClickAwayListener>

    );
  };