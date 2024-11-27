"use client";
import React, { FC, useState } from "react";
import TabG1 from "./TabG2";
interface propsSeccion5 {
  componentState?: any;
  setComponentState?: any;

}


const Socials: FC<propsSeccion5> =  ({componentState, setComponentState}) => {


  return (
    <div className="w-full bg-white flex flex-col items-center justify-center pt-4 px-0 pb-[16.1px] box-border gap-[3px] text-center md:text-sm text-[#6096B9] font-nunito-sans md:max-w-[1200px] ">

      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 text-5xl text-[#6096B9]">
        <h2 className="m-0 relative text-inherit text-[24px] tracking-[1px] leading-[32px] font-semibold font-inherit">
        Ahorra tiempo al organizar tus eventos sociales
        </h2>
      </div>
      <div className="w-[100%] rounded-md overflow-hidden flex flex-row items-center justify-center p-5 gap-[8px]"> 
      <TabG1 componentState={componentState} setComponentState={setComponentState}/>

      </div>
      <button className="cursor-pointer flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-lg text-white rounded-full py-[8px] px-[24px] ">
      <a href="https://app.eventosorganizador.com/">Crear un evento social </a>
      </button>

    </div>
  );
};

export default Socials;
