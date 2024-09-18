
import { FC, useState } from "react";
import { Modal } from "../Modal";
import { ModalListas } from "./Modales/ModalListas";

interface propsListas {
    componentState: any;
    setComponentState: any;
  
  }

const Listas: FC<propsListas> = ({componentState, setComponentState}) => {
  const [addInfo, setAddInfo] = useState(false);

  return (

<section className="self-stretch flex md:flex-row items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-start justify-center md:gap-[65px] gap-[16px]">
  
  <div className="md:w-auto h-auto flex flex-row items-start justify-start py-0 md:px-8 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
    <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/57e1a776-9f23-4cab-ceab-93aa5b3b0a00/public" alt="" />
  </div>

  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
    <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
      <h1 className="m-0 self-stretch relative md:text-[30px] text-xl tracking-[1px] leading-[36px] font-bold font-inherit">
      Lista de invitados
      </h1>
      <div className="self-stretch  h-auto relative leading-[24px] flex flex-col gap-4 items-center md:text-[18px] text-sm">
        
          <p className="m-0 font-light">
          Controla tu lista de invitados de cualquier evento que realices y centralízala para poder recepcionarlos desde cualquier dispositivo móvil. Obtén información sobre los invitados así como horas de entrada, porcentaje de asistencia, número de acompañantes… Facilita el registro de los invitados mediante el envío de links privados o publicando formularios públicos en tus canales de venta.
          </p>

      </div>

      <button onClick={() => {setAddInfo(!addInfo)}} className="flex items-center justify-center bg-[#6096B9] text-white font-normal md:text-base text-xs py-2 px-4 gap-2 rounded-full hover:bg-[#4b7591] shadow-md ">
      Saber más sobre Lista de Invitados
      <svg className='w-6 h-6' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"></path>
      </svg>
      </button>

    </div>
  </div>
</div>
{
  addInfo ? (
      <Modal  
      setOpenIcon="" 
      openIcon="" 
      classe={"md:w-[56%] h-[86%] w-[80%]"}>

          <ModalListas addInfo={addInfo} setAddInfo={setAddInfo} />
      </Modal>
  ) :
      null
}
</section>

  );
};

export default Listas;