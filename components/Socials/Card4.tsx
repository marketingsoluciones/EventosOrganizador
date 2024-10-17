import React, { FC } from 'react';
interface Props {
  title: any;
  img: any;
  content: any;
  color: any;
}

const Card4: FC <Props> = ({title, img, content, color}) => {


  return (
    <div className='w-full h-auto flex flex-row items-start justify-start gap-4'>
          <div className={`w-[84px] h-[84px] flex rounded-full ${color} py-4 px-4 items-center justify-center`}>
          {img}
          </div>
        <div className="self-stretch flex flex-col items-start justify-center">
          <div className='flex items-start justify-start text-[20px] font-bold text-[#4B5563] '>
          {title}
          </div>
          <div className='flex items-center justify-center text-[15px] text-[#4B5563] '>
          {content}
          </div>
      </div>
    </div>
  );
};

export default Card4;