import { FC, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
interface propsModalEstadisticas {
    addInfo:any
    setAddInfo:any
}

export const ModalEstadisticas: FC <propsModalEstadisticas> = ({addInfo,setAddInfo}) => {
    return (
<ClickAwayListener onClickAway={() => addInfo && setAddInfo(false)}>

<div className="w-auto bg-primary-contrast max-w-full flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-10 leading-[normal] tracking-[normal] text-left text-sm text-steelblue-100">
        <div className="w-full flex flex-row items-center justify-between text-[#6096B9] text-[18px] md:hidden ">
        <div className="flex items-start justify-start uppercase font-bold">
            Estadisticas
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
              Recopila datos y recibe informes automáticos al finalizar cada evento
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-3 md:text-[18px] text-[12px] ">
              <div className="relative leading-[28px]">
                  
                    EventosOrganizador te facilita la recopilación de datos sobre tu negocio y eventos. Te mostramos datos en tiempo real sobre tus indicadores más importantes y los plasmamos en informes generados automáticamente
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
              src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/963c7ea8-8e7f-4c8a-3e66-83199886ec00/public"
            />
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-col items-start justify-start gap-4 box-border max-w-full">

            <div className="flex md:flex-row flex-col items-center justify-center">
            <div className="flex flex-col items-start justify-start gap-5 max-w-full">

                <b className="relative tracking-[2.7px] leading-[20px] uppercase md:text-sm text-[8px] ">
                Informes personalizados por evento
                </b>
         
              <div className="flex flex-col items-start justify-start md:text-[24px] text-[18px] leading-[20px] text-black font-bold">
                
              Contrata sólo al personal necesario
                
              </div>
              <div className="self-stretch flex flex-col items-center justify-start md:text-base text-[12px] text-black gap-4">
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <div className="self-stretch flex flex-col items-start justify-start text-steelblue-100">
                  <div className="self-stretch relative leading-[24px] font-light">
                Nuestro algoritmo te mostrará una previsión de asistencia a tu evento basándose en: los ritmos de ventas de entradas, creación de listas de invitados y peticiones de reservados. Pudiendo así invertir únicamente en el personal necesario y ahorra sobre coste.
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-5 max-w-full">

                <b className="relative tracking-[2.7px] leading-[20px] uppercase md:text-sm text-[8px] ">
                Control de aforo
                </b>
         
              <div className="flex flex-col items-start justify-start md:text-[24px] text-[18px] leading-[20px] text-black font-bold">
                
            El aforo de tu evento en tiempo real
                
              </div>
              <div className="self-stretch flex flex-col items-center justify-start md:text-base text-[12px] text-black gap-4">
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <div className="self-stretch flex flex-col items-start justify-start text-steelblue-100">
                  <div className="self-stretch relative leading-[24px] font-light">
                    La función de recepción te permitirá saber el todo momento el número total de personas dentro de tu evento. Permitiéndote saber a golpe de vista el porcentaje de aforo que tienes cubierto.
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>


      </div>

      <div className="self-stretch bg-[#E6E9ED] flex flex-col items-start justify-start py-5 md:px-[30px] px-3 gap-5 box-border max-w-full">


      <img className="w-auto h-auto flex justify-center items-center" src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/ffb29093-3b8f-43ad-d007-7055f5e2f500/public" alt="" />
    </div>

    <div className="self-stretch flex flex-col items-start justify-start gap-4 box-border max-w-full">

<div className="flex flex-col items-center justify-center gap-4">

    <b className="self-stretch flex tracking-[2.7px] leading-[20px] uppercase md:text-base text-[12px] ">
    La App de análisis de datos más completa para tu discoteca.
    </b>
            <div className="flex flex-col items-center justify-center">
            
            <div className="flex md:flex-row flex-col items-center justify-between gap-4">
            
            <div className="self-stretch flex flex-col items-start justify-center text-black">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[9px] gap-1">
                <div className="self-stretch flex flex-col items-start justify-start shrink-0">
                  <div className="self-stretch relative leading-[24px] font-medium ">
                  Informes de cliente
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-9 shrink-0">
                  <div className="relative leading-[24px] font-light">
                  Conoce en profundidad el tipo de público que acude a tu negocio y 
                  crea experiencias que satisfagan todas sus necesidades.
                  Con los informes de cliente 
                  podrás saber: rangos de edad, porcentaje de género, localidad de residencia
                  y la calidad de todos los clientes que accedan a tu negocio. 
                  Podrás segmentarlos según el producto que hayan comprado
                  : listas, entradas, reservas, pases VIP.
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch flex flex-col items-start justify-center text-black">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[9px] gap-1">
                <div className="self-stretch flex flex-col items-start justify-start shrink-0">
                  <div className="self-stretch relative leading-[24px] font-medium">
                  Informe de tarifas
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-9 shrink-0">
                  <div className="relative leading-[24px] font-light">
                  Desglosa todas las tarifas ofrecidas en un evento y descubre la cantidad de pagos que se realizaron por precio. Podrás saber número general al igual que información sobre los clientes ya que el informe te mostrará: las 
                  cantidades vendidas por canales offline u online, el número total de personas que compraron esta tarifa, el número total de productos vendidos por tarifa así como el porcentaje de género, edad y calidad.

                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="flex md:flex-row flex-col items-center justify-between gap-4">
            <div className="self-stretch flex flex-col items-start justify-center text-black">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[9px] gap-1">
                <div className="self-stretch flex flex-col items-start justify-start shrink-0">
                  <div className="self-stretch relative leading-[24px] font-medium">
                    Informe de entradas
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-9 shrink-0">
                  <div className="relative leading-[24px] font-light">
                  Infórmate sobre qué horas y días han sido los mejores en cuanto a número de ventas de entradas.
                  Este informe te mostrará el número general de entradas vendidas por tarifa en el que incluye gráficos con el total vendido por horas, días y mes. Pudiendo diferenciar entre ventas realizadas por tu equipo de RRPP o a través de enlaces a páginas web.

                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center text-black">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[9px] gap-1">
                <div className="self-stretch flex flex-col items-start justify-start shrink-0">
                  <div className="self-stretch relative leading-[24px] font-medium">
                  Recuento por canales
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-9 shrink-0">
                  <div className="relative leading-[24px] font-light">
                  Conoce el total recaudado por cada comercial o RRPP.
                  Tendrás a tu alcance una lista con todo tu equipo comercial en la que asignan el número total de ventas realizada por cada uno. No solo podrás saber la facturación total que han logrado, tendrás la información sobre: 
                  número total de personas apuntadas, número de personas que entraron al evento por él y el número de entradas vendidas desglosado por tarifa.
                  Toda esta información la podrás filtrar en una vista general o por listas, entradas, reservas...
                  </div>
                </div>
              </div>
            </div>
            </div>

            </div>


</div>


</div>
    </div>

</ClickAwayListener>

    );
};
