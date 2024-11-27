"use client";
import React, { FC, useState } from "react";
import TabsGeneral from "./TabsGeneral";
interface propsSeccion2 {
  componentState?: any;
  setComponentState?: any;

}


const Ticketing: FC<propsSeccion2> =  ({componentState, setComponentState}) => {


  return (
    <div className="w-[100%] bg-white max-w-full flex flex-col items-center justify-start pt-4 px-0 pb-[16.1px] box-border gap-[3px] tracking-[normal] leading-[normal] text-center md:text-sm text-[#6096B9] font-nunito-sans md:max-w-[1200px]  ">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 text-5xl text-[#284C77]">
        <h2 className="m-0 relative text-inherit text-[24px] tracking-[1px] leading-[32px] font-normal font-inherit">
        Gestiona en un solo lugar <span className="font-semibold">tus eventos de ticketing</span>
        </h2>
      </div>
      <div className="self-stretch rounded-md flex flex-row items-center justify-center p-5 gap-[8px] mq975:flex-wrap">
        
<TabsGeneral componentState={componentState} setComponentState={setComponentState}/>

      </div>
      <button className="cursor-pointer flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-lg text-white rounded-full py-[8px] px-[24px] ">
      <a href="https://app.eventosorganizador.com/">Crear un evento de tickets</a>
    </button>


    </div>
  );
};

export default Ticketing;
