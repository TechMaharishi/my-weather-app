import React, { useContext } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { UserContext } from '../utils/Context';

const Widgets = () => {
  // Accessing the context to get citiesWeatherData and removeCity function
  const { citiesWeatherData, removeCity } = useContext(UserContext);

  // If data is not yet available, display a loading message
  if (!citiesWeatherData) return <div>Loading...</div>;

  return (
    <>
      {citiesWeatherData.map((city, index) => (
        // Each city weather card
        <div key={index} className='relative gap-4 flex flex-wrap h-[10rem] rounded-xl drop-shadow-lg bg-zinc-300 p-4'
          style={{ boxShadow: "6px 6px 12px #8d8d8d, -6px -6px 12px #ffffff" }}>

          {/* Button to remove a city */}
          <button onClick={() => removeCity(index)} className="top-2 right-2 absolute">
            <FaRegWindowClose />
          </button>

          {/* Weather icon */}
          <img className='min-w-[4.5rem]' src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt="" />

          {/* City weather details */}
          <div className=''>
            <h1 className="text-lg font-semibold">{city.name}</h1>
            <h2 className="text-3xl">
              <span className="font-bold">{city.main.temp}</span>
              <span className="text-xl">°C</span>
            </h2>
            <p className="text-gray-600">{city.weather[0].description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Widgets;
