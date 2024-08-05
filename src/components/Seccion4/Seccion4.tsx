
"use client";
import React, { FC } from "react";
import Accordion from "./Accordion";
import TabsGeneralS4 from "./TabsGeneralS4";

interface propsSeccion4 {
  componentState: any;
  setComponentState: any;

}


const Seccion4: FC<propsSeccion4> =  ({componentState, setComponentState}) => {


  return (


<div className="w-[100%] flex flex-col items-start justify-start py-20 px-4 box-border gap-[24px] tracking-[normal] leading-[normal] md:max-w-[1200px] ">

<div className="self-stretch flex flex-row items-start justify-center pt-0 md:pb-[11.7px] md:pr-[21px] pl-5 box-border max-w-full">
  <div className="w-full flex flex-col items-center justify-center gap-2 max-w-full">
    <div className="self-stretch flex flex-row items-start justify-center py-0 md:pr-5 md:pl-[21px]">
      <b className="relative tracking-[2px] leading-[20px] md:text-[24px] text-lg uppercase text-[#6096B9] ">
        ¿Por que elegir nuestros servicios?
      </b>
    </div>
    <h1 className="relative  md:text-sm text-xs font-semibold font-inherit text-[#282C2F] ">
      Resolvemos todas sus dudas y las perguntas mas frecuentes de los clientes
    </h1>
  </div>
</div>

<div className="self-stretch flex flex-col items-center justify-center gap-[24px] max-w-full">

<TabsGeneralS4 componentState={componentState} setComponentState={setComponentState}/>

</div>

<div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
  <button className="cursor-pointer py-4 px-4 bg-[#6096B9] rounded-full box-border flex flex-row items-start justify-center min-h-[40px] max-w-full border-[1px] border-solid border-[#6096B9]">
    <div className="flex flex-row items-center justify-start [row-gap:20px] mq450:flex-wrap">
      <b className="relative md:text-base text-sm leading-[20px] text-white text-center">
        Configurar mi checkout
      </b>
      <div className="flex flex-col items-start justify-start py-0 pr-0 pl-3">
      <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.7454 8.34499L12.0285 15.4665C11.9071 15.6283 11.7048 15.6688 11.543 15.6688C11.3811 15.6688 11.2193 15.6283 11.0979 15.5069C10.8147 15.2642 10.8147 14.8595 11.0574 14.6167L16.7222 8.5473H1.46772C1.10355 8.5473 0.820312 8.26407 0.820312 7.94036C0.820312 7.61666 1.10355 7.25249 1.46772 7.25249H16.7222L11.0574 1.22354C10.8147 0.980753 10.8147 0.576127 11.0979 0.333353C11.3811 0.0905765 11.7858 0.0905764 12.0285 0.373816L18.7454 7.49527C18.9881 7.73805 18.9881 8.10221 18.7454 8.34499Z" fill="white"/>
                  </svg>
      </div>
    </div>
  </button>
</div>

</div>

);
};

export default Seccion4;