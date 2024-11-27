
import { FC } from "react";
import Card4 from "../Socials/Card4";
interface Props {
  componentState: any;
  setComponentState: any;
}
const Entradas: FC<Props> = ({componentState, setComponentState}) => {


  return (

<section className="self-stretch flex md:flex-row rounded-2xl items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-center justify-start md:gap-[32px] gap-[16px]">
  
  <div className="h-auto md:flex-[0.75] flex flex-row items-start justify-start py-0 px-4 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
    <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/0322dada-73a0-4d3c-ff7c-5e61c3eaae00/public" alt="" />
  </div>

  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
    <Card4 
    img={
<svg width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.4313 13.4453L45.3366 14.5401C44.435 15.403 43.2372 15.8667 42.0007 15.8538C40.7643 15.8409 39.5793 15.3386 38.6906 14.4628C37.8148 13.587 37.3125 12.402 37.2996 11.1527C37.2868 9.91626 37.7504 8.71844 38.6134 7.81687L39.7081 6.72209L33.1652 0.179199L0 33.3444L6.55577 39.9002L7.65055 38.8054C8.55213 37.9425 9.74994 37.4788 10.9864 37.4917C12.2228 37.5046 13.4078 38.0069 14.2965 38.8827C15.1723 39.7585 15.6746 40.9435 15.6875 42.1928C15.7004 43.4293 15.2367 44.6271 14.3738 45.5286L13.279 46.6234L19.8347 53.1792L53 20.0139L46.4442 13.4582L46.4313 13.4453ZM26.5322 20.0139L24.3298 17.8115L26.5193 15.622L28.7217 17.8244L26.5322 20.0139ZM30.9499 24.4188L28.7475 22.2164L30.9371 20.0268L33.1395 22.2293L30.9499 24.4188ZM35.3548 28.8237L33.1524 26.6212L35.3419 24.4317L37.5443 26.6341L35.3548 28.8237Z" fill="white"/>
</svg>

} 
    color={"bg-gradient-to-t from-[#77ADD0] to-[#284C77]"}
    title={"Ventas de entradas"} content={"Vende entradas online de forma fácil y flexible y gestiona las reservas."} />
  </div>

</div>

</section>

  );
};

export default Entradas;