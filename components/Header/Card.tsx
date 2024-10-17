
import React from 'react';

interface CardProps {
  item: {
    title: string;
    imgUrl: string;
    color: string; // Prop para recibir la clase CSS del color
    ubication: string;
};
}

const Card1: React.FC<CardProps> = ({ item }) => {
  return (
    <div className={`w-[176.9px] h-[170px] relative flex flex-col ${item.color} items-center justify-start shadow-xl rounded-lg p-4`}>
      <h2 className="text-base font-bold text-center text-white z-50">{item.title}</h2>
      <img className={`${item.ubication}`} src={item.imgUrl} alt="" />
    </div>
  );
};

export default Card1;