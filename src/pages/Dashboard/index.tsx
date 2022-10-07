import { useState } from 'react';
import Dropdown from 'components/Dropdown/Dropdown';
import { SearchIcon } from 'components/icons/SearchIcon';
import gradoviData from 'utils/gradovi.json';

const dropdownlist: never[] = [];
const Dashboard = (): JSX.Element => {
  const [searchVal, setSearchVal] = useState('');

  const handleChange = (e: any) => {
    setSearchVal(e.target.value);
  };

  const dropdownMenus = gradoviData.filter((item) => item.city.includes(searchVal)).slice(0, 5);

  return (
    <div className="w-full text-center font-normal text-6xl pt-24">
      <span>Meteo App</span>
      <div className="w-3/4 justify-center mx-auto mt-10 rounded-md">
        <Dropdown menus={dropdownMenus} handleClick={(index) => console.log(index)}>
          <input
            type="text"
            value={searchVal}
            className="w-full rounded-md text-3xl"
            placeholder="Search"
            onChange={handleChange}
          />
          <SearchIcon className="w-6 h-6 absolute right-4" />
        </Dropdown>
      </div>
    </div>
  );
};

export default Dashboard;
