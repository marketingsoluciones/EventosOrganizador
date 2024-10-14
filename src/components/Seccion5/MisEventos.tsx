
import { FC, useState } from "react";
import Card4 from "./Card4";



const MisEventos: FC = () => {

  return (

<section className="self-stretch flex md:flex-row rounded-2xl items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-center justify-start md:gap-[32px] gap-[16px]">
  
  <div className="h-auto md:flex-[0.75] flex flex-row items-start justify-start py-0 px-4 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
    <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/b964b843-29ec-4844-ad77-8b249620ac00/public" alt="" />
  </div>

  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
<Card4 
img={<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.7793 31.2706L16.6328 34.4465C16.7867 35.0192 16.3552 35.5821 15.7622 35.5821H11.5527C10.9597 35.5821 10.5282 35.0193 10.6821 34.4465L11.5356 31.2706H15.7793Z" fill="white"/>
  <path d="M13.6541 31.2733C20.6816 31.2733 26.3784 24.634 26.3784 16.444C26.3784 8.25405 20.6816 1.61475 13.6541 1.61475C6.62672 1.61475 0.929871 8.25405 0.929871 16.444C0.929871 24.634 6.62672 31.2733 13.6541 31.2733Z" fill="white"/>
  <path d="M36.4413 35.3184L37.2948 38.4943C37.4487 39.0671 37.0171 39.6298 36.4241 39.6298H32.2147C31.6217 39.6298 31.1902 39.0671 31.3441 38.4943L32.1976 35.3184H36.4413Z" fill="white"/>
  <path d="M45.8029 11.9387C45.55 11.4871 44.9787 11.326 44.5271 11.5789C44.0755 11.8318 43.9143 12.403 44.1672 12.8547C45.4371 15.1225 46.1083 17.7629 46.1083 20.4904C46.1083 28.1504 40.8207 34.3824 34.3212 34.3824C27.8219 34.3824 22.5342 28.1504 22.5342 20.4904C22.5342 12.8302 27.8219 6.59834 34.3212 6.59834C35.7778 6.59834 37.1995 6.9081 38.5466 7.51902C39.0181 7.73263 39.5734 7.5238 39.7873 7.05245C40.0011 6.581 39.7923 6.02547 39.3208 5.81177C37.7289 5.08979 36.0467 4.72378 34.3212 4.72378C30.9429 4.72378 27.8476 6.14704 25.4603 8.50035C24.3957 6.39373 22.9214 4.59491 21.14 3.24729C18.9162 1.56498 16.3282 0.675781 13.656 0.675781C9.97931 0.675781 6.53136 2.33438 3.94719 5.34613C1.39808 8.31683 -0.00567627 12.2575 -0.00567627 16.4424C-0.00567627 20.6272 1.39808 24.5679 3.94719 27.5386C5.75707 29.6478 7.99088 31.0924 10.4299 31.7693L9.77546 34.2045C9.62577 34.7612 9.74125 35.343 10.0921 35.8006C10.4429 36.2581 10.9748 36.5205 11.5512 36.5205H13.032C13.318 37.3999 13.2487 38.3695 12.8216 39.2042C12.0362 40.7389 12.0362 42.5714 12.8216 44.1061C13.3333 45.106 13.3333 46.3001 12.8216 47.3001C12.5858 47.761 12.7683 48.3257 13.2291 48.5615C13.3658 48.6314 13.5116 48.6646 13.6553 48.6646C13.996 48.6646 14.3246 48.4782 14.4904 48.1541C15.2757 46.6194 15.2757 44.7869 14.4904 43.2522C13.9787 42.2522 13.9787 41.0582 14.4904 40.0582C15.053 38.9586 15.2103 37.7067 14.9667 36.5205H15.7607C16.3371 36.5205 16.869 36.2582 17.2199 35.8006C17.5707 35.3431 17.6862 34.7613 17.5365 34.2045L16.8824 31.7708C18.9594 31.1956 20.884 30.0642 22.5269 28.4385C24.3757 32.0784 27.4527 34.7905 31.0966 35.8121L30.4408 38.2525C30.2911 38.8092 30.4066 39.391 30.7574 39.8486C31.1082 40.3061 31.6401 40.5685 32.2166 40.5685H33.6973C33.9832 41.4479 33.914 42.4175 33.4869 43.2522C32.7016 44.7869 32.7016 46.6194 33.4869 48.1541C33.6528 48.4782 33.9813 48.6646 34.322 48.6646C34.4657 48.6646 34.6115 48.6314 34.7481 48.5615C35.209 48.3257 35.3914 47.761 35.1557 47.3001C34.644 46.3001 34.644 45.106 35.1557 44.1061C35.7183 43.0065 35.8757 41.7545 35.6321 40.5684H36.4261C37.0025 40.5684 37.5344 40.3061 37.8852 39.8485C38.236 39.391 38.3515 38.8092 38.2018 38.2524L37.5474 35.8173C39.9864 35.1403 42.2202 33.6958 44.0301 31.5866C46.5791 28.6159 47.983 24.6752 47.983 20.4904C47.9829 17.4429 47.229 14.4858 45.8029 11.9387ZM15.714 34.6459H11.5978L12.274 32.1299C12.7301 32.1823 13.1912 32.209 13.656 32.209C14.1209 32.209 14.582 32.1825 15.038 32.1303L15.714 34.6459ZM13.656 30.3345C7.15652 30.3345 1.86888 24.1025 1.86888 16.4425C1.86888 8.78228 7.15652 2.55033 13.656 2.55033C18.0361 2.55033 22.0897 5.46779 24.1112 10.0272C21.9655 12.8129 20.6598 16.4787 20.6598 20.4904C20.6598 22.6449 21.0366 24.6996 21.7175 26.572C19.5238 29.0022 16.6804 30.3345 13.656 30.3345ZM36.3794 38.6939H32.2631L32.9396 36.1768C33.394 36.2298 33.8548 36.2569 34.3212 36.2569C34.786 36.2569 35.2471 36.2302 35.7032 36.1778L36.3794 38.6939Z" fill="white"/>
  <path d="M42.4179 9.98558C42.6644 9.98558 42.9062 9.88529 43.0805 9.71096C43.2548 9.53663 43.3551 9.29481 43.3551 9.0483C43.3551 8.8018 43.2549 8.55998 43.0805 8.38565C42.9062 8.21131 42.6644 8.11102 42.4179 8.11102C42.1714 8.11102 41.9295 8.21131 41.7552 8.38565C41.581 8.55998 41.4806 8.80086 41.4806 9.0483C41.4806 9.29481 41.5809 9.53663 41.7552 9.71096C41.9295 9.88529 42.1714 9.98558 42.4179 9.98558Z" fill="white"/>
  </svg>
  } 
  color={"bg-gradient-to-t from-[#40789D] to-[#7EB3D6]"}
  title={"Gestiona múltiples eventos"} 

content={"Centraliza la gestión en tiempo real y lleva el control de tus tareas de forma intuitiva."}/>

  </div>
</div>

</section>
  );
};

export default MisEventos;