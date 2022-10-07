import React from 'react';
import { StarFilledIcon } from 'components/icons/StarFilledIcon';

interface DropdownItemProps {
  key: string;
  city: string;
  handleClick: (e?: any) => void;
  [key: string]: any;
}

const DropdownItem = ({ icon, city, handleClick }: DropdownItemProps) => {
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
        <span className="font-commuter font-normal text-lg">{city}</span>
      </div>
      <StarFilledIcon
        className="w-6 h-6 absolute top-0 right-4 fill-white stroke-gray-400
       hover:fill-yellow-400 hover:stroke-yellow-400"
      />
    </div>
  );
};

export default React.memo(DropdownItem);
