import React, { useState } from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
interface propsTabCalendarioC {
  componentState: any;
  setComponentState: any;

}

const TabsGeneralS4: React.FC <propsTabCalendarioC> = ({componentState,setComponentState}) => {
  // Estado para controlar la opción seleccionada
  const [selectedTab, setSelectedTab] = useState<string>('Para vender más');

  // Función para cambiar la opción seleccionada
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <main className="w-full flex flex-col items-center justify-center py-0 gap-6 box-border shrink-0">
       {/* Botones de las opciones */}
      <div className='w-full flex md:flex-row flex-col items-center md:justify-center justify-center gap-3    '>

      <div className="flex bg-[#E6E9ED] rounded-full w-full  space-x-2 border-b-[1.3px] ">
            <button
              onClick={() => handleTabChange('Para vender más')}
              className={`tab-button ${selectedTab === 'Para vender más' ? 'flex flex-col bg-[#6096B9] rounded-full w-full h-full items-center justify-center py-2 md:px-5 px-2  border-b-[2px] border-solid border-[#6096B9] text-white font-semibold md:text-[18px] text-xs' : 'flex flex-col bg-[#F7F9FA] rounded-full w-full h-full items-center justify-center py-2 md:px-5 px-2 text-[#6F7780] text-opacity-60 md:text-[18px] text-xs '}`}
            >
              Para vender más
            </button>
            <button
                onClick={() => handleTabChange('Haz tu gestión más fácil')}
                className={`tab-button ${selectedTab === 'Haz tu gestión más fácil' ? 'flex flex-col bg-[#6096B9] rounded-full w-full h-full items-center justify-start py-2 md:px-5 px-2  border-b-[2px] border-solid border-[#6096B9] text-white font-semibold md:text-[18px] text-xs' : 'flex flex-col bg-[#F7F9FA] rounded-full w-full h-full items-center justify-center py-2 md:px-5 px-2 text-[#6F7780] text-opacity-60 md:text-[18px] text-xs '}`}
             >
          Haz tu gestión más fácil
            </button>


        </div>

      </div>


      {/* Contenedor de contenido */}
      <div className="w-full h-auto">
        {selectedTab === 'Para vender más' && <Content1 componentState={componentState} setComponentState={setComponentState}/>}
        {selectedTab === 'Haz tu gestión más fácil' && <Content2 componentState={componentState} setComponentState={setComponentState}/>}
   </div>
    </main>
  );
};

export default TabsGeneralS4;