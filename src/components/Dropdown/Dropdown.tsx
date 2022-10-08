import React, { useState } from 'react';
import SearchDropdownItem from './SearchDropdownItem';

interface DropdownProps {
  handleClick: (e?: any) => void;
  children?: JSX.Element | JSX.Element[];
  DropdownItem: any;
  [key: string]: any;
}

export const Dropdown = ({ menus = [], children, handleClick, DropdownItem }: DropdownProps) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleSelect = (index: number) => {
    handleClick(index);
    setExpanded(false);
  };

  const handleToggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="relative inline-block text-left w-full border rounded-md">
      <div onClick={handleToggleExpand}>
        <div
          className="flex justify-start font-normal items-center select-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {children}
        </div>
      </div>
      <div className={`${isExpanded ? 'block' : 'hidden'}`}>
        <div
          className="select-none absolute mt-2 w-full right-0 rounded-sm border border-[#e7eaec] h-fit shadow-dropdown bg-white z-30 overflow-hidden"
          role="dropdown"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
          tabIndex={-1}
        >
          {menus?.map((el: any, index: number) => (
            <DropdownItem key={`Dropdown-item-${index}`} {...el} handleClick={() => handleSelect(index)} />
          ))}
        </div>
        <div className="fixed top-0 left-0 z-1 w-screen h-screen" onClick={handleToggleExpand} />
      </div>
    </div>
  );
};

export default React.memo(Dropdown);
