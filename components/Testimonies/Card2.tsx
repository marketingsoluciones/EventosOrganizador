import React, { FC } from 'react';

interface props 
{
    items: any;
}


const Card2: FC<props> = ({items}) => {


  return (
    <div className="group w-full max-w-[300px] min-h-[340px] flex flex-col rounded-2xl bg-white shadow-lg hover:shadow-2xl items-start justify-between py-8 px-7 gap-5 border border-gray-100 hover:border-[#6096B9] transition-all duration-500 hover:scale-105 relative overflow-hidden">

      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6096B9]/10 to-transparent rounded-full blur-2xl transition-all duration-500 group-hover:scale-150"></div>

      <div className="relative z-10 flex flex-col gap-5 w-full">
        {/* Quote icon */}
        <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#6096B9]/10 to-[#6096B9]/5 ${items.imgColor} transition-all duration-300 group-hover:scale-110`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M0.522727 17V12.0909C0.522727 10.697 0.795455 9.27273 1.34091 7.81818C1.88636 6.36364 2.60606 4.99242 3.5 3.70454C4.39394 2.41666 5.36364 1.34091 6.40909 0.477272L10.6818 3C9.83333 4.33333 9.13636 5.72727 8.59091 7.18182C8.06061 8.63636 7.79545 10.2576 7.79545 12.0455V17H0.522727ZM12 17V12.0909C12 10.697 12.2727 9.27273 12.8182 7.81818C13.3636 6.36364 14.0833 4.99242 14.9773 3.70454C15.8712 2.41666 16.8409 1.34091 17.8864 0.477272L22.1591 3C21.3106 4.33333 20.6136 5.72727 20.0682 7.18182C19.5379 8.63636 19.2727 10.2576 19.2727 12.0455V17H12Z" />
          </svg>
        </div>

        {/* Testimonial text */}
        <div className='flex items-start justify-start text-[#444444] text-[15px] leading-relaxed'>
          {items.title}
        </div>
      </div>

      {/* Author info */}
      <div className={`relative z-10 w-full flex flex-col items-start justify-start border-t border-gray-100 pt-4 ${items.tcolor} m-0 p-0 `}>
        <p className='font-bold text-base m-0'>
          {items.nombre}
        </p>
        <p className='text-sm text-gray-600 m-0 mt-1'>
          {items.cargo}
        </p>
      </div>
    </div>
    

  );
};

export default Card2;