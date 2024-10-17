import { FC, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
interface propsAñadirUbicacionM {
    addInfo:any
    setAddInfo:any
}

export const Content1: FC <propsAñadirUbicacionM> = ({addInfo,setAddInfo}) => {
    return (
<ClickAwayListener onClickAway={() => addInfo && setAddInfo(false)}>
    
<div className="w-auto overflow-hidden flex flex-col items-center justify-center text-left text-base-8 text-black font-semibold">
<button onClick={() => {setAddInfo(!addInfo)}} className="cursor-pointer w-4 flex flex-col items-center justify-center text-black">
<svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
</svg>
        </button>
 
 hola
        </div>

</ClickAwayListener>

    );
  };
  