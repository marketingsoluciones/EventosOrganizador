import React, { useRef, useState } from 'react';
import MisEventos from './MisEventos';
import Resumen1 from './Resumen';
import Invitados1 from './Invitados';
import Mesas1 from './Mesas';
import ListaDeRegalos1 from './ListaDeRegalos';
import Presupuesto1 from './Presupuesto';
import Invitaciones1 from './Invitaciones';

interface Props {
  componentState: any;
  setComponentState: any;
}

const TabG1: React.FC<Props> = ({ componentState, setComponentState }) => {
  const [selectedTab, setSelectedTab] = useState<string>('Mis Eventos');

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollLeft -= 100; // Ajusta el valor según tu preferencia
    }
  };

  const handleScrollRight = () => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollLeft += 100;
    }
  };

  const misEventosIcon = (selected: boolean) => (
    
    <svg
    className={`h-8 w-8 mr-2 fill-current ${
      selected ? 'md:text-white text-gray-300 ' : 'md:text-[#E5E7EB] text-white'
    }`}
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
<path d="M10.5249 20.4019L11.094 22.5197C11.1966 22.9015 10.9089 23.2769 10.5134 23.2769H7.70647C7.31103 23.2769 7.02328 22.9016 7.12591 22.5197L7.69503 20.4019H10.5249Z"/>
<path d="M9.10986 20.4021C13.7959 20.4021 17.5947 15.9748 17.5947 10.5135C17.5947 5.05225 13.7959 0.625 9.10986 0.625C4.4238 0.625 0.625 5.05225 0.625 10.5135C0.625 15.9748 4.4238 20.4021 9.10986 20.4021Z"/>
<path d="M24.3051 23.1011L24.8743 25.2189C24.9769 25.6008 24.6891 25.9761 24.2937 25.9761H21.4867C21.0913 25.9761 20.8036 25.6008 20.9062 25.2189L21.4753 23.1011H24.3051Z"/>
<path d="M30.5463 7.51042C30.3776 7.20923 29.9967 7.1018 29.6956 7.27048C29.3944 7.43911 29.2869 7.81998 29.4556 8.12117C30.3024 9.63342 30.7499 11.3941 30.7499 13.2128C30.7499 18.3208 27.224 22.4764 22.89 22.4764C18.5561 22.4764 15.0302 18.3208 15.0302 13.2128C15.0302 8.10486 18.5561 3.9493 22.89 3.9493C23.8613 3.9493 24.8093 4.15587 25.7076 4.56324C26.022 4.70568 26.3923 4.56643 26.5349 4.25212C26.6775 3.93774 26.5383 3.5673 26.2239 3.42481C25.1623 2.94337 24.0406 2.69931 22.89 2.69931C20.6373 2.69931 18.5733 3.64837 16.9813 5.21761C16.2715 3.81287 15.2883 2.61337 14.1005 1.71475C12.6176 0.592936 10.8919 0 9.10992 0C6.65824 0 4.35905 1.106 2.63587 3.11431C0.936061 5.09524 0 7.72298 0 10.5135C0 13.3041 0.936061 15.9318 2.63587 17.9128C3.84274 19.3193 5.3323 20.2825 6.95867 20.7339L6.5223 22.3578C6.42249 22.729 6.49949 23.117 6.73342 23.4221C6.96736 23.7271 7.32205 23.9021 7.70642 23.9021H8.69386C8.88454 24.4886 8.83836 25.1351 8.55354 25.6917C8.0298 26.7151 8.0298 27.937 8.55354 28.9604C8.89473 29.6272 8.89473 30.4234 8.55354 31.0902C8.3963 31.3976 8.51798 31.7741 8.82529 31.9314C8.91642 31.978 9.01367 32.0001 9.10948 32.0001C9.33667 32.0001 9.55579 31.8758 9.66635 31.6597C10.19 30.6363 10.19 29.4144 9.66635 28.391C9.32511 27.7242 9.32511 26.928 9.66635 26.2611C10.0415 25.5279 10.1464 24.6931 9.98398 23.9021H10.5134C10.8978 23.9021 11.2525 23.7272 11.4864 23.4221C11.7204 23.117 11.7974 22.7291 11.6975 22.3578L11.2614 20.7349C12.6463 20.3513 13.9297 19.5969 15.0253 18.5128C16.2581 20.94 18.3099 22.7485 20.7398 23.4298L20.3025 25.0571C20.2026 25.4283 20.2796 25.8163 20.5136 26.1214C20.7475 26.4264 21.1022 26.6014 21.4866 26.6014H22.474C22.6646 27.1879 22.6185 27.8344 22.3336 28.391C21.81 29.4144 21.81 30.6363 22.3336 31.6597C22.4443 31.8758 22.6633 32.0001 22.8905 32.0001C22.9863 32.0001 23.0836 31.978 23.1747 31.9314C23.482 31.7741 23.6036 31.3976 23.4465 31.0902C23.1053 30.4234 23.1053 29.6272 23.4465 28.9604C23.8216 28.2272 23.9266 27.3923 23.7641 26.6014H24.2936C24.6779 26.6014 25.0326 26.4264 25.2666 26.1213C25.5005 25.8163 25.5775 25.4283 25.4777 25.057L25.0413 23.4332C26.6677 22.9818 28.1573 22.0186 29.3641 20.6121C31.0639 18.6311 32 16.0034 32 13.2128C31.9999 11.1807 31.4972 9.20886 30.5463 7.51042ZM10.4823 22.6521H7.73748L8.18836 20.9744C8.49255 21.0093 8.79998 21.0271 9.10992 21.0271C9.41998 21.0271 9.72742 21.0095 10.0315 20.9746L10.4823 22.6521ZM9.10992 19.7771C4.77593 19.7771 1.25 15.6215 1.25 10.5136C1.25 5.40561 4.77593 1.25 9.10992 1.25C12.0307 1.25 14.7337 3.19543 16.0817 6.23574C14.6509 8.0933 13.7802 10.5378 13.7802 13.2128C13.7802 14.6495 14.0315 16.0197 14.4855 17.2682C13.0227 18.8888 11.1267 19.7771 9.10992 19.7771ZM24.2624 25.3514H21.5176L21.9687 23.6729C22.2717 23.7083 22.579 23.7264 22.89 23.7264C23.2 23.7264 23.5074 23.7086 23.8116 23.6736L24.2624 25.3514Z"/>
<path d="M28.2891 6.20947C28.4534 6.20947 28.6147 6.1426 28.7309 6.02635C28.8471 5.9101 28.9141 5.74885 28.9141 5.58447C28.9141 5.4201 28.8472 5.25885 28.7309 5.1426C28.6147 5.02635 28.4534 4.95947 28.2891 4.95947C28.1247 4.95947 27.9634 5.02635 27.8472 5.1426C27.731 5.25885 27.6641 5.41947 27.6641 5.58447C27.6641 5.74885 27.7309 5.9101 27.8472 6.02635C27.9634 6.1426 28.1247 6.20947 28.2891 6.20947Z"/>
</svg>



  );

  const resumenIcon = (selected: boolean) => (
    <svg
    className={`h-8 w-8 mr-2 fill-current ${
      selected ? 'md:text-white text-gray-300 ' : 'md:text-[#E5E7EB] text-white'
    }`}
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
<path d="M15.9766 0.0983276C12.7109 0.0983276 9.92969 1.66278 8.90625 3.84833H5.97656C3.21875 3.84833 0.976562 5.52997 0.976562 7.59833V26.3483C0.976562 28.4167 3.21875 30.0983 5.97656 30.0983H25.9766C28.7344 30.0983 30.9766 28.4167 30.9766 26.3483V7.59833C30.9766 5.52997 28.7344 3.84833 25.9766 3.84833H23.0469C22.0234 1.66278 19.2422 0.0983276 15.9766 0.0983276ZM15.9766 3.84833C16.6396 3.84833 17.2755 4.04587 17.7443 4.3975C18.2132 4.74913 18.4766 5.22605 18.4766 5.72333C18.4766 6.22061 18.2132 6.69752 17.7443 7.04915C17.2755 7.40078 16.6396 7.59833 15.9766 7.59833C15.3135 7.59833 14.6776 7.40078 14.2088 7.04915C13.74 6.69752 13.4766 6.22061 13.4766 5.72333C13.4766 5.22605 13.74 4.74913 14.2088 4.3975C14.6776 4.04587 15.3135 3.84833 15.9766 3.84833ZM6.60156 16.0358C6.60156 15.6629 6.79911 15.3052 7.15074 15.0415C7.50237 14.7777 7.97928 14.6296 8.47656 14.6296C8.97384 14.6296 9.45076 14.7777 9.80239 15.0415C10.154 15.3052 10.3516 15.6629 10.3516 16.0358C10.3516 16.4088 10.154 16.7665 9.80239 17.0302C9.45076 17.2939 8.97384 17.4421 8.47656 17.4421C7.97928 17.4421 7.50237 17.2939 7.15074 17.0302C6.79911 16.7665 6.60156 16.4088 6.60156 16.0358ZM14.7266 15.0983H24.7266C25.4141 15.0983 25.9766 15.5202 25.9766 16.0358C25.9766 16.5515 25.4141 16.9733 24.7266 16.9733H14.7266C14.0391 16.9733 13.4766 16.5515 13.4766 16.0358C13.4766 15.5202 14.0391 15.0983 14.7266 15.0983ZM6.60156 21.6608C6.60156 21.2879 6.79911 20.9302 7.15074 20.6665C7.50237 20.4027 7.97928 20.2546 8.47656 20.2546C8.97384 20.2546 9.45076 20.4027 9.80239 20.6665C10.154 20.9302 10.3516 21.2879 10.3516 21.6608C10.3516 22.0338 10.154 22.3915 9.80239 22.6552C9.45076 22.9189 8.97384 23.0671 8.47656 23.0671C7.97928 23.0671 7.50237 22.9189 7.15074 22.6552C6.79911 22.3915 6.60156 22.0338 6.60156 21.6608ZM13.4766 21.6608C13.4766 21.1452 14.0391 20.7233 14.7266 20.7233H24.7266C25.4141 20.7233 25.9766 21.1452 25.9766 21.6608C25.9766 22.1765 25.4141 22.5983 24.7266 22.5983H14.7266C14.0391 22.5983 13.4766 22.1765 13.4766 21.6608Z"/>
</svg>
  );

  const InvitadosIcon = (selected: boolean) => (
    <svg
    className={`h-8 w-8 mr-2 fill-current ${
      selected ? 'md:text-white text-gray-300 ' : 'md:text-[#E5E7EB] text-white'
    }`}
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

<path d="M16.875 15C17.8696 15 18.8234 15.3951 19.5266 16.0984C20.2299 16.8016 20.625 17.7554 20.625 18.75V21.5625C20.625 25.4137 16.71 28.125 10.3125 28.125C3.915 28.125 0 25.4137 0 21.5625V18.75C0 17.7554 0.395088 16.8016 1.09835 16.0984C1.80161 15.3951 2.75544 15 3.75 15H16.875ZM26.25 15C27.2446 15 28.1984 15.3951 28.9016 16.0984C29.6049 16.8016 30 17.7554 30 18.75V19.6875C30 23.6044 27.06 26.25 21.5625 26.25C21.2981 26.25 21.0375 26.2444 20.7863 26.2312C21.7969 25.0556 22.395 23.6325 22.4869 22.0106L22.5 21.5625V18.75C22.5 17.4525 22.0612 16.2563 21.3225 15.3056L21.0656 15H26.25ZM10.3125 0C11.1743 -1.28418e-08 12.0277 0.169744 12.8239 0.49954C13.6201 0.829337 14.3435 1.31273 14.9529 1.92211C15.5623 2.5315 16.0457 3.25494 16.3755 4.05114C16.7053 4.84734 16.875 5.7007 16.875 6.5625C16.875 7.4243 16.7053 8.27766 16.3755 9.07386C16.0457 9.87006 15.5623 10.5935 14.9529 11.2029C14.3435 11.8123 13.6201 12.2957 12.8239 12.6255C12.0277 12.9553 11.1743 13.125 10.3125 13.125C8.57202 13.125 6.90282 12.4336 5.67211 11.2029C4.4414 9.97218 3.75 8.30298 3.75 6.5625C3.75 4.82202 4.4414 3.15282 5.67211 1.92211C6.90282 0.691404 8.57202 2.59352e-08 10.3125 0ZM23.4375 3.75C24.6807 3.75 25.873 4.24386 26.7521 5.12294C27.6311 6.00201 28.125 7.1943 28.125 8.4375C28.125 9.6807 27.6311 10.873 26.7521 11.7521C25.873 12.6311 24.6807 13.125 23.4375 13.125C22.1943 13.125 21.002 12.6311 20.1229 11.7521C19.2439 10.873 18.75 9.6807 18.75 8.4375C18.75 7.1943 19.2439 6.00201 20.1229 5.12294C21.002 4.24386 22.1943 3.75 23.4375 3.75Z"/>
</svg>
  );

  const MesasIcon = (selected: boolean) => (
    <svg
    className={`h-8 w-8 mr-2 fill-current ${
      selected ? 'md:text-white text-gray-300 ' : 'md:text-[#E5E7EB] text-white'
    }`}
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
<path d="M24.267 16.4036C23.9955 11.21 19.6744 7.19083 14.6775 7.48164C9.48019 7.7855 5.50359 12.0023 5.73574 16.9628C5.97913 22.1583 10.2609 26.183 15.2841 25.9332C20.4982 25.6722 24.5254 21.3977 24.267 16.4036Z"/>
<path d="M1.43523 12.7821C2.17367 13.299 2.95612 13.7506 3.77363 14.1318C3.98145 14.2306 4.52252 14.0553 4.64234 13.8484C5.59156 12.3216 6.48836 10.7595 7.3683 9.18797C7.47502 9.00155 7.47689 8.52619 7.3683 8.45907C6.12515 7.71341 4.98496 6.73471 3.68189 6.64523C1.99689 6.62846 0.654508 7.59596 0.180836 8.99409C-0.0538966 9.67528 -0.0583591 10.4142 0.168129 11.0982C0.394618 11.7821 0.839619 12.3735 1.43523 12.7821Z"/>
<path d="M28.3842 20.4842C27.7345 20.061 27.0268 19.7236 26.3697 19.3116C25.8847 19.0077 25.5796 19.1252 25.3081 19.5894C24.4282 21.123 23.5389 22.6516 22.6402 24.1752C22.3837 24.6114 22.4361 24.9209 22.8948 25.167C23.6325 25.5696 24.3327 26.045 25.0909 26.4029C27.405 27.4972 30.0149 25.8679 29.9999 23.1648C29.9662 22.1228 29.4158 21.1571 28.3842 20.4842Z"/>
<path d="M4.65376 19.5669C4.52457 19.3581 3.99286 19.1792 3.78504 19.2761C2.96739 19.6578 2.18384 20.108 1.44289 20.622C0.846692 21.0299 0.400248 21.6202 0.171194 22.3034C-0.0578595 22.9866 -0.0570414 23.7255 0.173525 24.4082C0.635964 25.8026 1.96712 26.7645 3.71764 26.7589C4.99076 26.703 6.11971 25.6963 7.36474 24.9618C7.47894 24.8947 7.48081 24.4249 7.36474 24.2311C6.49602 22.6596 5.6011 21.0955 4.65376 19.5669Z"/>
<path d="M25.2949 13.8091C25.5214 14.2006 25.7779 14.4504 26.2666 14.154C27.0155 13.7029 27.7981 13.3189 28.5133 12.8286C29.5018 12.1556 29.9961 11.1825 29.9961 10.3455C29.9698 7.48959 27.3075 5.90504 25.0159 7.03287C24.2914 7.38893 23.6155 7.84192 22.9078 8.2334C22.4622 8.4776 22.3667 8.77401 22.6307 9.22141C23.5275 10.7444 24.4093 12.2787 25.2949 13.8091Z"/>
<path d="M12.4327 6.38003C13.2733 6.36512 14.1177 6.38003 14.9583 6.38003C15.8308 6.38003 16.7033 6.36699 17.5795 6.38003C18.1599 6.39122 18.4444 6.17125 18.4201 5.5598C18.3883 4.75261 18.4369 3.94356 18.3864 3.13637C18.326 2.28478 17.9436 1.48764 17.3163 0.90563C16.689 0.323618 15.8635 0 15.0061 0C14.1487 0 13.3232 0.323618 12.6959 0.90563C12.0686 1.48764 11.6862 2.28478 11.6258 3.13637C11.5752 3.9417 11.6258 4.75075 11.5902 5.5598C11.5621 6.1787 11.8561 6.39122 12.4327 6.38003Z"/>
<path d="M17.5723 27.0331C16.7317 27.0498 15.8873 27.0331 15.0467 27.0331V27.0219C14.1742 27.0219 13.3018 27.0349 12.4256 27.0219C11.8433 27.0107 11.5606 27.2344 11.5849 27.8458C11.6168 28.6512 11.57 29.4621 11.6205 30.2693C11.6809 31.1209 12.0633 31.918 12.6906 32.5C13.3179 33.082 14.1434 33.4056 15.0008 33.4056C15.8582 33.4056 16.6838 33.082 17.311 32.5C17.9383 31.918 18.3207 31.1209 18.3811 30.2693C18.4317 29.4639 18.3811 28.6549 18.4148 27.8458C18.4429 27.2307 18.149 27.02 17.5723 27.0331Z"/>
</svg>
  );
  const ListaDeRegalosIcon = (selected: boolean) => (
    <svg
    className={`h-8 w-8 mr-2 fill-current ${
      selected ? 'md:text-white text-gray-300 ' : 'md:text-[#E5E7EB] text-white'
    }`}
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
<path d="M2 17.0474V29.8638C2 31.0429 2.898 31.9999 4 31.9999H14V17.0474H2Z"/>
<path d="M30 8.50317H23.672C24.126 8.17207 24.516 7.84312 24.788 7.54834C26.402 5.81599 26.402 2.99637 24.788 1.26402C23.22 -0.423476 20.488 -0.419203 18.922 1.26402C18.054 2.19321 15.754 5.97619 16.072 8.50317H15.928C16.244 5.97619 13.944 2.19321 13.078 1.26402C11.51 -0.419203 8.778 -0.419203 7.212 1.26402C5.6 2.99637 5.6 5.81599 7.21 7.54834C7.484 7.84312 7.874 8.17207 8.328 8.50317H2C0.898 8.50317 0 9.46226 0 10.6392V13.8433C0 14.4329 0.448 14.9114 1 14.9114H14V10.6392H18V14.9114H31C31.552 14.9114 32 14.4329 32 13.8433V10.6392C32 9.46226 31.104 8.50317 30 8.50317ZM13.882 8.43267C13.882 8.43267 13.798 8.50317 13.512 8.50317C12.13 8.50317 9.492 6.96947 8.63 6.04241C7.792 5.14099 7.792 3.67137 8.63 2.76995C9.036 2.33419 9.574 2.09495 10.146 2.09495C10.716 2.09495 11.254 2.33419 11.66 2.76995C13.008 4.21821 14.348 7.91788 13.882 8.43267ZM18.486 8.50317C18.202 8.50317 18.118 8.43481 18.118 8.43267C17.652 7.91788 18.992 4.21821 20.34 2.76995C21.146 1.90057 22.556 1.8963 23.37 2.76995C24.21 3.67137 24.21 5.14099 23.37 6.04241C22.508 6.96947 19.87 8.50317 18.486 8.50317Z"/>
<path d="M18 17.0474V31.9999H28C29.104 31.9999 30 31.0429 30 29.8638V17.0474H18Z"/>
</svg>
  );
  const PresupuestoIcon = (selected: boolean) => (
    <svg
    className={`h-8 w-8 mr-2 fill-current ${
      selected ? 'md:text-white text-gray-300 ' : 'md:text-[#E5E7EB] text-white'
    }`}
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
<g clip-path="url(#clip0_208_1003)">
<path d="M2.63672 0C1.18283 0 0 1.18283 0 2.63672V13.3594H13.3594V0H2.63672ZM8.73047 7.55859H7.55859V8.73047C7.55859 9.21586 7.16508 9.60938 6.67969 9.60938C6.1943 9.60938 5.80078 9.21586 5.80078 8.73047V7.55859H4.62891C4.14352 7.55859 3.75 7.16508 3.75 6.67969C3.75 6.1943 4.14352 5.80078 4.62891 5.80078H5.80078V4.62891C5.80078 4.14352 6.1943 3.75 6.67969 3.75C7.16508 3.75 7.55859 4.14352 7.55859 4.62891V5.80078H8.73047C9.21586 5.80078 9.60938 6.1943 9.60938 6.67969C9.60938 7.16508 9.21586 7.55859 8.73047 7.55859Z"/>
<path d="M27.9981 13.3594H28.4766V2.63672C28.4766 1.18283 27.2937 0 25.8398 0H15.1172V13.0424C16.8566 11.7337 19.0179 10.957 21.3574 10.957C23.88 10.957 26.1954 11.86 27.9981 13.3594ZM18.8672 6.67969C18.8672 6.1943 19.2607 5.80078 19.7461 5.80078H23.8477C24.333 5.80078 24.7266 6.1943 24.7266 6.67969C24.7266 7.16508 24.333 7.55859 23.8477 7.55859H19.7461C19.2607 7.55859 18.8672 7.16508 18.8672 6.67969Z"/>
<path d="M13.0424 15.1172H0V25.8398C0 27.2937 1.18283 28.4766 2.63672 28.4766H13.3594V27.9981C11.86 26.1954 10.957 23.8799 10.957 21.3574C10.957 19.0179 11.7337 16.8566 13.0424 15.1172ZM8.76598 22.6403C9.10922 22.9835 9.10922 23.54 8.76598 23.8832C8.59441 24.0548 8.36947 24.1406 8.14453 24.1406C7.91959 24.1406 7.69465 24.0548 7.52309 23.8832L6.67969 23.0398L5.83629 23.8832C5.66473 24.0548 5.43979 24.1406 5.21484 24.1406C4.9899 24.1406 4.76496 24.0548 4.5934 23.8832C4.25016 23.5399 4.25016 22.9835 4.5934 22.6402L5.43674 21.7969L4.59334 20.9535C4.2501 20.6102 4.2501 20.0538 4.59334 19.7105C4.93652 19.3673 5.49305 19.3673 5.83629 19.7105L6.67969 20.5539L7.52309 19.7105C7.86627 19.3673 8.42279 19.3673 8.76604 19.7105C9.10928 20.0538 9.10928 20.6102 8.76604 20.9535L7.92264 21.7969L8.76598 22.6403Z"/>
<path d="M21.3574 12.7148C16.5919 12.7148 12.7148 16.5919 12.7148 21.3574C12.7148 26.123 16.5919 30 21.3574 30C26.123 30 30 26.123 30 21.3574C30 16.5919 26.123 12.7148 21.3574 12.7148ZM23.4082 23.7012H19.3066C18.8212 23.7012 18.4277 23.3077 18.4277 22.8223C18.4277 22.3369 18.8212 21.9434 19.3066 21.9434H23.4082C23.8936 21.9434 24.2871 22.3369 24.2871 22.8223C24.2871 23.3077 23.8936 23.7012 23.4082 23.7012ZM23.4082 20.7715H19.3066C18.8212 20.7715 18.4277 20.378 18.4277 19.8926C18.4277 19.4072 18.8212 19.0137 19.3066 19.0137H23.4082C23.8936 19.0137 24.2871 19.4072 24.2871 19.8926C24.2871 20.378 23.8936 20.7715 23.4082 20.7715Z"/>
</g>
<defs>
<clipPath id="clip0_208_1003">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>

</svg>
  );
  const InvitacionesIcon = (selected: boolean) => (
    <svg
    className={`h-8 w-8 mr-2 fill-current ${
      selected ? 'md:text-white text-gray-300 ' : 'md:text-[#E5E7EB] text-white'
    }`}
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
<path d="M29.9997 11.5563C29.994 11.4444 29.958 11.3355 29.8989 11.2381C29.8917 11.2263 29.7874 11.0907 29.7267 11.0454L27.2725 9.20468L27.2727 2.7273C27.2728 1.22105 26.0517 0 24.5455 0H5.45476C3.94857 0 2.72752 1.22098 2.72752 2.72724V9.20474L0.273283 11.0454C0.212623 11.0908 0.108307 11.2263 0.101085 11.2382C0.0420233 11.3355 0.00603681 11.4445 0.000284085 11.5563C-0.000355106 11.5687 0.000284085 27.2723 0.000284085 27.2723C0.000284085 28.7763 1.22338 29.9995 2.72752 29.9995H27.2725C28.7766 29.9995 29.9997 28.7764 29.9997 27.2723C29.9997 27.2723 30.0004 11.5686 29.9997 11.5563ZM12.2731 4.09089C13.2965 4.09089 14.256 4.46705 15.0004 5.14358C15.7448 4.46712 16.7042 4.09089 17.7276 4.09089C19.9835 4.09089 21.8184 5.92588 21.8184 8.18172C21.8184 9.27499 21.393 10.3024 20.62 11.0741L15.4805 16.1656C15.3473 16.2975 15.1742 16.3634 15.0004 16.3634C14.8267 16.3634 14.6536 16.2975 14.5204 16.1656L9.38291 11.076C8.60789 10.3024 8.18245 9.27499 8.18245 8.18172C8.18232 5.92588 10.0173 4.09089 12.2731 4.09089ZM15.9289 21.4269C15.7644 21.5727 15.4215 21.8178 14.9787 21.8178C14.6551 21.8178 14.3428 21.6866 14.0499 21.4269C11.4131 19.0926 4.09034 13.3761 1.80568 11.6L2.94887 10.7426C2.96505 10.758 2.97265 10.7798 2.99049 10.7938C5.5406 12.7793 11.7714 17.6565 14.5439 20.0488C14.6717 20.1593 14.8309 20.2146 14.9893 20.2146C15.1478 20.2146 15.3062 20.1593 15.4348 20.0495C18.2093 17.6578 24.4534 12.78 27.0088 10.7938C27.0268 10.78 27.0344 10.7578 27.0507 10.7423L28.1937 11.5995C25.9019 13.378 18.5453 19.1106 15.9289 21.4269Z"/>
</svg>
  );


  return (
    <main className="w-full flex flex-col items-center justify-start py-0 gap-6">
      <div className='w-full flex flex-col items-center justify-center gap-0 relative'>
        <div className='w-[100%] border-t-[44px] md:border-t-[10px] lg:border-t-[10px]  border-[#6096B9]'/>
        <div className="w-full flex items-center justify-center">
          <svg width="100%" height="auto" viewBox="0 0 1072 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.000305176 0C17.6569 4.36173 30.7781 20.6266 30.7781 40.017C30.7781 62.7478 48.8097 81.1835 71.0413 81.1835H1000.2C1022.44 81.1835 1040.47 62.7478 1040.47 40.017C1040.47 20.6266 1053.59 4.36173 1071.25 0H0.000305176Z" fill="#6096B9"/>
          </svg>
        </div>
        <div className='absolute top-0 w-full h-full flex flex-row items-center justify-between space-x-2 z-50'>
          <button className="w-5 h-5 rounded-full border-[1px] border-gray-400 text-gray-600 md:hidden" onClick={handleScrollLeft}>
            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>
          </button>
          <div ref={scrollableContainerRef} className="flex flex-row overflow-auto w-full items-center justify-center z-50">
            <button onClick={() => handleTabChange('Mis Eventos')} className={`tab-button ${selectedTab === 'Mis Eventos' ? 'flex flex-col w-[100px] h-full items-center justify-center px-2 py-1 text-gray-300 font-semibold' : 'flex flex-col w-[100px] h-full items-center justify-center px-2 py-1 text-white'}`}>
              {misEventosIcon(selectedTab === 'Mis Eventos')}
              Eventos
            </button>
            <button onClick={() => handleTabChange('Invitados')} className={`tab-button ${selectedTab === 'Invitados' ? 'flex flex-col h-full items-center justify-center px-2 py-1 text-gray-300 font-semibold' : 'flex flex-col h-full items-center justify-center px-2 py-1 text-white'}`}>
              {InvitadosIcon(selectedTab === 'Invitados')}
              Invitados
            </button>
            <button onClick={() => handleTabChange('Mesas')} className={`tab-button ${selectedTab === 'Mesas' ? 'flex flex-col h-full items-center justify-center px-2 py-1 text-gray-300 font-semibold' : 'flex flex-col h-full items-center justify-center px-2 py-1 text-white'}`}>
              {MesasIcon(selectedTab === 'Mesas')}
              Mesas
            </button>
            <button onClick={() => handleTabChange('Lista de Regalos')} className={`tab-button ${selectedTab === 'Lista de Regalos' ? 'flex flex-col h-full items-center justify-center px-2 py-1 text-gray-300 font-semibold' : 'flex flex-col h-full items-center justify-center px-2 py-1 text-white'}`}>
              {ListaDeRegalosIcon(selectedTab === 'Lista de Regalos')}
              Regalos
            </button>
            <button onClick={() => handleTabChange('Presupuesto')} className={`tab-button ${selectedTab === 'Presupuesto' ? 'flex flex-col h-full items-center justify-center px-2 py-1 text-gray-300 font-semibold' : 'flex flex-col h-full items-center justify-center px-2 py-1 text-white'}`}>
              {PresupuestoIcon(selectedTab === 'Presupuesto')}
              Presupuesto
            </button>
            <button onClick={() => handleTabChange('Invitaciones')} className={`tab-button ${selectedTab === 'Invitaciones' ? 'flex flex-col h-full items-center justify-center px-2 py-1 text-gray-300 font-semibold' : 'flex flex-col h-full items-center justify-center px-2 py-1 text-white'}`}>
              {InvitacionesIcon(selectedTab === 'Invitaciones')}
              Invitaciones
            </button>
          </div>
          <button className="w-5 h-5 rounded-full border-[1px] border-gray-400 text-gray-600 md:hidden" onClick={handleScrollRight}>
            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
          </button>
        </div>
      </div>
  
      {/* Contenedor de contenido */}
      <div className="mt-4">
        {selectedTab === 'Mis Eventos' && <MisEventos componentState={componentState} setComponentState={setComponentState}/>}
        {selectedTab === 'Invitados' && <Invitados1 componentState={componentState} setComponentState={setComponentState}/>}
        {selectedTab === 'Mesas' && <Mesas1 componentState={componentState} setComponentState={setComponentState}/>}
        {selectedTab === 'Lista de Regalos' && <ListaDeRegalos1 componentState={componentState} setComponentState={setComponentState}/>}
        {selectedTab === 'Presupuesto' && <Presupuesto1 componentState={componentState} setComponentState={setComponentState}/>}
        {selectedTab === 'Invitaciones' && <Invitaciones1 componentState={componentState} setComponentState={setComponentState}/>}
      </div>
    </main>
  );
};

export default TabG1;
