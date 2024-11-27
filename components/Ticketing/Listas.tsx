
import { FC, useState } from "react";
import Card4 from "../Socials/Card4";
interface Props {
  componentState: any;
  setComponentState: any;
}
const Listas: FC<Props> = ({componentState, setComponentState}) => {
  return (

<section className="self-stretch flex md:flex-row items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-center justify-center md:gap-[32px] gap-[16px]">
  
  <div className="md:w-auto h-auto flex flex-row items-start justify-start py-0 md:px-8 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
    <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/52f6e888-1996-4908-938b-a60b3d91b300/public" alt="" />
  </div>

  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
    <Card4 
    img={
<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.0162 10.9969C30.0176 9.10239 29.5297 7.23967 28.5996 5.58925C27.6694 3.93883 26.3287 2.5567 24.7073 1.57683C23.0859 0.596958 21.2388 0.0525795 19.3452 -0.00353574C17.4516 -0.059651 15.5756 0.374399 13.899 1.25654C12.2225 2.13869 10.8022 3.439 9.77602 5.03144C8.74978 6.62389 8.15236 8.45445 8.04166 10.3457C7.93094 12.237 8.3107 14.1247 9.14413 15.826C9.97755 17.5273 11.2363 18.9844 12.7986 20.0561C9.06277 21.354 5.82353 23.7824 3.53017 27.0043C1.23681 30.2262 0.00303942 34.0821 0 38.0369H2.97143C2.97646 33.7828 4.6686 29.7045 7.67667 26.6964C10.6847 23.6884 14.7631 21.9962 19.0172 21.9912C21.9327 21.9886 24.7281 20.8297 26.7902 18.7685C28.8522 16.7074 30.0124 13.9124 30.0162 10.9969Z" fill="white"/>
<path d="M31.8715 28.8276V22.5876H28.9V28.8276H22.66V31.7991H28.9V38.0391H31.8715V31.7991H38.1115V28.8276H31.8715Z" fill="white"/>
</svg>

} 
color={"bg-gradient-to-t from-[#77ADD0] to-[#284C77]"}
    title={"Lista de invitados"} content={"Centraliza la información de tus invitados, facilita el registro y controla el aforo de tu evento."} />
  </div>

</div>

</section>

  );
};

export default Listas;