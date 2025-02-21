import React, { useState, useEffect } from 'react';
// Importa react-alice-carousel
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card1 from './Card'; // Import your Card component

export const CaruselPrincipal = () => {
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

    const [visibleCards, setVisibleCards] = useState(cards);
    const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
    setIsMounted(true);
}, []);

    useEffect(() => {
      const updateVisibleCards = () => {
          if (window.innerWidth >= 1024) {
              setVisibleCards(cards);
          } else if (window.innerWidth >= 768) {
              setVisibleCards(cards.slice(0, Math.ceil(cards.length * 0.7)));
          } else {
              setVisibleCards(cards.slice(0, 1));
          }
      };
  
      updateVisibleCards();
      window.addEventListener('resize', updateVisibleCards);
  
      return () => window.removeEventListener('resize', updateVisibleCards);
  }, [cards]);
  
  return (
    <>
        {isMounted && (
          <AliceCarousel
    autoPlay
    infinite
    autoPlayInterval={1500}
    disableDotsControls
    disableButtonsControls
    responsive={{
        390: { items: 1 },
        768: { items: Math.ceil(cards.length * 0.7) },
        1024: { items: cards.length }
    }}
    items={visibleCards.map((item, idx) => (
        <div key={idx} className="w-full md:w-1/2 lg:w-1/4 p-2" style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Card1 item={item} />
        </div>
    ))}
/>
        )}
    </>
);
};