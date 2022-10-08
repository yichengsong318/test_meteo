import React from 'react';

interface DropdownItemProps {
  key: string;
  name: string;
  handleClick: (e?: any) => void;
  [key: string]: any;
}

const DropdownItem = ({ icon, name, handleClick }: DropdownItemProps) => {
  return (
    <div className="group relative rounded-lg leading-[25px] cursor-pointer hover:bg-[#f5f5f5]">
      <div
        className=" flex items-center m-1 px-4"
        role="dropdownitem"
        tabIndex={-1}
        id="dropdown-item-0"
        onClick={handleClick}
      >
        {icon}
        <span className="font-commuter font-normal text-lg">{name}</span>
      </div>
    </div>
  );
};

export default React.memo(DropdownItem);
