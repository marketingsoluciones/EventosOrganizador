
import { FC, useState } from "react";
import Card4 from "./Card4";
interface Props {
  componentState: any;
  setComponentState: any;
}
const Invitados1: FC<Props> = ({componentState, setComponentState}) => {


  return (

<section className="self-stretch flex md:flex-row rounded-2xl items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-center justify-start md:gap-[32px] gap-[16px]">
  
  <div className="h-auto md:flex-[0.75] flex flex-row items-start justify-start py-0 px-4 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
    <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/2e411ed7-ca7d-4e69-51df-65645244da00/public" alt="" />
  </div>

  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
    <Card4 
    img={<svg width="46" height="43" viewBox="0 0 46 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.875 22.9333C27.4 22.9333 28.8625 23.5374 29.9409 24.6126C31.0192 25.6878 31.625 27.1461 31.625 28.6667V32.9667C31.625 38.8548 25.622 43 15.8125 43C6.003 43 0 38.8548 0 32.9667V28.6667C0 27.1461 0.605802 25.6878 1.68414 24.6126C2.76247 23.5374 4.22501 22.9333 5.75 22.9333H25.875ZM40.25 22.9333C41.775 22.9333 43.2375 23.5374 44.3159 24.6126C45.3942 25.6878 46 27.1461 46 28.6667V30.1C46 36.0885 41.492 40.1333 33.0625 40.1333C32.6571 40.1333 32.2575 40.1247 31.8723 40.1047C33.4219 38.3073 34.339 36.1315 34.4799 33.6518L34.5 32.9667V28.6667C34.5 26.6829 33.8273 24.854 32.6945 23.4006L32.3006 22.9333H40.25ZM15.8125 0C17.1339 -1.96337e-08 18.4424 0.25952 19.6633 0.763742C20.8841 1.26796 21.9934 2.00701 22.9278 2.93869C23.8622 3.87038 24.6034 4.97644 25.109 6.19374C25.6147 7.41104 25.875 8.71574 25.875 10.0333C25.875 11.3509 25.6147 12.6556 25.109 13.8729C24.6034 15.0902 23.8622 16.1963 22.9278 17.128C21.9934 18.0597 20.8841 18.7987 19.6633 19.3029C18.4424 19.8071 17.1339 20.0667 15.8125 20.0667C13.1438 20.0667 10.5843 19.0096 8.69724 17.128C6.81015 15.2464 5.75 12.6943 5.75 10.0333C5.75 7.37233 6.81015 4.82031 8.69724 2.93869C10.5843 1.05708 13.1438 3.96521e-08 15.8125 0ZM35.9375 5.73333C37.8437 5.73333 39.6719 6.48839 41.0198 7.8324C42.3677 9.17641 43.125 10.9993 43.125 12.9C43.125 14.8007 42.3677 16.6236 41.0198 17.9676C39.6719 19.3116 37.8437 20.0667 35.9375 20.0667C34.0313 20.0667 32.2031 19.3116 30.8552 17.9676C29.5073 16.6236 28.75 14.8007 28.75 12.9C28.75 10.9993 29.5073 9.17641 30.8552 7.8324C32.2031 6.48839 34.0313 5.73333 35.9375 5.73333Z" fill="white"/>
</svg>
} 
color={"bg-gradient-to-t from-[#40789D] to-[#7EB3D6]"}
    title={"Organiza la lista de invitados"} content={"Confirma asistencias, alérgenos, acompañantes y asignación de mesas."} />
  </div>
</div>

</section>

  );
};

export default Invitados1;