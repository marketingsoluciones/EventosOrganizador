import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Card1 from './Card'; // Import your Card component

export const CaruselPrincipal = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1);
    const cards = [
        { title: 'Bodas', ubication: "absolute left-[18px] right-0 top-[5px] bottom-0", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/32a4df11-f3b6-493b-1d17-69a550d7cd00/public', color: "bg-[#6096B9]" },
        { title: 'Cumpleaños', ubication: "absolute left-[16px] right-0 top-[9px] bottom-0 ", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/2c9e41b7-0e7b-4a0b-9234-7061e299b600/public', color: 'bg-[#7B90A1]' },
        { title: 'BeachClubs', ubication: "absolute left-[26px] right-0 top-[35px] bottom-0", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/cc253fd1-5ace-4518-e4c4-5199e7cd5000/public', color:'bg-[#76CFE5]' },
        { title: 'Conferencias', ubication: "absolute left-[18px] right-0 top-[60px] bottom-0", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/6cfe7975-d5e1-4a4b-6884-8ed69daa5300/public', color: 'bg-[#009DC8]' },
        { title: 'Despedidas', ubication: "absolute left-[26px] right-0 top-[36px] bottom-0", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/a63b236c-708d-4d72-d860-d451d1fa8a00/public', color: 'bg-[#015988]' }, 
        { title: 'Corporativos', ubication: "absolute left-[24px] right-0 top-[50px] bottom-0", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/1a37e06b-8876-492c-56b6-1bbae9187d00/public', color: 'bg-[#EAB308]' },
        { title: 'Gastronómicos', ubication: "absolute left-[16px] right-0 top-[7px] bottom-0", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/bd47c813-3815-499c-ca43-155d19296a00/public', color: 'bg-[#FFDA66]' },  
        { title: 'Festivales', ubication: "absolute left-[22px] right-0 top-[60px] bottom-0 ", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/3c4a4c3d-8742-4060-fcfb-fa19fb3a4900/public', color: 'bg-[#FC9A1F]' },
        
    ];


  return (
    <Swiper
    
      grabCursor={true}
      centeredSlides={true}
      modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
      spaceBetween={179}
      slidesPerView={10} // Dynamically set slidesPerView
      loop={true}
      autoplay={{ delay: 1500, disableOnInteraction: false }} // Set autoplay delay and behavior
      breakpoints={{
        340: {
          slidesPerView: 2,
          spaceBetween: 6,
        },
        1200: {
          slidesPerView: 8,
          spaceBetween: 10,
        },
      }}
      className="swiper_container md:max-w-[1200px] max-w-[360px] mx-auto" // Set max width and center
    >
      {cards.map((item, idx) => (
        <SwiperSlide key={idx}>
          <Card1 item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
