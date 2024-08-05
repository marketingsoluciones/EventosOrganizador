import React, { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


    
interface Content {
    title: string;
    subtitle: string;
    subtitle2: string;
  }

const Seccion3: FC<Content> = ({title, subtitle, subtitle2}) => {
    const contentData: Content[] = [
        {
          title: 'Productor',
          subtitle: 'Los productores pueden crear, alojar y vender productos digitales de creación propia, como cursos online, ebook, comunidades y mas.',
          subtitle2: 'Enseña sobre lo que sabes y gana dinero con ello y podras mejorar tu negocio cada dia mas, sin tantas complicaciones.',

        },
        {
          title: 'Afiliado',
          subtitle: 'Un afiliado promociona los productos ya listos y recibe comisiones por las ventas realizadas.',
          subtitle2: 'Tenemos más de 580 mil productos para afiliarte; elige tu favorito y promociónalo con nuestras herramientas.',

        },
      ];

      
      const [currentContentIndex, setCurrentContentIndex] = useState(0);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentContentIndex((prevIndex) =>
            (prevIndex + 1) % contentData.length
          );
          setLoading(false); // Reset loading state on transition
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, [contentData.length]);
    
      const currentContent = contentData[currentContentIndex];
    
      const handleContentClick = (index: number) => {
        if (index !== currentContentIndex) {
          setCurrentContentIndex(index);
          setLoading(true); // Set loading state on transition
        }
      };

  return (
    <section className="w-[100%] flex flex-row items-center justify-center py-20  md:px-12 px-3 box-border md:max-w-[1200px] ">
      
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
        
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[3.3px] ">
          <b className="self-stretch relative md:text-[16px] text-xs text-[#6096B9] tracking-[2px]">
            ¿RALMENTE ES PARA MÍ?
          </b>
          <h1 className="m-0 self-stretch relative md:text-[32px] text-2xl leading-[38.4px] font-semibold font-inherit text-[#282C2F] ">
            <p className="m-0">Con nosotros, puedes tener 2 roles...</p>
          </h1>
        </div>

        <div className="self-stretch w-full flex flex-row items-start justify-start gap-5 px-4 ">
          
          <AnimatePresence>
            {contentData.map((content, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-start justify-start gap-4 cursor-pointer hover:text-[#6096B9] ${
                  currentContentIndex === index ? 'text-[#6096B9] ' : 'text-[#9EA4AC] '
                }`}
                onClick={() => handleContentClick(index)}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center  ">
                  <span className="font-semibold text-[32px] ">{content.title}</span>
                </div>

                <div className={`flex flex-col items-start justify-start ${currentContentIndex === index ? '' : 'block text-[#6096B9]'}`}>
                  
                    <div className='flex flex-row gap-2'>
                    <svg className='flex w-8 h-8 text-gray-500 fill-current' width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.06667 14.9639L0 9.8972L1.26667 8.63053L5.06667 12.4305L13.2222 4.27498L14.4889 5.54164L5.06667 14.9639Z"/>
                    </svg>
                    
                    <div className='text-gray-500'>
                    {content.subtitle}
                    </div>
                    
                    </div>
                    <div className='flex flex-row gap-2'>
                    <svg className='flex w-8 h-8 text-[16px] text-gray-500 fill-current' width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.06667 14.9639L0 9.8972L1.26667 8.63053L5.06667 12.4305L13.2222 4.27498L14.4889 5.54164L5.06667 14.9639Z"/>
                    </svg>
                  
                    <div className='text-gray-500'>
                    {content.subtitle2}
                    </div>
                    </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

        </div>

      </div>
    </section>
  




  );
};

export default Seccion3;
