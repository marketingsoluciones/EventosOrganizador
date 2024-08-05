
import { FC, useState } from "react";
import { Modal } from "../Modal";
import { ModalRrPp1 } from "./Modales/ModalRrPp1";
import { ModalRrPp2 } from "./Modales/ModalRrPp2";

interface propsRoles {
    componentState: any;
    setComponentState: any;
  
  }

const Roles: FC<propsRoles> = ({componentState, setComponentState}) => {
  const [addInfo, setAddInfo] = useState(false);
  const [addInfo2, setAddInfo2] = useState(false);

  return (

<section className="self-stretch flex md:flex-row rounded-2xl items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-start justify-start gap-[16px]">
  
  <div className="h-auto md:flex-[0.75] flex flex-row items-start justify-start py-0 px-4 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
  <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/8b0e5288-0e78-4ab7-9e36-5e3dee1b0400/public" alt="" />
  </div>

  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
  
  <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
<h1 className="m-0 self-stretch relative text-[30px] tracking-[1px] leading-[36px] font-bold font-inherit ">
Canales de venta
</h1>
<div className="self-stretch h-auto relative leading-[24px] flex items-center">
  
    <p className="m-0 font-light md:text-[18px] ">
    Centraliza todos tus canales de venta en una única aplicación y haz que la gestión de tus ventas sea mucho más sencilla. Estudia las rentabilidades que te genera cada canal y apuesta únicamente por los que mejor te funcionen. Todos los indicadores que necesites los tendrás en tiempo real.
              </p>
  
</div>


<button onClick={() => {setAddInfo(!addInfo)}} className="flex items-center justify-center bg-[#6096B9] text-white font-normal md:text-base text-xs py-2 px-4 gap-2 rounded-full hover:bg-[#4b7591] shadow-md ">
      Saber más sobre Canales de venta
      <svg className='w-6 h-6' data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"></path>
      </svg>
      </button>
</div>

<div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
<h1 className="mt-5 self-stretch relative text-[30px] tracking-[1px] leading-[36px] font-bold font-inherit ">
Gestión de RRPP
</h1>
<div className="self-stretch h-auto relative leading-[24px] flex items-center">
  
    <p className="m-0 font-light">
    Da de alta a tantos usuarios como necesites, sin ningún coste extra, asignando a cada uno de ellos diferentes roles o permisos según su autoridad. 
    Registra las horas trabajadas de tus empleados así como su actividad de venta
    gracias a los usuarios únicos.
    </p>

</div>

<button onClick={() => {setAddInfo2(!addInfo2)}} className="flex items-center justify-center bg-[#6096B9] text-white font-normal md:text-base text-xs py-2 px-4 gap-2 rounded-full hover:bg-[#4b7591] shadow-md ">
      Saber más sobre RRPP
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

          <ModalRrPp1 addInfo={addInfo} setAddInfo={setAddInfo} />
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

          <ModalRrPp2 addInfo2={addInfo2} setAddInfo2={setAddInfo2} />
      </Modal>
  ) :
      null
}
</section>

  );
};

export default Roles;



