import { FC, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
interface propsModalRrPp2 {
    addInfo2:any
    setAddInfo2:any
}

export const ModalRrPp2: FC <propsModalRrPp2> = ({addInfo2,setAddInfo2}) => {
    return (
<ClickAwayListener onClickAway={() => addInfo2 && setAddInfo2(false)}>

<div className="w-auto max-w-full flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-10 leading-[normal] tracking-[normal] text-left text-sm text-steelblue-100">

        <div className="w-full flex flex-row items-center justify-between text-[#6096B9] text-[18px] md:hidden ">
        <div className="flex items-start justify-start uppercase font-bold">
            RRPP
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
              Potencia tu liderazgo teniendo toda la información sobre tu equipo en tu mano
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-3 md:text-[18px] text-[12px] ">
              <div className="relative leading-[28px]">
                  
              EventosOrganizador te permite tener registrado todo tu equipo en una misma aplicación facilitando la asignación de invitaciones en cada evento así como ver el rendimiento de cada uno de ellos.
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
              src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/d2d406d6-0a14-45ca-fc85-104e13ebb600/public"
            />
          </div>
        </div>
      </div>

      <div className="self-stretch bg-[#E6E9ED] flex flex-col items-start justify-start py-5 md:px-[30px] px-3 gap-5 box-border max-w-full">
        
      <div className="flex md:flex-row flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
        Firmas
        </b>
        <b className="self-stretch flex md:text-[24px] text-[18px] md:tracking-[1px] md:leading-[32px] leading-5">
        Registra las horas trabajadas por tus empleados
        </b>
        </div>

        <div className="self-stretch flex flex-col items-start justify-start max-w-full md:text-[16px] text-[12px] gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="relative leading-[24px] font-light text-black gap-4 ">
        <p className=""> 
        Al igual que el sistema QR que utilizamos  para las entradas, listas o reservas lo aplicamos para que 
        el personal de un negocio registre tanto la hora de entrada como la de salida.
        </p>
        <p>
        Mostrando al final de cada evento el número de empleados que trabajaron por evento así cómo el número de horas trabajadas por cada uno.
        </p>
            </div>
        </div>
    </div>
    </div>
    <div className="flex flex-col items-center justify-center gap-4">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
        Ranking
        </b>
        <b className="self-stretch flex md:text-[24px] text-[18px] md:tracking-[1px] md:leading-[32px] leading-5">
        Ranking de usuarios por niveles de facturación
        </b>
        </div>

        <div className="self-stretch flex flex-col items-start justify-start max-w-full md:text-[16px] text-[12px] gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="relative leading-[24px] font-light text-black gap-4 ">
        <p className=""> 
        Conoce qué comerciales o RRPP son los que más facturación te están generando. Analiza el ingreso que te aporta cada uno de ellos
        tanto por evento como bloque de tiempo personalizado. El ranking se actualiza en tiempo real a medida que se realizan las ventas.
        </p>
        <p>
        Mostrando al final de cada evento el número de empleados que trabajaron por evento así cómo el número de horas trabajadas por cada uno.
        </p>
            </div>
        </div>
    </div>
    </div>
    </div>

      <img className="w-auto h-auto flex justify-center items-center" src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/3ab6173d-9a2b-4e6f-847f-4574c894f700/public" alt="" />
    </div>
    

    <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 box-border max-w-full">
        
        <div className="flex-1 flex flex-col items-start justify-start py-6 px-4 box-border max-w-[1024px] gap-4">
          
          <div className="self-stretch flex flex-col gap-4 items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
                Comisiones
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start md:text-[24px] text-[18px] text-black">
                <b className="self-stretch relative md:tracking-[1px] md:leading-[32px] leading-5">
                Calculamos de forma automática todas las liquidaciones y comisiones de venta
                </b>
              </div>
          </div>

          <div className="w-full flex flex-col items-center justify-start box-border max-w-full md:text-base text-[12px] text-black md:gap-8 gap-2">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative leading-[24px] font-light">
                    <p className="m-0">
                    No pierdas más tiempo calculando comisiones o cuadrando cifras a la hora de liquidar entradas. 
                    Configura comisiones fijas o variables por cada tipo de tarifa  que tengas y recibe los 
                    recuentos automáticos al finalizar cada evento.
                    </p>
                    <p className="m-0">
                    Ten tu listado de liquidaciones actualizados en tiempo real  cada vez que se valide una transacción de cualquier venta física y cuadra las recaudaciones.
                    </p>
                  </div>
                </div>
                
                <img
                  className="w-full md:h-[487.5px] h-auto relative md:max-w-[480px] overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/67abba41-d636-4fd3-2f74-cd6a23234900/public"
                />
              
            
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start justify-start py-6 px-4 box-border max-w-[1024px] gap-4">
          
          <div className="self-stretch flex flex-col gap-4 items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
                Complementos a empleados
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start md:text-[24px] text-[18px] text-black">
                <b className="self-stretch relative md:tracking-[1px] md:leading-[32px] leading-5">
                Controla las invitaciones que utilizan tus empleados en cada evento
                </b>
              </div>
          </div>

          <div className="w-full flex flex-col items-center justify-start box-border max-w-full md:text-base text-[12px] text-black md:gap-8 gap-2">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative leading-[24px] font-light">
                    <p className="m-0">
                    Mediante la firma de tus trabajadores no solo llevarás un control del horario, además, podrás añadir un 
                    número específico de invitaciones.  Cada usuario tendrá un número limitado de copas, pulseras u otros complementos
                    evitando excesos de gastos en invitaciones.
                    </p>
                  </div>
                </div>
                
                <img
                  className="w-full md:h-[487.5px] h-auto relative md:max-w-[480px] overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/910854f5-b8ba-47db-a5a1-e8f555bd6f00/public"
                />

          </div>
        </div>

      </div>

</div>

</ClickAwayListener>

    );
  };
  