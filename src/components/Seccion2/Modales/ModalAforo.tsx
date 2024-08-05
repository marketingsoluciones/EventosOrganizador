import { FC, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
interface propsModalAforo {
    addInfo:any
    setAddInfo:any
}

export const ModalAforo: FC <propsModalAforo> = ({addInfo,setAddInfo}) => {
    return (
<ClickAwayListener onClickAway={() => addInfo && setAddInfo(false)}>

<div className="w-auto bg-primary-contrast max-w-full flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-10 leading-[normal] tracking-[normal] text-left text-sm text-steelblue-100">
        <div className="w-full flex flex-row items-center justify-between text-[#6096B9] text-[18px] md:hidden ">
        <div className="flex items-start justify-start uppercase font-bold">
            Control de Aforo
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
              Aforo personalizado para cada ocasión
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-3 md:text-[18px] text-[12px] ">
              <div className="relative leading-[28px]">

            EventosOrganizador te permite personalizar el control de acceso a tu evento según tus necesidades. Define límites de aforo, crea listas VIP y gestiona las entradas de manera eficiente. Adapta tu evento a cualquier tipo de celebración.
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
        </div>
        </div>

        <div className="self-stretch flex flex-col items-start justify-start gap-4 box-border max-w-full">

              <div className="flex flex-col items-start justify-start md:text-[24px] text-[18px] leading-[20px] text-black font-bold">
                
            Gestión del aforo en tiempo real
                
              </div>

            <div className="self-stretch flex flex-col items-start justify-start md:text-base text-[12px] text-black gap-4">
              
              <div className="self-stretch flex flex-col items-start justify-start gap-1">

                <div className="self-stretch flex flex-col items-start justify-start text-steelblue-100">
                  <div className="self-stretch relative leading-[24px] font-light">
                    
                    Conoce la capacidad de tu evento en tiempo real con un simple vistazo. Un <b className="text-[#6096B9] ">dashboard</b> te mostrará datos actualizados indicándote:
                  </div>
                </div>

                <div className="self-stretch flex flex-col items-start justify-start font-light">
                  <div className="self-stretch flex items-start md:leading-[24px] leading-4 gap-2">
                  <div className="flex m-0 pt-[6px] items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1424_2255)">
                    <path d="M5.22656 12.7129L0.660156 8.17383C0.532552 8.04622 0.46875 7.88216 0.46875 7.68164C0.46875 7.48112 0.532552 7.31706 0.660156 7.18945L1.67188 6.20508C1.79948 6.05924 1.95898 5.98633 2.15039 5.98633C2.3418 5.98633 2.51042 6.05924 2.65625 6.20508L5.71875 9.26758L12.2812 2.70508C12.4271 2.55924 12.5957 2.48633 12.7871 2.48633C12.9785 2.48633 13.138 2.55924 13.2656 2.70508L14.2773 3.68945C14.4049 3.81706 14.4688 3.98112 14.4688 4.18164C14.4688 4.38216 14.4049 4.54622 14.2773 4.67383L6.21094 12.7129C6.08333 12.8587 5.91927 12.9316 5.71875 12.9316C5.51823 12.9316 5.35417 12.8587 5.22656 12.7129Z" fill="#6096B9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1424_2255">
                    <rect width="14" height="14" fill="white" transform="matrix(1 0 0 -1 0.46875 14.709)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </div>
                    <p><span className="font-semibold">Capacidad máxima vs. capacidad actual: </span> Compara en tiempo real el aforo máximo permitido con el número de personas presentes.</p>
                  </div>
                  <div className="self-stretch flex items-start md:leading-[24px] leading-4  gap-2">
                  <div className="flex m-0 pt-[6px] items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1424_2255)">
                    <path d="M5.22656 12.7129L0.660156 8.17383C0.532552 8.04622 0.46875 7.88216 0.46875 7.68164C0.46875 7.48112 0.532552 7.31706 0.660156 7.18945L1.67188 6.20508C1.79948 6.05924 1.95898 5.98633 2.15039 5.98633C2.3418 5.98633 2.51042 6.05924 2.65625 6.20508L5.71875 9.26758L12.2812 2.70508C12.4271 2.55924 12.5957 2.48633 12.7871 2.48633C12.9785 2.48633 13.138 2.55924 13.2656 2.70508L14.2773 3.68945C14.4049 3.81706 14.4688 3.98112 14.4688 4.18164C14.4688 4.38216 14.4049 4.54622 14.2773 4.67383L6.21094 12.7129C6.08333 12.8587 5.91927 12.9316 5.71875 12.9316C5.51823 12.9316 5.35417 12.8587 5.22656 12.7129Z" fill="#6096B9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1424_2255">
                    <rect width="14" height="14" fill="white" transform="matrix(1 0 0 -1 0.46875 14.709)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </div>
                    <p> <span className="font-semibold">Flujo de entrada y salida: </span> Visualiza gráficamente la cantidad de personas que entran y salen del evento por hora.</p>
                  </div>
                  <div className="self-stretch flex items-start md:leading-[24px] leading-4 gap-2">
                  <div className="flex m-0 pt-[6px] items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1424_2255)">
                    <path d="M5.22656 12.7129L0.660156 8.17383C0.532552 8.04622 0.46875 7.88216 0.46875 7.68164C0.46875 7.48112 0.532552 7.31706 0.660156 7.18945L1.67188 6.20508C1.79948 6.05924 1.95898 5.98633 2.15039 5.98633C2.3418 5.98633 2.51042 6.05924 2.65625 6.20508L5.71875 9.26758L12.2812 2.70508C12.4271 2.55924 12.5957 2.48633 12.7871 2.48633C12.9785 2.48633 13.138 2.55924 13.2656 2.70508L14.2773 3.68945C14.4049 3.81706 14.4688 3.98112 14.4688 4.18164C14.4688 4.38216 14.4049 4.54622 14.2773 4.67383L6.21094 12.7129C6.08333 12.8587 5.91927 12.9316 5.71875 12.9316C5.51823 12.9316 5.35417 12.8587 5.22656 12.7129Z" fill="#6096B9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1424_2255">
                    <rect width="14" height="14" fill="white" transform="matrix(1 0 0 -1 0.46875 14.709)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </div>
                    <p><span className="font-semibold">Zonas con mayor afluencia: </span> Identifica las áreas de tu evento con mayor concentración de personas.</p>
                  </div>
                  <div className="self-stretch flex items-start md:leading-[24px] leading-4 gap-2">
                  <div className="flex m-0 pt-[6px] items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1424_2255)">
                    <path d="M5.22656 12.7129L0.660156 8.17383C0.532552 8.04622 0.46875 7.88216 0.46875 7.68164C0.46875 7.48112 0.532552 7.31706 0.660156 7.18945L1.67188 6.20508C1.79948 6.05924 1.95898 5.98633 2.15039 5.98633C2.3418 5.98633 2.51042 6.05924 2.65625 6.20508L5.71875 9.26758L12.2812 2.70508C12.4271 2.55924 12.5957 2.48633 12.7871 2.48633C12.9785 2.48633 13.138 2.55924 13.2656 2.70508L14.2773 3.68945C14.4049 3.81706 14.4688 3.98112 14.4688 4.18164C14.4688 4.38216 14.4049 4.54622 14.2773 4.67383L6.21094 12.7129C6.08333 12.8587 5.91927 12.9316 5.71875 12.9316C5.51823 12.9316 5.35417 12.8587 5.22656 12.7129Z" fill="#6096B9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1424_2255">
                    <rect width="14" height="14" fill="white" transform="matrix(1 0 0 -1 0.46875 14.709)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </div>
                    <p><span className="font-semibold">Alertas de sobrecupo: </span> Recibe notificaciones inmediatas si se supera el aforo máximo permitido.</p>
                  </div>

                </div>

              </div>
              <div className="flex flex-col items-start justify-start md:text-[24px] text-[18px] leading-[20px] text-black font-bold">
                
              Control granular del aforo
                  
                </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-1">

                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[24px] font-light">
                  Configura tu evento con las restricciones de aforo que desees. <b className="text-[#6096B9] ">Tendrás el control total sobre la capacidad de cada zona</b> y podrás modificarla en tiempo real desde cualquier dispositivo.
                    
                    
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start font-light">
                  <div className="self-stretch flex items-start md:leading-[24px] leading-4 gap-2">
                  <div className="flex m-0 pt-[6px] items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1424_2255)">
                    <path d="M5.22656 12.7129L0.660156 8.17383C0.532552 8.04622 0.46875 7.88216 0.46875 7.68164C0.46875 7.48112 0.532552 7.31706 0.660156 7.18945L1.67188 6.20508C1.79948 6.05924 1.95898 5.98633 2.15039 5.98633C2.3418 5.98633 2.51042 6.05924 2.65625 6.20508L5.71875 9.26758L12.2812 2.70508C12.4271 2.55924 12.5957 2.48633 12.7871 2.48633C12.9785 2.48633 13.138 2.55924 13.2656 2.70508L14.2773 3.68945C14.4049 3.81706 14.4688 3.98112 14.4688 4.18164C14.4688 4.38216 14.4049 4.54622 14.2773 4.67383L6.21094 12.7129C6.08333 12.8587 5.91927 12.9316 5.71875 12.9316C5.51823 12.9316 5.35417 12.8587 5.22656 12.7129Z" fill="#6096B9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1424_2255">
                    <rect width="14" height="14" fill="white" transform="matrix(1 0 0 -1 0.46875 14.709)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </div>
                    <p><span className="font-semibold">Límites de aforo por zona: </span> Establece diferentes capacidades para cada área de tu evento.</p>
                  </div>
                  <div className="self-stretch flex items-start md:leading-[24px] leading-4  gap-2">
                  <div className="flex m-0 pt-[6px] items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1424_2255)">
                    <path d="M5.22656 12.7129L0.660156 8.17383C0.532552 8.04622 0.46875 7.88216 0.46875 7.68164C0.46875 7.48112 0.532552 7.31706 0.660156 7.18945L1.67188 6.20508C1.79948 6.05924 1.95898 5.98633 2.15039 5.98633C2.3418 5.98633 2.51042 6.05924 2.65625 6.20508L5.71875 9.26758L12.2812 2.70508C12.4271 2.55924 12.5957 2.48633 12.7871 2.48633C12.9785 2.48633 13.138 2.55924 13.2656 2.70508L14.2773 3.68945C14.4049 3.81706 14.4688 3.98112 14.4688 4.18164C14.4688 4.38216 14.4049 4.54622 14.2773 4.67383L6.21094 12.7129C6.08333 12.8587 5.91927 12.9316 5.71875 12.9316C5.51823 12.9316 5.35417 12.8587 5.22656 12.7129Z" fill="#6096B9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1424_2255">
                    <rect width="14" height="14" fill="white" transform="matrix(1 0 0 -1 0.46875 14.709)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </div>
                    <p><span className="font-semibold">Restricciones horarias: </span>Define horarios de acceso y salida para controlar el flujo de personas.</p>
                  </div>
                  <div className="self-stretch flex items-start md:leading-[24px] leading-4 gap-2">
                  <div className="flex m-0 pt-[6px] items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1424_2255)">
                    <path d="M5.22656 12.7129L0.660156 8.17383C0.532552 8.04622 0.46875 7.88216 0.46875 7.68164C0.46875 7.48112 0.532552 7.31706 0.660156 7.18945L1.67188 6.20508C1.79948 6.05924 1.95898 5.98633 2.15039 5.98633C2.3418 5.98633 2.51042 6.05924 2.65625 6.20508L5.71875 9.26758L12.2812 2.70508C12.4271 2.55924 12.5957 2.48633 12.7871 2.48633C12.9785 2.48633 13.138 2.55924 13.2656 2.70508L14.2773 3.68945C14.4049 3.81706 14.4688 3.98112 14.4688 4.18164C14.4688 4.38216 14.4049 4.54622 14.2773 4.67383L6.21094 12.7129C6.08333 12.8587 5.91927 12.9316 5.71875 12.9316C5.51823 12.9316 5.35417 12.8587 5.22656 12.7129Z" fill="#6096B9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1424_2255">
                    <rect width="14" height="14" fill="white" transform="matrix(1 0 0 -1 0.46875 14.709)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </div>
                    <p><span className="font-semibold">Integración con sistemas de acceso: </span> Vincula tu sistema de control de aforo con puertas automáticas y torniquetes para un acceso más eficiente.</p>
                  </div>
                  <div className="self-stretch flex items-start md:leading-[24px] leading-4 gap-2">
                  <div className="flex m-0 pt-[6px] items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1424_2255)">
                    <path d="M5.22656 12.7129L0.660156 8.17383C0.532552 8.04622 0.46875 7.88216 0.46875 7.68164C0.46875 7.48112 0.532552 7.31706 0.660156 7.18945L1.67188 6.20508C1.79948 6.05924 1.95898 5.98633 2.15039 5.98633C2.3418 5.98633 2.51042 6.05924 2.65625 6.20508L5.71875 9.26758L12.2812 2.70508C12.4271 2.55924 12.5957 2.48633 12.7871 2.48633C12.9785 2.48633 13.138 2.55924 13.2656 2.70508L14.2773 3.68945C14.4049 3.81706 14.4688 3.98112 14.4688 4.18164C14.4688 4.38216 14.4049 4.54622 14.2773 4.67383L6.21094 12.7129C6.08333 12.8587 5.91927 12.9316 5.71875 12.9316C5.51823 12.9316 5.35417 12.8587 5.22656 12.7129Z" fill="#6096B9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1424_2255">
                    <rect width="14" height="14" fill="white" transform="matrix(1 0 0 -1 0.46875 14.709)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </div>
                    <p><span className="font-semibold">Informes detallados: </span> Genera reportes personalizados sobre el uso del espacio y el cumplimiento de las normas de seguridad.</p>
                  </div>

                </div>
              </div>
            </div>


        </div>

        <div className="self-stretch bg-[#E6E9ED] flex flex-col items-start justify-start py-5 md:px-[30px] px-3 gap-5 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
        Configura tus zonas de
        aforo fácil e intuitivamente.
        </b>
        <b className="self-stretch flex md:text-[24px] text-[18px] md:tracking-[1px] md:leading-[32px] leading-5">
        Trata a tus mejores clientes con
        la importancia que se merecen
        </b>
        </div>

      <img className="w-auto h-auto flex justify-center items-center" src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/b2f88d78-1fda-494f-1516-b0acbd9e3800/public" alt="" />
        </div>

        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start py-6 px-4 box-border max-w-[1024px] gap-4">
          
          <div className="self-stretch flex flex-col gap-4 items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
                  Control de acceso
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start md:text-[24px] text-[18px] text-black">
                <b className="self-stretch relative md:tracking-[1px] md:leading-[32px] leading-5">
                Realiza un control de ingreso a las zonas mas dinamico y sin errores
                </b>
              </div>
          </div>

          <div className="w-full flex flex-col items-center justify-start pt-0 px-0 pb-[0.1px] box-border max-w-full md:text-base text-[12px] text-black md:gap-8 gap-2">
            <div className="self-stretch flex flex-col items-start justify-center py-8 px-0 shrink-0">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[9px] gap-1">
                
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative leading-[24px] font-light">
                    <p className="m-0">
                      Te mostrará una ventana emergente, donde podras ver cuanto es permitido en la zona y cuantos llevas ingresados.
                    </p>
                  </div>
                </div>
                
                <img
                  className="w-full md:h-[487.5px] h-auto relative md:max-w-[480px] overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/10e69313-b76a-4b33-08fa-964243fd7500/public"
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