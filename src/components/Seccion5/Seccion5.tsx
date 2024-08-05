"use client";
import React, { FC, useState } from "react";
import TabG1 from "./TabG2";
interface propsSeccion5 {
  componentState: any;
  setComponentState: any;

}


const Seccion5: FC<propsSeccion5> =  ({componentState, setComponentState}) => {


  return (
    <div className="w-full bg-white flex flex-col items-center justify-center pt-4 px-0 pb-[16.1px] box-border gap-[3px] text-center md:text-sm text-[#6096B9] font-nunito-sans md:max-w-[1200px] ">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <b className="w-auto relative tracking-[2.8px] leading-[20px] uppercase md:text-[32px] text-lg flex items-center justify-center shrink-0 max-w-full">
          Como Gestionar tus eventos sociales
        </b>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 text-5xl text-[#6096B9]">
        <h2 className="m-0 relative text-inherit text-xs tracking-[1px] leading-[32px] font-semibold font-inherit">
          Todo lo que necesitas para Crear, administrar y fomentar tus eventos sin complicaciones
        </h2>
      </div>
      <div className="w-[100%] rounded-md overflow-hidden flex flex-row items-center justify-center p-5 gap-[8px]"> 
      <TabG1 componentState={componentState} setComponentState={setComponentState}/>

      </div>

    </div>
  );
};

export default Seccion5;
