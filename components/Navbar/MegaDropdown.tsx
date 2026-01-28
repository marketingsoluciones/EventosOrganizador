import React, { FC, useState } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

interface MenuItem {
  title: string;
  slug: string;
  description: string;
  icon: React.ReactNode;
}

interface Category {
  nombre: string;
  items: MenuItem[];
}

interface Props {
  title: string;
  categories: Category[];
  footerLink?: { label: string; slug: string };
}

const MegaDropdown: FC<Props> = ({ title, categories, footerLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover>
      <PopoverButton
        className="relative flex items-center gap-1.5 text-[15px] font-medium text-gray-700 hover:text-[#6096B9] focus:outline-none transition-colors duration-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </PopoverButton>

      <PopoverPanel
        transition
        anchor="bottom"
        className="z-[150] mt-4 w-[680px] rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200/80 shadow-xl shadow-[#6096B9]/5 text-sm transition duration-300 ease-in-out [--anchor-gap:var(--spacing-5)] overflow-hidden data-[closed]:-translate-y-2 data-[closed]:opacity-0"
      >
        <div className="p-5">
          <div className={`grid gap-6 ${categories.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {categories.map((category, catIdx) => (
              <div key={catIdx}>
                <p className="text-[10px] font-semibold text-[#6096B9] uppercase tracking-wider mb-3 px-2">
                  {category.nombre}
                </p>
                <div className="space-y-1">
                  {category.items.map((item) => (
                    <a
                      key={item.slug}
                      href={item.slug}
                      className="flex items-start gap-3 rounded-xl py-3 px-3 transition-all duration-200 hover:bg-[#6096B9]/5 border border-transparent hover:border-[#6096B9]/10 group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-[#6096B9]/10 to-[#4b7591]/10 rounded-lg flex items-center justify-center text-[#6096B9] group-hover:from-[#6096B9]/20 group-hover:to-[#4b7591]/20 group-hover:scale-110 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-[13px] group-hover:text-[#6096B9] transition-colors">
                          {item.title}
                        </p>
                        <p className="text-gray-500 text-[11px] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {footerLink && (
            <div className="mt-4 pt-3 border-t border-gray-200/60">
              <a
                href={footerLink.slug}
                className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-[#6096B9]/5 transition-all duration-200 group"
              >
                <span className="text-[13px] font-medium text-gray-600 group-hover:text-[#6096B9] transition-colors">
                  {footerLink.label}
                </span>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-[#6096B9] group-hover:translate-x-1 transition-all duration-300" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default MegaDropdown;
