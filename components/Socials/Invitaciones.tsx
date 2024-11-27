
import { FC, useState } from "react";
import Card4 from "./Card4";
interface Props {
  componentState: any;
  setComponentState: any;
}
const Invitaciones1: FC<Props> = ({componentState, setComponentState}) => {
  return (

<section className="self-stretch flex md:flex-row rounded-2xl items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-center justify-start md:gap-[32px] gap-[16px]">
  
  <div className="h-auto md:flex-[0.75] flex flex-row items-start justify-start py-0 px-4 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
    <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/3fa9d251-2ac1-489a-48e5-f011be551400/public" alt="" />
  </div>

  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
    <Card4 
    img={
<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.4352 15.4084C40.4275 15.2592 40.3796 15.114 40.3008 14.9842C40.2911 14.9683 40.152 14.7877 40.0712 14.7271L36.7989 12.2729L36.7992 3.6364C36.7993 1.62806 35.1712 0 33.1629 0H7.70856C5.70031 0 4.07224 1.62798 4.07224 3.63632V12.273L0.799924 14.7272C0.719045 14.7877 0.579957 14.9683 0.570326 14.9843C0.491578 15.114 0.443596 15.2593 0.435926 15.4084C0.435073 15.4249 0.435926 36.363 0.435926 36.363C0.435926 38.3685 2.06672 39.9993 4.07224 39.9993H36.7989C38.8043 39.9993 40.4352 38.3685 40.4352 36.363C40.4352 36.363 40.436 15.4248 40.4352 15.4084ZM16.7997 5.45452C18.1642 5.45452 19.4435 5.95607 20.4361 6.8581C21.4286 5.95616 22.7078 5.45452 24.0724 5.45452C27.0802 5.45452 29.5268 7.90118 29.5268 10.909C29.5268 12.3667 28.9595 13.7365 27.9288 14.7654L21.0762 21.5541C20.8987 21.73 20.6678 21.8178 20.4361 21.8178C20.2045 21.8178 19.9736 21.73 19.7961 21.5541L12.9461 14.7681C11.9127 13.7365 11.3455 12.3667 11.3455 10.909C11.3453 7.90118 13.792 5.45452 16.7997 5.45452ZM21.674 28.5692C21.4548 28.7636 20.9975 29.0904 20.4072 29.0904C19.9757 29.0904 19.5593 28.9155 19.1688 28.5692C15.653 25.4568 5.88934 17.8348 2.84312 15.4666L4.36738 14.3234C4.38894 14.344 4.39908 14.3731 4.42286 14.3917C7.82302 17.0391 16.1307 23.5419 19.8274 26.7317C19.9978 26.879 20.21 26.9528 20.4213 26.9528C20.6326 26.9528 20.8439 26.879 21.0153 26.7326C24.7146 23.5437 33.0401 17.04 36.4473 14.3918C36.4712 14.3733 36.4814 14.3437 36.5031 14.3231L38.0271 15.4661C34.9714 17.8374 25.1627 25.4808 21.674 28.5692Z" fill="white"/>
</svg>

} 
color={"bg-gradient-to-t from-[#40789D] to-[#7EB3D6]"}
    title={"Entregas de invitaciones"} content={"Por email, WhatsApp o sms, confirma asistencias y envía recordatorios."} />
  </div>

</div>

</section>

  );
};

export default Invitaciones1;