import { FC, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
interface propsModalRegalos {
    addInfo:any
    setAddInfo:any
}

export const ModalRegalos: FC <propsModalRegalos> = ({addInfo,setAddInfo}) => {
    return (
<ClickAwayListener onClickAway={() => addInfo && setAddInfo(false)}>
    
<div className="w-auto bg-primary-contrast max-w-full flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-10 leading-[normal] tracking-[normal] text-left text-sm text-steelblue-100">
        <div className="w-full flex flex-row items-center justify-between text-[#6096B9] text-[18px] md:hidden ">
        <div className="flex items-start justify-start uppercase font-bold">
            Lista de Regalos
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
              <b className="self-stretch relative md:tracking-[1px] md:leading-[48px] leading-6 md:text-[28px] text-[18px] text-[#6096B9] ">
                Lista de regalos 
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-3 md:text-[18px] text-[12px] ">
              <div className="relative leading-[28px]">
                  
            <p>No más estrés por no saber que regalar, ´por incomodar a los anfitriones con regalos no deseados o situaciones incomodas por regalos repetidos.
            </p>
            <p>El vínculo entre la lista de regalos con enlace de compra en Amazon y la lista de invitados garantiza el dar y recibir el mejor regalo para la ocasión.
            </p>
              </div>
            </div>
            <div className="self-stretch flex md:flex-row flex-col items-center justify-start [row-gap:20px] text-center text-[12px] text-steelblue-100 ">
            <button className="flex items-center justify-center bg-[#6096B9] text-white font-normal md:text-[16px] text-[12px] py-2 px-4 gap-2 rounded-full hover:bg-[#4b7591] shadow-md ">
      Empieza Ahora
      <svg className='w-6 h-6' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"></path>
      </svg>
      </button>
              <button className="flex flex-row items-center justify-center py-2 px-5 text-[16px] text-[#6096B9] ">

                <span>Solicita tu demo </span>
                <svg className="w-5 h-5" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
</svg>
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
              src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/602a1cc2-e4b4-4506-ae47-df909408f300/public"
            />
          </div>
        </div>
        </div>

        <div className="self-stretch flex flex-col items-start justify-center gap-4 box-border max-w-full">

            
            <div className="flex flex-col items-start justify-start gap-5 max-w-full">

                <b className="relative tracking-[2.7px] leading-[20px] uppercase md:text-sm text-[8px] ">
                ¿Que quiero que me regalen? 
                </b>
         
              <div className="flex flex-col items-start justify-start md:text-[24px] text-[18px] leading-[20px] text-black font-bold">
                
                Lista de regalos para compartir
                
              </div>
            </div>

            <div className="self-stretch flex flex-col items-center justify-start md:text-base text-[12px] text-black gap-4">
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative md:leading-[24px] leading-4 font-medium">
                    Enlaza tu lista de regalos de Amazon a la invitación de tu evento 
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-steelblue-100">
                  <div className="self-stretch relative leading-[24px] font-light">
                    Y comparte con amigos y familiares los regalos que te gustarian recibir.  
                  </div>
                </div>
              </div>
            </div>
        </div>


    </div>

</ClickAwayListener>

    );
};
