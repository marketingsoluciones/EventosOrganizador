import React, { useState } from 'react';

interface MenuItem {
    label: string;
    items?: MenuItem[];
}


const CollapsibleMenu: React.FC<MenuItem[]> = ({ items }) => {
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);

  const menuItems: MenuItem[] = [
    {
      label: 'Item 1',
      items: [
        { label: 'Subitem 1.1' },
        { label: 'Subitem 1.2' },
      ],
    },
    { label: 'Item 2' }, // Este elemento no tiene submenús
  ];
  
  // Accedemos a la propiedad "items" de forma segura
  menuItems.forEach((item) => {
    if (item.items) {
      // Si "items" existe, iteramos sobre los subitems
      item.items.forEach((subItem) => {
        console.log(subItem.label);
      });
    }
  });

  const toggleSubMenu = (id: string) => {
    setOpenSubMenus((prevOpen) =>
      prevOpen.includes(id) ? prevOpen.filter((i) => i !== id) : [...prevOpen, id]
    );
  };

  const renderItem = (item: MenuItem, depth = 0) => (
    <li key={item.label} className={`px-2 hover:bg-secondary-100 ${depth > 0 ? 'ml-4' : ''}`}>
      {item.subMenu ? (
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="h-4 w-4 mr-2 cursor-pointer"
            onClick={() => toggleSubMenu(item.label)}
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          <span
            className={`focus:text-primary active:text-primary ${
              openSubMenus.includes(item.label) ? '' : 'cursor-pointer'
            }`}
            onClick={() => toggleSubMenu(item.label)}
          >
            {item.label}
          </span>
        </div>
      ) : (
        <span className="focus:text-primary active:text-primary">{item.label}</span>
      )}
      {item.subMenu && openSubMenus.includes(item.label) && (
        <ul className="mt-2 pl-4 hidden transition duration-200 ease-in-out" aria-hidden={!openSubMenus.includes(item.label)}>
          {item.subMenu.map((subItem) => renderItem(subItem, depth + 1))}
        </ul>
      )}
    </li>
  );

  return (
    <ul>
      {items.map((item) => renderItem(item))}
    </ul>
  );
};

export default CollapsibleMenu;