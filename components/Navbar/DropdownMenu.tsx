import React, { FC, useState } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

interface props {
  title: any;
  items: any;
}

const DropdownMenu: FC<props> = ({title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  const getIcon = (itemTitle: string) => {
    if (itemTitle.includes('Sociales')) {
      return (
        <svg className="w-6 h-6" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
        </svg>
      );
    } else if (itemTitle.includes('Tikecting') || itemTitle.includes('Tiketing')) {
      return (
        <svg className="w-6 h-6" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3v.75M9.75 3h4.5m-4.5 18h4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      );
    }
    return (
      <svg className="w-6 h-6" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
      </svg>
    );
  };

  return (
    <Popover>
      <PopoverButton className={`relative flex items-center gap-2 text-[16px] font-medium text-gray-900 hover:text-[#6096B9] focus:outline-none transition-colors duration-200 cursor-pointer after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#6096B9] after:transition-all after:duration-300 hover:after:w-full ${
        isOpen ? 'data-[active]:text-[#6096B9] data-[hover]:text-[#6096B9]' : ''
      }`} onClick={handleToggleMenu}>
        {title}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          strokeWidth="2.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </PopoverButton>

      <PopoverPanel
        transition
        anchor="bottom"
        className={`z-[150] mt-4 w-[440px] rounded-2xl bg-white border border-gray-200/80 shadow-xl text-sm transition duration-300 ease-in-out [--anchor-gap:var(--spacing-5)] overflow-hidden ${
          isOpen ? '' : 'data-[closed]:-translate-y-2 data-[closed]:opacity-0'
        }`}
      >
        <div className="bg-gradient-to-br from-gray-50/50 to-white p-4">
          <div className="grid grid-cols-1 gap-2">
            {items.map((item:any) => (
              <a
                key={item.title}
                className="flex items-start gap-4 rounded-xl py-4 px-4 transition-all duration-300 hover:bg-white hover:shadow-lg border border-transparent hover:border-[#6096B9]/30 group cursor-pointer"
                href={item.slug}
              >
                <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-[#6096B9] to-[#4b7591] rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {getIcon(item.title)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-[15px] mb-1 group-hover:text-[#6096B9] transition-colors">
                    {item.title}
                  </p>
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  <svg className="w-5 h-5 text-[#6096B9]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Footer del dropdown */}
          <div className="mt-3 pt-3 border-t border-gray-200/80">
            <a
              href="/help"
              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#6096B9]/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#6096B9]/10 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-[#6096B9] transition-colors" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
                  </svg>
                </div>
                <span className="text-[14px] font-medium text-gray-700 group-hover:text-[#6096B9] transition-colors">
                  ¿Necesitas ayuda?
                </span>
              </div>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-[#6096B9] group-hover:translate-x-1 transition-all duration-300" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default DropdownMenu;
