import { FC, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
interface propsModalCrm2 {
    addInfo2:any
    setAddInfo2:any
}

export const ModalCrm2: FC <propsModalCrm2> = ({addInfo2,setAddInfo2}) => {
    return (
<ClickAwayListener onClickAway={() => addInfo2 && setAddInfo2(false)}>

<div className="w-auto max-w-full flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-10 leading-[normal] tracking-[normal] text-left text-sm text-steelblue-100">

        <div className="w-full flex flex-row items-center justify-between text-[#6096B9] text-[18px] md:hidden ">
        <div className="flex items-start justify-start uppercase font-bold">
            CRM
        </div>
        <button onClick={() => {setAddInfo2(!addInfo2)}} className="w-8 h-8 flex items-start justify-start text-gray-400">
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
                Impulsa tus ventas creando estrategias de marketing personalizadas para tus clientes.
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-3 md:text-[18px] text-[12px] ">
              <div className="relative leading-[28px]">
                  
                EventosOrganizador recopilar datos sobre tu negocio en tiempo
                real y los plasma en dashboards con informes
                automáticos para que puedas tomar decisiones
                estratégicas con información real sobre tu actividad.
                Habla directamente con tu público sin necesidad de
                depender de plataformas externas y consigue crear
                vínculos con tus clientes.
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
              src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/81e7da50-133d-4a50-8b1b-d167c2a72200/public"
            />
          </div>
        </div>
      </div>

      <div className="self-stretch bg-[#E6E9ED] flex flex-col items-start justify-start py-5 md:px-[30px] px-3 gap-5 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
        Marketing digital para eventos
        </b>
        <b className="self-stretch flex md:text-[24px] text-[18px] md:tracking-[1px] md:leading-[32px] leading-5">
        Visualiza de forma gráfica y sencilla
        los indicadores más importante de tu
        discoteca en tiempo real
        </b>
        </div>

        <div className="self-stretch flex flex-col items-start justify-start max-w-full md:text-[16px] text-[12px] gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="relative leading-[24px] font-light text-black gap-4 ">
        <p className=""> 
        <span className=" text-[#6096B9]">Todos tus datos de venta resumidos en un dashboard</span>, sencillo al
        que podrás acceder desde tu propio móvil. Conoce los niveles de
        facturación total o por productos así cómo: los porcentajes de
        asistencia, número de visitas a tu web…
        </p>
        <p>
        Los <span className=" text-[#6096B9]">datos mostrados se irán actualizados en tiempo real</span>, dándote
        una visión general de tu negocio o evento.
        </p>
        <p className="text-[#6096B9]">
        SEO para locales de ocio
        </p>
        <p>
        Aparece el primero en motores de búsqueda, atrae a más
        personas a tu web y aumenta tus ventas.
        </p>
        <p className="text-[#6096B9]">
        SEM para locales de ocio
        </p>
        <p>
        Haz seguimiento de tus campañas publicitarias y maximiza las
        ventas de tu discoteca.
        </p>
            </div>
        </div>
    </div>
</div>

</div>

</ClickAwayListener>

    );
  };