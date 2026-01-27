import React, { FC } from 'react';

interface props 
{
    items: any;
}


const CardInfo: FC<props> = ({items}) => {


  return (
    <div className="w-[320px] h-[280px] flex flex-col rounded-xl bg-white shadow-md hover:shadow-lg box-border border border-gray-100 hover:border-[#6096B9] items-start justify-between py-7 px-7 gap-5 max-w-[320px] transition-all duration-300 hover:scale-102 group cursor-pointer">

        <div className='self-stretch flex items-center justify-center text-[#2d3748] font-bold text-xl transition-colors duration-300 group-hover:text-[#6096B9]'>
        {items.title}
        </div>

      <div className="w-full flex flex-col items-start justify-start m-0 p-0 ">
      <p className='font-normal text-[#5a5a5a] m-0 leading-relaxed text-sm'>
        {items.content}
      </p>
      </div>
      <button className='cursor-pointer self-stretch flex items-center justify-between text-xs m-0 transition-all duration-300'>
        <div className='flex items-center justify-center text-[#6096B9] font-medium transition-colors duration-300'>
          Más información
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
        <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#6096B9"/>
        </svg>

      </button>
    </div>
    

  );
};

export default CardInfo;