import { FC, useState } from "react";
import { Modal } from "../Modal";
import { ModalCrm } from "./Modales/ModalCrm";
import { ModalCrm2 } from "./Modales/ModalCrm2";

interface propsCRM {
    componentState: any;
    setComponentState: any;
  
  }

const CRM: FC<propsCRM> = ({componentState, setComponentState}) => {
  const [addInfo, setAddInfo] = useState(false);
  const [addInfo2, setAddInfo2] = useState(false);

  return (

<section className="self-stretch flex md:flex-row rounded-2xl items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-start justify-start gap-[16px]">
  
  <div className="h-auto md:flex-[0.75] flex flex-row items-start justify-start py-0 px-4 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
    <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/3f6a755e-ebbf-4e9f-2f86-933776c9f900/public" alt="" />
  </div>

  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
    <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
      <h1 className="m-0 self-stretch relative md:text-[30px] text-xl tracking-[1px] leading-[36px] font-bold font-inherit">
      CRM y base de datos de clientes
      </h1>
      <div className="self-stretch  h-auto relative leading-[24px] flex flex-col gap-4 items-center md:text-[18px] text-sm">
        
          <p className="m-0 font-light">
          Conoce toda la información necesaria sobre tus clientes. Registra cada acción que lleven a cabo los usuarios en tu negocio y obtén historiales de consumo, preferencia, listado de asistencia, gusto y preferencias.
          </p>

      </div>

      <button onClick={() => {setAddInfo(!addInfo)}} className="flex items-center justify-center bg-[#6096B9] text-white font-normal md:text-base text-xs py-2 px-4 gap-2 rounded-full hover:bg-[#4b7591] shadow-md ">
      Saber más sobre CRM
      <svg className='w-6 h-6' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"></path>
      </svg>
      </button>

    </div>
    <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
      <h1 className="mt-5 self-stretch relative md:text-[30px] text-xl tracking-[1px] leading-[36px] font-bold font-inherit">
      Marketing para eventos
      </h1>
      <div className="self-stretch  h-auto relative leading-[24px] flex flex-col gap-4 items-center md:text-lg text-sm">
        
          <p className="m-0 font-light">
          Comunícate directamente con tus clientes mediante la creación y envío de emails o sms personalizados.
          </p>
      </div>

      <button onClick={() => {setAddInfo2(!addInfo2)}} className="flex items-center justify-center bg-[#6096B9] text-white font-normal md:text-base text-xs py-2 px-4 gap-2 rounded-full hover:bg-[#4b7591] shadow-md ">
      Saber más sobre marketing
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

          <ModalCrm addInfo={addInfo} setAddInfo={setAddInfo} />
      </Modal>
  ) :
      null
}
{
  addInfo2 ? (
      <Modal  
      setOpenIcon="" 
      openIcon="" 
      classe={"md:w-[56%] h-[86%] w-[80%]"}>

          <ModalCrm2 addInfo2={addInfo2} setAddInfo2={setAddInfo2} />
      </Modal>
  ) :
      null
}
</section>

  );
};

export default CRM;