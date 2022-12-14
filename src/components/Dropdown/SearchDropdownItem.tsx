import React from 'react';
import { StarFilledIcon } from 'components/icons/StarFilledIcon';
import { handleFavorite } from 'store/search';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import clsx from 'clsx';

interface SearchDropdownItemProps {
  key: string;
  city: string;
  handleClick: (e?: React.MouseEvent<HTMLDivElement>) => void;
  [key: string]: any;
}

const SearchDropdownItem = ({ city, handleClick }: SearchDropdownItemProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.search.favorites);

  return (
    <div className="group relative rounded-lg leading-[25px] cursor-pointer hover:bg-[#f5f5f5]">
      <div
        className=" flex items-center m-1 px-4"
        role="searchdropdownitem"
        tabIndex={-1}
        id="dropdown-item-0"
        onClick={handleClick}
      >
        <span className="font-commuter font-normal text-lg">{city}</span>
      </div>
      <StarFilledIcon
        className={clsx('w-6 h-6 absolute top-0 right-4', {
          'fill-yellow-400 stroke-yellow-400': favorites.includes(city),
          'fill-white stroke-gray-400': !favorites.includes(city)
        })}
        onClick={() => dispatch(handleFavorite(city))}
      />
    </div>
  );
};

export default React.memo(SearchDropdownItem);
