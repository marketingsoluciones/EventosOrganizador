import React, { FC } from 'react';

interface props 
{
    items: any;
}


const Card2: FC<props> = ({items}) => {


  return (
    <div className="w-[300px] h-[322px] flex flex-col rounded-md bg-white shadow-xl items-start justify-center py-6 px-6 gap-4 max-w-[300px] ">

        <div className={`w-3 h-3 flex items-start justify-start ${items.imgColor}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M0.522727 17V12.0909C0.522727 10.697 0.795455 9.27273 1.34091 7.81818C1.88636 6.36364 2.60606 4.99242 3.5 3.70454C4.39394 2.41666 5.36364 1.34091 6.40909 0.477272L10.6818 3C9.83333 4.33333 9.13636 5.72727 8.59091 7.18182C8.06061 8.63636 7.79545 10.2576 7.79545 12.0455V17H0.522727ZM12 17V12.0909C12 10.697 12.2727 9.27273 12.8182 7.81818C13.3636 6.36364 14.0833 4.99242 14.9773 3.70454C15.8712 2.41666 16.8409 1.34091 17.8864 0.477272L22.1591 3C21.3106 4.33333 20.6136 5.72727 20.0682 7.18182C19.5379 8.63636 19.2727 10.2576 19.2727 12.0455V17H12Z" />
</svg>


        </div>

        <div className='flex items-start justify-start text-[#444444]'>
        {items.title}
        </div>

      <div className={`w-full flex flex-col items-start justify-start ${items.tcolor} m-0 p-0 `}>
      <p className='font-bold m-0'>
        {items.nombre}
      </p>
      <p className='text-xs m-0'>
        {items.cargo}
      </p>
      </div>
    </div>
    

  );
};

export default Card2;