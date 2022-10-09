import { useDispatch, useSelector } from 'react-redux';
import { removeFavorites } from 'store/search';
import Button from 'components/Button';
import { defaultSetting, setTemperature } from 'store/settings';
import { RootState } from 'store';

const Settings = (): JSX.Element => {
  const dispatch = useDispatch();
  const temperatureUnit = useSelector((state: RootState) => state.settings.temperature_unit);

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTemperature(event.target.value));
  };

  return (
    <div className="w-full text-center px-4 font-normal text-3xl md:text-6xl pt-24">
      <span>Application Settings</span>
      <div className="text-xl mt-10">
        <span>Temperature Unit</span>
      </div>
      <div className="flex items-center text-base w-2/4 mx-auto mt-5" onChange={onChangeValue}>
        <input
          type="radio"
          value="celsius"
          id="celsius"
          name="temperatureUnit"
          checked={temperatureUnit === 'celsius'}
        />
        <label htmlFor="celsius" className="ml-5">
          Celsius °C
        </label>
        <input
          type="radio"
          value="fahrenheit"
          id="fahrenheit"
          name="temperatureUnit"
          checked={temperatureUnit === 'fahrenheit'}
          className="ml-auto"
        />
        <label htmlFor="fahrenheit" className="ml-5">
          Fahrenheit °F
        </label>
      </div>
      <div className="lg:flex mt-16 md:w-1/2 mx-auto sm:p-0 p-4">
        <Button
          text="Revert settings to default"
          light={true}
          className="bg-gray-100 border border-[#EF2C2C] rounded-xl hover:bg-white text-[#EF2C2C] w-auto text-center md:text-left text-lg"
          onClick={() => dispatch(defaultSetting())}
        />
        <Button
          text="Delete favourites"
          light={true}
          className="bg-gray-100 border mt-5 lg:mt-0 border-[#EF2C2C] rounded-xl hover:bg-white text-[#EF2C2C] ml-auto w-auto text-center md:text-left text-lg"
          onClick={() => dispatch(removeFavorites())}
        />
      </div>
    </div>
  );
};

export default Settings;
