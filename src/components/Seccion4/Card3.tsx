import React, { FC } from 'react';
interface Props {
  items: any;
}

const Card3: FC <Props> = ({items}) => {


  return (
    <div className='w-[227.67px] h-[218.38px] flex flex-col items-center justify-center'>
          <div className="w-[60px] h-[60px] flex items-center justify-start">
          {items.img}
          </div>
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className='flex items-center justify-center text-[20px] font-bold text-[#6096B9] '>
          {items.title}
          </div>
          <div className='flex items-center justify-center text-[15px] text-black'>
          {items.content}
          </div>
      </div>
    </div>
  );
};

export default Card3;



