import { FC, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
interface propsModalEntradas {
    addInfo:any
    setAddInfo:any
}

export const ModalEntradas1: FC <propsModalEntradas> = ({addInfo,setAddInfo}) => {
    return (
<ClickAwayListener onClickAway={() => addInfo && setAddInfo(false)}>

<div className="w-auto bg-primary-contrast max-w-full flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border gap-10 leading-[normal] tracking-[normal] text-left text-sm text-steelblue-100">
        <div className="w-full flex flex-row items-center justify-between text-[#6096B9] text-[18px] md:hidden ">
        <div className="flex items-start justify-start uppercase font-bold">
            Entradas
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
                Vende entradas online para todos tus eventos desde una única
                plataforma
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-3 md:text-[18px] text-[12px] ">
              <div className="relative leading-[28px]">
                  
                    EventosOrganizador centraliza todos tus canales de venta en un único lugar dándote un control total sobre todas tus entradas distribuidas. Pónselo fácil a tus clientes y da la opción de comprar entradas directamente por redes sociales.
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
              src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/6cbdf034-757a-45a4-10e6-66ec7ff0f900/public"
            />
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-col items-start justify-start gap-4 box-border max-w-full">

            
            <div className="flex flex-col items-start justify-start gap-5 max-w-full">

                <b className="relative tracking-[2.7px] leading-[20px] uppercase md:text-sm text-[8px] ">
                  Vende entradas de forma segura
                </b>
         
              <div className="flex flex-col items-start justify-start md:text-[24px] text-[18px] leading-[20px] text-black font-bold">
                
                  La seguridad de tu dinero, lo más importante para nosotros
                
              </div>
            </div>

            <div className="self-stretch flex flex-col items-center justify-start md:text-base text-[12px] text-black gap-4">
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative md:leading-[24px] leading-4 font-medium">
                    Detección de pagos fraudulentos
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-steelblue-100">
                  <div className="self-stretch relative leading-[24px] font-light">
                  Contamos con <b className="text-[#6096B9] ">tecnología para detectar posibles transacciones
                fraudulentas bloqueando la operación de forma inmediata</b> y
                avisando al administrador del negocio.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <div className="self-stretch flex flex-col items-start justify-start leading-[24px] font-medium">
                  
                    Falsificación de entradas
                  
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[24px] font-light">
                    Despreocúpate de los problemas con las falsificaciones y
                    asegúrate que todo el mundo que entre a tus eventos haya
                    pagado. Nuestros <b className="text-[#6096B9]">proceso de verificación mediante códigos QR
                    únicos</b> hace que sea imposible replicar una entrada o entrar dos
                    veces con la misma.
                  </div>
                </div>
              </div>
            </div>


      </div>

      <div className="self-stretch bg-[#E6E9ED] flex flex-col items-start justify-start py-5 md:px-[30px] px-3 gap-5 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
          Equipos de venta
        </b>
        <b className="self-stretch flex md:text-[24px] text-[18px] md:tracking-[1px] md:leading-[32px] leading-5">
          Aumenta tu facturación facilitando la
          venta de entradas a tu equipo de RRPP
        </b>
        </div>


        <div className="self-stretch flex flex-col items-start justify-start max-w-full md:text-[16px] text-[12px] gap-[20px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="relative leading-[24px] font-light text-[#6096B9] gap-4 ">
        <p className="">
            Cada usuario registrado en tu negocio contará con un enlace de
            venta directa personal que podrá compartir en cualquier red
            social, mensaje de whatsapp o lugar en internet. En pocas
            palabras, tus sus clientes podrán comprar una entrada en un click
            estén donde estén.
        </p>

        <p className=""> 
            Este link personal te permitirá cuantificar la facturación por RRPP
            ya sea por evento o en general. De la misma forma podrás
            obtener un listado con las comisiones a pagar según su venta así
            como la cantidad total a liquidar por cada uno de ellos.
        </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-5 max-w-full md:text-sm text-[8px] ">
            <b className="relative tracking-[2.8px] leading-[20px] uppercase">
              Internacionalización
            </b>
            <b className="relative md:text-[24px] tracking-[1px] md:leading-[32px] leading-5 text-[18px] ">
            Recibe pagos desde cualquier parte del mundo
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
            <div className="relative leading-[24px] font-light inline-block max-w-full md:text-base text-[12px] ">
            <p>
            No dejes de lado a tu público internacional. Con nuestra pasarela
            de pago podrás aceptar compras con cualquier tarjeta sin
            importar la divisa en la que se opere.
            </p>
            <p>
            Retira tu dinero una vez finalizado el evento y recíbelo en tu
            cuenta en tan solo 48 horas.
            </p>
          </div>
        </div>
      </div>

      <img className="md:w-[500px] md:h-[400px] w-auto h-auto flex justify-center items-center" src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/c4ffa11f-6521-4000-0550-6437df74a300/public" alt="" />
    </div>

    <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start py-6 px-4 box-border max-w-[1024px] gap-4">
          
          <div className="self-stretch flex flex-col gap-4 items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <b className="self-stretch relative tracking-[2.8px] leading-[20px] uppercase md:text-sm text-[8px] ">
                  Estadísticas
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start md:text-[24px] text-[18px] text-black">
                <b className="self-stretch relative md:tracking-[1px] md:leading-[32px] leading-5">
                Recopila datos y recibe informes automáticos al finalizar cada evento
                </b>
              </div>
          </div>

          <div className="w-full flex flex-col items-center justify-start pt-0 px-0 pb-[0.1px] box-border max-w-full md:text-base text-[12px] text-black md:gap-8 gap-2">
            <div className="self-stretch flex flex-col items-start justify-center py-8 px-0 shrink-0">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[9px] gap-1">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[24px] font-medium">
                    Informe de clientes
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative leading-[24px] font-light">
                    <p className="m-0">
                      Te mostrará aspectos sobre el tipo de cliente que ha
                      comprado entradas para tus eventos: género, edad, ubicación y calidad.
                    </p>
                  </div>
                </div>
                
                <img
                  className="w-full md:h-[487.5px] h-auto relative md:max-w-[480px] overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/359e1f41-c047-4a1d-7438-890fbf942100/public"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center py-8 px-0 shrink-0">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[9px] gap-1">
                <div className="self-stretch flex flex-col items-start justify-start shrink-0">
                  <div className="self-stretch relative leading-[24px] font-medium">
                    Informe de tarifas
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-9 shrink-0">
                  <div className="relative leading-[24px] font-light">
                    Muestra los precios de las entradas que se han vendido en
                    cada evento indicándote los mejores días y horas para vender.
                    Además podrás ver el total facturado por tarifa, porcentaje de
                    asistencia por género y edad media.
                  </div>
                </div>
                <img
                  className="w-full md:h-[448.5px] h-auto relative max-w-[480px] overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/51ca87ad-9d11-4bf7-2fa2-fa8fe7aa9a00/public"
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
  