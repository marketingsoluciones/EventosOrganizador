import React, { useState } from 'react';

interface Content {
  title: string;
  description: string;
}
interface Props {
  contentData: Content[];
  title?: string; // Optional prop for title
}

const Accordion: React.FC<Props> = ({ contentData, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div
      className={`w-full rounded-[16.61px] border-[1px] border-solid border-[#E6E9ED] ${
        isOpen ? 'shadow-md' : ''
      }`}
    >
      <div
        className={`self-stretch w-[100%] rounded-lg bg-gray-200 flex flex-row  items-center justify-between py-[7.8px] px-6 box-border min-h-[47.01px] max-w-full gap-[20px] cursor-pointer text-black hover:bg-gray-400 ${
          isOpen ? 'rounded-b-none' : ''
        }`}
        onClick={toggleAccordion}
      >
        {props.title && (
          <div className="h-5 w-auto flex flex-col items-start justify-start max-w-full shrink-0">
            <div className="relative leading-[20px] font-semibold md:text-[18px] text-sm ">
              {props.title}
            </div>
          </div>
        )}
        <div className='flex w-8 h-8 items-center justify-center bg-[#6096B9] rounded-full '>{isOpen ? (
          <svg width="18" height="3" viewBox="0 0 18 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.765625 2.9016V0.656555H17.8708V2.9016H0.765625Z" fill="white"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5664 6.29142V7.93696H8.00303V13.4742H6.38365V7.93696H0.820312V6.29142H6.38365V0.728088H8.00303V6.29142H13.5664Z" fill="#F0F3F7"/>
          </svg>
        )}
        </div>
      </div>
      {isOpen && (
        <div className=" flex flex-col items-start justify-start py-[32px] px-12 box-border max-w-full">
          {contentData.map((content) => (
            <div
              key={content.title}
              className="self-stretch flex flex-row items-start justify-start py-4 px-0 box-border max-w-full"
            >
              <div className="h-[29.2px] w-[29.2px] flex items-center justify-center bg-[#6096B9] rounded-full relative">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.875 5.1907L5.42605 8.74184L12.5282 1.63965" stroke="white" stroke-width="2.36739" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-0 pl-3.5 box-border min-w-[269px] max-w-full">
                <div className="relative leading-[29.5px] text-[#464B52] font-bold text-[16px] ">
                  {content.title}
                </div>
                <p className="text-left text-[16px] text-[#464B52] font-normal mt-2">
                  {content.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;



