import React, { FC, useState } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

interface props {
  title: any;
  items: any;
}

const DropdownMenu: FC<props> = ({title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  return (
    <Popover >

      <PopoverButton className={`block text-md font-medium text-[#6096B9] focus:outline-none ${
        isOpen ? 'data-[active]:text-[#6096B9] data-[hover]:text-[#6096B9]' : ''
      }`} onClick={handleToggleMenu}>
        {title}
      </PopoverButton>

      <PopoverPanel
        transition
        anchor="bottom"
        className={`divide-y divide-black/5 updatedClass rounded-xl bg-white shadow-md text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] ${
          isOpen ? '' : 'data-[closed]:-translate-y-1 data-[closed]:opacity-0'
        }`}
      >
        {items.map((item:any) => (
          <div key={item.title} className="p-3 ">
            <a className="block rounded-lg py-2 px-3 transition hover:bg-black/5" href={item.slug}>
              <p className="font-semibold text-black">
                {item.title}
                </p>
              <p className="text-black/50">
              {item.description}
              </p>
            </a>
          </div>
        ))}
      </PopoverPanel>

    </Popover>
  );
};

export default DropdownMenu;

