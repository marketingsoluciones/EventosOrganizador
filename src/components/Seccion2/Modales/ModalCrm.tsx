import { FC, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
interface propsModalCrm {
    addInfo:any
    setAddInfo:any
}

export const ModalCrm: FC <propsModalCrm> = ({addInfo,setAddInfo}) => {
    return (
<ClickAwayListener onClickAway={() => addInfo && setAddInfo(false)}>

<div className="w-auto bg-primary-contrast max-w-full flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-10 leading-[normal] tracking-[normal] text-left text-sm text-steelblue-100">
        <div className="w-full flex flex-row items-center justify-between text-[#6096B9] text-[18px] md:hidden ">
        <div className="flex items-start justify-start uppercase font-bold">
            CRM
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
                Conoce mejor a tus clientes con nuestro CRM para eventos y crea experiencias personalizadas.
                </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-3 md:text-[18px] text-[12px] ">
              <div className="relative leading-[28px]">
                  
              Crea con EventosOrganizador tu propia base de datos con info sobre todos tus clientes y conócelo todo sobre ellos. Proporcionales un valor añadido único cubriendo sus gustos y consigue aumentar la fidelización de tu negocio.
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
              src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/14342d32-81ec-48ce-7b72-74926241dd00/public"
            />
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-col items-start justify-start gap-4 box-border max-w-full">

            
            <div className="flex flex-col items-start justify-start gap-5 max-w-full">

                <b className="relative tracking-[2.7px] leading-[20px] uppercase md:text-sm text-[8px] ">
                CRM para gestión de eventos
                </b>
         
              <div className="flex flex-col items-start justify-start md:text-[24px] text-[18px] leading-[20px] text-black font-bold">
                
                Registra todos los clientes que acudan
                a tu negocio y completa con
                información sus fichas de forma
                automática
                
              </div>
            </div>

            <div className="self-stretch flex flex-col items-center justify-start md:text-base text-[12px] text-black gap-4">
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <div className="self-stretch flex flex-col items-start justify-start text-steelblue-100">
                  <div className="self-stretch relative leading-[24px] font-light">
                    Con las fichas de cliente podrás hacer un seguimiento de
                    cualquier aspecto relacionado con ellos: alergias, gustos,
                    historial de reservas, gasto total… Conocer más a tus clientes te
                    permitirá ofrecer una atención más personalizada.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <div className="self-stretch flex flex-col items-start justify-start leading-[24px] font-medium">
                  
                Todos tus datos 100% privados
                  
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[24px] font-light">
                    Sabemos la importancia que tienen los datos y la ventaja que
                    puede aportar a un negocio. Por ello toda la información que
                    recopiles de tus clientes en tu <b className="text-[#6096B9]">base de datos será
                    exclusivamente tuya y no se compartirá con ningún negocio o
                    entidad pública.</b>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <div className="self-stretch flex flex-col items-start justify-start leading-[24px] font-medium">
                  
                Normativa RGPD
                  
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[24px] font-light">
                    Recopila la información de tus clientes cumpliendo con la
                    normativa de protección de datos. <b className="text-[#6096B9]">Todos los métodos utilizados
                    en EventosOrganizador para captar datos de información cumplen con las
                    premisas de la RGPD.</b> Podrás utilizar todos los emails y teléfonos
                    para realizar cualquier campaña de marketing.
                  </div>
                </div>
              </div>
            </div>


      </div>


    </div>

</ClickAwayListener>

    );
  };
  