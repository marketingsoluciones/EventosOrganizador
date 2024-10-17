import React, { FC } from 'react';

interface props 
{
    items: any;
}


const CardInfo: FC<props> = ({items}) => {


  return (
    <div className="w-[300px] h-[250px] flex flex-col rounded-md bg-white shadow-md hover:shadow-2xl box-border border-[1px] border-[#6096B9] items-start justify-between py-6 px-6 gap-4 max-w-[300px] ">

        <div className='self-stretch flex items-center justify-center text-[#6096B9] font-bold'>
        {items.title}
        </div>

      <div className="w-full flex flex-col items-start justify-start m-0 p-0 ">
      <p className='font-normal text-[#444444] m-0'>
        {items.content}
      </p>
      </div>
      <button className='cursor-pointer self-stretch flex items-center justify-between text-xs m-0'>
        <div className='flex items-center justify-center text-[#6096B9] font-normal '>
          Más información
        </div>
        <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3964_15415)">
        <path d="M15.6775 13.3592L10.1335 19.2371C10.0332 19.3707 9.86626 19.4041 9.73271 19.4041C9.59915 19.4041 9.46551 19.3707 9.36534 19.2705C9.13155 19.0701 9.13155 18.7362 9.33194 18.5358L14.0076 13.5262H1.41672C1.11613 13.5262 0.882355 13.2924 0.882355 13.0252C0.882355 12.758 1.11613 12.4574 1.41672 12.4574H14.0076L9.33194 7.48119C9.13155 7.28081 9.13155 6.94683 9.36534 6.74645C9.59916 6.54607 9.93308 6.54607 10.1335 6.77985L15.6775 12.6578C15.8778 12.8582 15.8778 13.1588 15.6775 13.3592Z" fill="#6096B9"/>
        </g>
        <defs>
        <clipPath id="clip0_3964_15415">
        <rect width="16" height="25.6" fill="white" transform="translate(0 0.799316)"/>
        </clipPath>
        </defs>
        </svg>

      </button>
    </div>
    

  );
};

export default CardInfo;