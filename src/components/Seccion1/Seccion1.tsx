"use client";
import React, { FC, useState, useEffect } from "react";


interface propsSeccion1 {
  componentState?: any;
  setComponentState?: any;
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
  image?: any;
  icon?: any; // Replace with the icon path or URL

}



const Seccion1: FC<propsSeccion1> =  ({componentState, setComponentState, title, subtitle1, subtitle2, subtitle3, image}) => {

  const contentData: propsSeccion1[] = [
    {
    title: '¡Tu evento soñado, a un clic de distancia!',
    subtitle1: 'Bodas, cumpleaños, baby shower y más',
    subtitle2: 'Planificación personalizada, asesoría y ejecución',
    subtitle3: 'Convierte tu evento en un recuerdo inolvidable',
    image: '/images/wedding-event.jpg', // Replace with your image path
  },
  {
    title: '¡Vive experiencias inolvidables!',
    subtitle1: 'Fiestas en la playa, conciertos, conferencias y más',
    subtitle2: 'Entradas a la venta, no te las pierdas',
    subtitle3: 'Disfruta de momentos únicos con amigos y familia',
    image: '/images/ticket-event.jpg', // Replace with your image path
  },
  {
    title: '¡Expande tus conocimientos y habilidades!',
    subtitle1: 'Venta de libros, creación de comunidades y cursos online',
    subtitle2: 'Marketing, ventas y desarrollo personal',
    subtitle3: 'Alcanza tus metas y transforma tu vida',
    image: '/images/books-and-courses.jpg', // Replace with your image path
  },
    // Add more content objects as needed
  ];
  
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentContentIndex((prevIndex) =>
          (prevIndex + 1) % contentData.length
        );
      }, 5000); // Change interval as needed (in milliseconds)
  
      return () => clearInterval(intervalId);
    }, [contentData.length]);
  
    const currentContent = contentData[currentContentIndex];


  return (

    <div className="w-[100%] bg-white max-w-full flex flex-col items-center justify-start py-20 px-[58px] box-border tracking-[normal] leading-[normal]">
    

      
      <div className="self-stretch flex md:flex-row flex-col items-center justify-center py-0 pr-2.5 pl-0 box-border gap-[10px] text-black ">
        
        <div className="flex flex-col items-start justify-start gap-4 pt-0  pl-0 box-border max-w-full ">
          
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0  box-border max-w-full">
            <div className="w-[100%] relative leading-[48px] md:text-[36px] text-[28px] font-semibold flex items-center max-w-full">
              <span className="w-full">
                <p className="m-0">{currentContent.title}</p>
              </span>
            </div>
          </div>

          <div className="w-[100%] flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border md:text-base text-xs text-hotmartcom-mako">
            <div className="self-stretch h-[72px] flex flex-col items-start justify-between">
              {/* Loop through all content properties dynamically */}
              {Object.keys(currentContent)
                .filter((key) => key !== 'title' && key !== 'image') // Exclude title and image
                .map((key, index) => (
                  <div key={index} className="flex flex-row items-center justify-start py-px pl-0 box-border gap-[8px] min-h-[24px] mq450:pr-5 mq450:box-border">
                    <div className="flex flex-row items-start justify-start">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.82448 11.3495L0.757812 6.2828L2.02448 5.01614L5.82448 8.81614L13.98 0.660583L15.2467 1.92725L5.82448 11.3495Z" fill="#6096B9"/>
                    </svg>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <b className="relative inline-block min-w-[99px]">{currentContent[key]}</b>
                    </div>
                  </div>
                ))}
            </div>

          </div>

          <button className="cursor-pointer md:py-3.5 py-2 md:px-[25px] px-4 bg-[#6096B9] rounded-[47px] box-border flex flex-row items-start justify-center min-h-[40px] border-[1px] border-solid border-[#6096B9]">
                <div className="flex flex-row items-center justify-start">
                  <b className="relative md:text-[18.5px] text-sm leading-[19px] inline-block text-white text-center min-w-[127px]">
                    Empieza gratis
                  </b>
                  <div className="flex flex-col items-start justify-start py-0 pr-0 pl-3">
                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.7454 8.34499L12.0285 15.4665C11.9071 15.6283 11.7048 15.6688 11.543 15.6688C11.3811 15.6688 11.2193 15.6283 11.0979 15.5069C10.8147 15.2642 10.8147 14.8595 11.0574 14.6167L16.7222 8.5473H1.46772C1.10355 8.5473 0.820312 8.26407 0.820312 7.94036C0.820312 7.61666 1.10355 7.25249 1.46772 7.25249H16.7222L11.0574 1.22354C10.8147 0.980753 10.8147 0.576127 11.0979 0.333353C11.3811 0.0905765 11.7858 0.0905764 12.0285 0.373816L18.7454 7.49527C18.9881 7.73805 18.9881 8.10221 18.7454 8.34499Z" fill="white"/>
                  </svg>

                  </div>
                </div>
              </button>

        </div>


        <img className="h-80 w-[400px] max-h-[320px] max-w-full"
          alt="Content image"
          src={currentContent.image}
        />
      </div>
  </div>

  );
};

export default Seccion1;



