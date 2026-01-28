import React, { FC } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface Props {
  items: any;
}

const Card3: FC <Props> = ({items}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group w-full min-h-[240px] flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#6096B9] shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}
    >

      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6096B9]/0 via-[#6096B9]/0 to-[#6096B9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Icon container */}
        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <div className="w-[60px] h-[60px] flex items-center justify-center text-[#6096B9] transition-colors duration-300">
            {items.img}
          </div>
        </div>

        {/* Content */}
        <div className="self-stretch flex flex-col items-center justify-center gap-2 text-center">
          <div className='flex items-center justify-center text-[18px] font-bold text-[#6096B9] group-hover:text-[#4b7591] transition-colors duration-300'>
            {items.title}
          </div>
          <div className='flex items-center justify-center text-[14px] text-gray-600 leading-relaxed px-2'>
            {items.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;



