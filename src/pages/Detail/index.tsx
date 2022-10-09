import { useState, useEffect } from 'react';
import Dropdown from 'components/Dropdown/Dropdown';
import DropdownItem from 'components/Dropdown/DropdownItem';
import { useParams } from 'react-router-dom';
import { ChevronDownIcon } from 'components/icons/ChevronDownIcon';
import gradoviData from 'utils/gradovi.json';
import api from 'services/api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { RootState } from 'store';
import { useSelector } from 'react-redux';

const dropdownMenus = [{ name: 'Hourly View' }, { name: 'Daily View' }];
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

const Detail = (): JSX.Element => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [chartData, handleChartData] = useState({} as any);
  const [hourSelections, handleHourSelections] = useState<string[]>(['temperature_2m']);
  const [dailySelections, handleDailySelections] = useState<string[]>([]);

  const handleClick = (val: number) => {
    setSelectedItem(dropdownMenus[val].name);
  };

  const temperatureUnit = useSelector((state: RootState) => state.settings.temperature_unit);

  useEffect(() => {
    const fetchData = async () => {
      const selected = gradoviData.filter((item) => item.city === id);
      if (selected.length) {
        const response = await api.get(
          `forecast?latitude=${selected[0].lat}&longitude=${selected[0].lng}${
            hourSelections.length ? '&hourly=' : ''
          }${hourSelections.join(',')}${dailySelections.length ? '&daily=' : ''}${dailySelections.join(
            ','
          )}&timeformat=unixtime&timezone=America%2FNew_York${
            temperatureUnit === 'fahrenheit' ? '&temperature_unit=fahrenheit' : ''
          }`
        );
        if (hourSelections.length || dailySelections.length) {
          handleChartData({
            labels: response.data.hourly.time.map((item: number) => moment(new Date(item * 1000)).format('YYYY-MM-DD')),
            datasets: [...hourSelections, ...dailySelections].map((key: string) => {
              return {
                label: key,
                data: response.data.hourly[key],
                borderColor: '#F4E6F5',
                backgroundColor: '#F4E6F5',
                pointBackgroundImage: 'linear-gradient(#FFF2FE, #FFBFF6)'
              };
            })
          });
        }
      }
    };
    fetchData();
  }, [selectedItem, hourSelections, dailySelections, temperatureUnit]);

  const handleHourChange = (e: any) => {
    const { value, checked } = e.target;
    if (checked) {
      handleHourSelections([...hourSelections, value]);
    } else {
      handleHourSelections(hourSelections.filter((e: string) => e !== value));
    }
  };

  const handleDailyChange = (e: any) => {
    const { value, checked } = e.target;
    if (checked) {
      handleDailySelections([...dailySelections, value]);
    } else {
      handleDailySelections(dailySelections.filter((e: string) => e !== value));
    }
  };

  return (
    <div className="w-full text-center font-normal text-3xl md:text-6xl px-4 pt-24">
      <span>Meteorologic data for {id}</span>
      <div className="w-3/4 justify-center mx-auto mt-10 rounded-md">
        <Dropdown DropdownItem={DropdownItem} menus={dropdownMenus} handleClick={handleClick}>
          <p className="w-full rounded-md text-3xl">{selectedItem ? selectedItem : 'Select View'}</p>
          <ChevronDownIcon className="w-6 h-6 ml-auto" />
        </Dropdown>
      </div>
      <div className="w-3/4 mx-auto mt-10">
        {selectedItem === 'Hourly View' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-base">
            <div className="flex items-center">
              <input
                type="checkbox"
                value="temperature_2m"
                defaultChecked={true}
                onChange={handleHourChange}
                className="mr-2"
                id="temperature_2m"
              />
              <label htmlFor="temperature_2m">Temperature (2 m)</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value="weathercode"
                onChange={handleHourChange}
                className="mr-2"
                id="Weathercode"
              />
              <label htmlFor="Weathercode">Weathercode</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value="windspeed_10m"
                onChange={handleHourChange}
                className="mr-2"
                id="windspeed_10m"
              />
              <label htmlFor="windspeed_10m"> Wind Speed (10 m)</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value="soil_temperature_0cm"
                onChange={handleHourChange}
                className="mr-2"
                id="soil_temperature_0cm"
              />
              <label htmlFor="soil_temperature_0cm">Soil Temperature (0 cm)</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value="relativehumidity_2m"
                onChange={handleHourChange}
                className="mr-2"
                id="relativehumidity_2m"
              />
              <label htmlFor="relativehumidity_2m">Relative Humidity (2 m)</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value="pressure_msl"
                onChange={handleHourChange}
                className="mr-2"
                id="pressure_msl"
              />
              <label htmlFor="pressure_msl">Relative Humidity (2 m)</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value="windspeed_80m"
                onChange={handleHourChange}
                className="mr-2"
                id="windspeed_80m"
              />
              <label htmlFor="windspeed_80m">Wind speed (80m)</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value="soil_temperature_6cm"
                onChange={handleHourChange}
                className="mr-2"
                id="soil_temperature_6cm"
              />
              <label htmlFor="soil_temperature_6cm">Soil Temperature (6 cm)</label>
            </div>
          </div>
        )}
        {selectedItem === 'Daily View' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
            <div className="flex items-center">
              <input
                type="checkbox"
                value="weathercode"
                onChange={handleDailyChange}
                className="mr-2"
                id="weathercode"
              />
              <label htmlFor="weathercode">Weathercode</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value="precipitation_sum"
                onChange={handleDailyChange}
                className="mr-2"
                id="precipitation_sum"
              />
              <label htmlFor="precipitation_sum">Precipitation Sum</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                value="temperature_2m_max"
                onChange={handleDailyChange}
                className="mr-2"
                id="temperature_2m_max"
              />
              <label htmlFor="temperature_2m_max">Maximum Temprature (2 m)</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" value="rain_sum" onChange={handleDailyChange} className="mr-2" id="rain_sum" />
              <label htmlFor="rain_sum">Rain Sum</label>
            </div>
          </div>
        )}
        {chartData.datasets?.length > 0 && [...hourSelections, ...dailySelections].length > 0 && (
          <div className="w-full px-4 pb-4 h-96 mt-10">
            <Line data={chartData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
