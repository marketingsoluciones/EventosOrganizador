
import { FC, useState } from "react";
import Card4 from "./Card4";
interface Props {
  componentState: any;
  setComponentState: any;
}
const ListaDeRegalos1: FC<Props> = ({componentState, setComponentState}) => {
  return (

<section className="self-stretch flex md:flex-row rounded-2xl items-start justify-center py-3 px-3 box-border max-w-full text-left text-base text-[#6096B9] font-inter">
<div className="w-auto flex md:flex-row flex-col items-center justify-start md:gap-[32px] gap-[16px]">
  
  <div className="h-auto md:flex-[0.75] flex flex-row items-start justify-start py-0 px-4 box-border bg-cover bg-no-repeat bg-[top] max-w-full ">
    <img src="https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/83ea4014-4ee7-471a-395a-6b27c917c400/public" alt="" />
  </div>

  <div className="md:flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
    <Card4 
    img={
<svg width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.73804 21.8412V38.2625C2.73804 39.7732 3.9669 40.9994 5.47492 40.9994H19.1593V21.8412H2.73804Z" fill="white"/>
<path d="M41.0532 10.8948H32.3937C33.015 10.4706 33.5487 10.0491 33.9209 9.67146C36.1296 7.45184 36.1296 3.83916 33.9209 1.61955C31.7752 -0.542586 28.0366 -0.537112 25.8936 1.61955C24.7058 2.81009 21.5584 7.65711 21.9936 10.8948H21.7965C22.229 7.65711 19.0815 2.81009 17.8965 1.61955C15.7508 -0.537112 12.0122 -0.537112 9.86919 1.61955C7.66327 3.83916 7.66327 7.45184 9.86646 9.67146C10.2414 10.0491 10.7751 10.4706 11.3964 10.8948H2.73688C1.22886 10.8948 0 12.1237 0 13.6317V17.737C0 18.4924 0.613061 19.1055 1.36844 19.1055H19.1582V13.6317H24.6319V19.1055H42.4217C43.177 19.1055 43.7901 18.4924 43.7901 17.737V13.6317C43.7901 12.1237 42.564 10.8948 41.0532 10.8948ZM18.9967 10.8045C18.9967 10.8045 18.8817 10.8948 18.4904 10.8948C16.5992 10.8948 12.9892 8.92976 11.8096 7.74195C10.6629 6.58699 10.6629 4.70402 11.8096 3.54905C12.3652 2.99073 13.1014 2.6842 13.8842 2.6842C14.6642 2.6842 15.4004 2.99073 15.956 3.54905C17.8007 5.40466 19.6344 10.1449 18.9967 10.8045ZM25.297 10.8948C24.9084 10.8948 24.7934 10.8073 24.7934 10.8045C24.1557 10.1449 25.9894 5.40466 27.8341 3.54905C28.937 2.43514 30.8665 2.42967 31.9805 3.54905C33.1299 4.70402 33.1299 6.58699 31.9805 7.74195C30.8009 8.92976 27.1909 10.8948 25.297 10.8948Z" fill="white"/>
<path d="M24.6272 21.8412V40.9994H38.3116C39.8224 40.9994 41.0485 39.7732 41.0485 38.2625V21.8412H24.6272Z" fill="white"/>
</svg>

} 
color={"bg-gradient-to-t from-[#40789D] to-[#7EB3D6]"}
    title={"Lista de regalos"} content={"Crea la lista de regalos soñados y compártelo con los invitados. "} />
  </div>
</div>

</section>

  );
};

export default ListaDeRegalos1;