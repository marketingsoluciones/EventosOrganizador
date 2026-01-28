import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Card1 from './Card'; // Import your Card component

export const CaruselPrincipal = () => {
    const cards = [
        { title: '¿Qué eventos creamos hoy?', ubication: "", imgUrl: '', color: "bg-gradient-to-br from-[#6096B9] via-[#4b7591] to-[#6096B9]", isIntro: true },
        { title: 'Bodas', ubication: "absolute left-[18px] right-0 top-[5px] bottom-0", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/32a4df11-f3b6-493b-1d17-69a550d7cd00/public', color: "bg-gradient-to-br from-[#FF6B9D] via-[#C239B3] to-[#6096B9]" },
        { title: 'Cumpleaños', ubication: "absolute left-[16px] right-0 top-[9px] bottom-0 ", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/2c9e41b7-0e7b-4a0b-9234-7061e299b600/public', color: 'bg-gradient-to-br from-[#FFA07A] via-[#FF6B9D] to-[#FF1493]' },
        { title: 'BeachClubs', ubication: "absolute left-[26px] right-0 top-[35px] bottom-0", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/cc253fd1-5ace-4518-e4c4-5199e7cd5000/public', color:'bg-gradient-to-br from-[#4FACFE] via-[#00F2FE] to-[#43E97B]' },
        { title: 'Conferencias', ubication: "absolute left-[18px] right-0 top-[60px] bottom-0", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/6cfe7975-d5e1-4a4b-6884-8ed69daa5300/public', color: 'bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb]' },
        { title: 'Despedidas', ubication: "absolute left-[26px] right-0 top-[36px] bottom-0", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/a63b236c-708d-4d72-d860-d451d1fa8a00/public', color: 'bg-gradient-to-br from-[#fa709a] via-[#fee140] to-[#30cfd0]' },
        { title: 'Corporativos', ubication: "absolute left-[24px] right-0 top-[50px] bottom-0", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/1a37e06b-8876-492c-56b6-1bbae9187d00/public', color: 'bg-gradient-to-br from-[#f093fb] via-[#f5576c] to-[#ffd700]' },
        { title: 'Gastronómicos', ubication: "absolute left-[16px] right-0 top-[7px] bottom-0", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/bd47c813-3815-499c-ca43-155d19296a00/public', color: 'bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#ff6b6b]' },
        { title: 'Festivales', ubication: "absolute left-[22px] right-0 top-[60px] bottom-0 ", imgUrl: 'https://imagedelivery.net/EfbdVs7eFECYhyroHhep9w/3c4a4c3d-8742-4060-fcfb-fa19fb3a4900/public', color: 'bg-gradient-to-br from-[#ffc837] via-[#ff8008] to-[#e43a15]' },

    ];


  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      speed={800}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      navigation={true}
      pagination={{
        clickable: true,
        dynamicBullets: true
      }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 8,
        stretch: 0,
        depth: 200,
        modifier: 1.2,
        slideShadows: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1.1,
          spaceBetween: 20,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 5,
            depth: 150,
            modifier: 1,
          }
        },
        480: {
          slidesPerView: 1.2,
          spaceBetween: 20,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 6,
            depth: 160,
            modifier: 1,
          }
        },
        640: {
          slidesPerView: 1.4,
          spaceBetween: 25,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 7,
            depth: 180,
            modifier: 1.1,
          }
        },
        768: {
          slidesPerView: 1.8,
          spaceBetween: 25,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 2.3,
          spaceBetween: 30,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 2.8,
          spaceBetween: 35,
          centeredSlides: true,
        },
      }}
      className="swiper_container w-full md:max-w-[1400px] max-w-full mx-auto py-20 px-4"
    >
      {cards.map((item, idx) => (
        <SwiperSlide key={idx} className="flex items-center justify-center">
          <Card1 item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
