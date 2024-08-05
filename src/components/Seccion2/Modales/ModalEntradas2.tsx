import { FC, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
interface propsModalEntradas2 {
    addInfo2:any
    setAddInfo2:any
}

export const ModalEntradas2: FC <propsModalEntradas2> = ({addInfo2,setAddInfo2}) => {
    return (
<ClickAwayListener onClickAway={() => addInfo2 && setAddInfo2(false)}>

<div className="w-auto max-w-full flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-10 leading-[normal] tracking-[normal] text-left text-sm text-steelblue-100">

        <div className="w-full flex flex-row items-center justify-between text-[#6096B9] text-[18px] md:hidden ">
        <div className="flex items-start justify-start uppercase font-bold">
            Reservas
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
              App de Check In y control de acceso para eventos
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-3 md:text-[18px] text-[12px] ">
              <div className="relative leading-[28px]">
                  
              EventosOrganizador te crea un listado general donde podrás recepcionar cualquier lista, entrada o reserva de cualquiera  de tus eventos. Agiliza los tiempos de espera en colas y ofrece a tu público una experiencia única desde el primer momento.
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
              src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/b44b1538-901d-43ce-ee35-ffbefb1a8200/public"
            />
          </div>
        </div>
      </div>

      <div className="self-stretch bg-[#E6E9ED] flex flex-col items-start justify-start py-5 md:px-[30px] px-3 gap-5 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
        Control de acceso para eventos
        </b>
        <b className="self-stretch flex md:text-[24px] text-[18px] md:tracking-[1px] md:leading-[32px] leading-5">
        Registra todos los asistentes con el
        check in de nuestra app
        </b>
        </div>

        <div className="self-stretch flex flex-col items-start justify-start max-w-full md:text-[16px] text-[12px] gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="relative leading-[24px] font-light text-[#6096B9] gap-4 ">
        <p className=""> 
        Agiliza las vías de acceso a tu negocio y evita aglomeraciones en
        puntos de entrada y salida del evento.
        </p>
            </div>
        </div>
      </div>

      <img className="md:w-auto md:h-auto w-auto h-auto flex justify-center items-center" src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/081c954f-5906-40b6-3393-3e3bb32fcd00/public" alt="" />
    </div>

    <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 box-border max-w-full">
        
        <div className="flex-1 flex flex-col items-start justify-start py-6 px-4 box-border max-w-[1024px] gap-4">
          
          <div className="self-stretch flex flex-col gap-4 items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
                Control de acceso y pases VIP
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start md:text-[24px] text-[18px] text-black">
                <b className="self-stretch relative md:tracking-[1px] md:leading-[32px] leading-5">
                Trata a tus mejores clientes con la importancia que se merecen
                </b>
              </div>
          </div>

          <div className="w-full flex flex-col items-center justify-start box-border max-w-full md:text-base text-[12px] text-black md:gap-8 gap-2">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative leading-[24px] font-light">
                    <p className="m-0">
                    Recepciona tus cliente VIP a través de su pase para toda la
                    temporada con condiciones especiales. Podrán guardarlo en el
                    wallet de sus móviles y llevarlo siempre encima.
                    </p>
                    <p className="m-0">
                    Configura los pases con condiciones específicas: número de
                    acompañantes, fechas válidas, precios específicos, horas
                    límite o cualquier información adicional.
                    </p>
                  </div>
                </div>
                
                <img
                  className="w-full md:h-[487.5px] h-auto relative md:max-w-[480px] overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/edf186a7-2997-4302-2c01-37e2627fcd00/public"
                />
              
            
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start justify-start py-6 px-4 box-border max-w-[1024px] gap-4">
          
          <div className="self-stretch flex flex-col gap-4 items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
                Falsificación de entradas
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start md:text-[24px] text-[18px] text-black">
                <b className="self-stretch relative md:tracking-[1px] md:leading-[32px] leading-5">
                Despreocupate de los problemas con
                las falsificaciones y asegurate que
                todo el mundo que entre a tus eventos
                haya pagado
                </b>
              </div>
          </div>

          <div className="w-full flex flex-col items-center justify-start box-border max-w-full md:text-base text-[12px] text-black md:gap-8 gap-2">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative leading-[24px] font-light">
                    <p className="m-0">
                    Nuestros proceso de verificación mediante códigos QR únicos
                    hace que sea imposible replicar una entrada o entrar dos
                    veces con la misma.
                    </p>
                  </div>
                </div>
                
                <img
                  className="w-full md:h-[487.5px] h-auto relative md:max-w-[480px] overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/57a8d281-c96f-4e2e-2d4f-e9a6faab7000/public"
                />

                    <div className="Flex items-center justify-center md:text-[18px] text-[12px] font-bold ">
                    Hazte con la mejor aplicación móvil de gestión de
                    eventos y controla los accesos con códigos QR gratis
                    </div>
          </div>
        </div>

      </div>

</div>

</ClickAwayListener>

    );
  };
  