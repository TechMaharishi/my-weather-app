import React, { useContext, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlinePushPin } from "react-icons/md";
import { UserContext } from '../utils/Context';

const Cards = () => {
  // Extracting necessary data and functions from UserContext
  const { weatherData, cityName, setCityName, storingCitiesName } = useContext(UserContext);
  const [inputValue, setInputValue] = useState('');

  // Display loading message until weatherData is available
  if (!weatherData) return <div>Loading...</div>;

  // Extracting weather icon from the weatherData
  const icon = weatherData.weather[0].icon;

  // Handler for form submission to set city name
  const handleFormData = (e) => {
    e.preventDefault();
    setCityName(inputValue);
  }

  // Handler for pin button click to store the city name
  const handlePinClick = () => {
    storingCitiesName(cityName);
  }

  return (
    <div className='h-full w-full md:w-[70%] flex justify-center items-center p-4'>
      <div className='relative w-full sm:w-[80%] md:w-[25vw] min-h-[70vh] rounded-xl drop-shadow-lg bg-zinc-300 p-4'
        style={{ boxShadow: "6px 6px 12px #8d8d8d, -6px -6px 12px #ffffff" }}>

        {/* Form for searching a location */}
        <form onSubmit={handleFormData} className='w-full h-[10vh] flex items-center justify-center gap-3 mb-4'>
          {/* Button to pin the city */}
          <button type="button" onClick={handlePinClick} className='bg-zinc-300 hover:bg-zinc-400 p-2 transition rounded-full outline-none'>
            <MdOutlinePushPin size={20} />
          </button>
          {/* Input field for city search */}
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className='bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 w-full h-10 px-3 rounded'
            placeholder="Search location..."
          />
          {/* Button to submit the search */}
          <button type="submit" className='bg-zinc-300 hover:bg-zinc-400 p-2 transition rounded-full outline-none'>
            <IoSearchSharp size={20} />
          </button>
        </form>

        {/* Display weather data */}
        <div className='w-full h-[60vh] flex flex-col items-center justify-center rounded-xl p-4'>
          <div className='mb-6 text-center'>
            <img className='w-20 h-20 mx-auto' src={`http://openweathermap.org/img/w/${icon}.png`} alt="cloud" />
            <p className='mt-2 text-lg font-semibold'>{weatherData.weather[0].description}</p>
            <p className='text-2xl font-bold'>{weatherData && weatherData.main && weatherData.main.temp} <span className='text-lg'>°C</span></p>
            <p className='text-xl font-bold'>{weatherData.name}</p>
          </div>
          <div className='flex gap-8'>
            <div className='text-center'>
              <h3 className='text-lg font-semibold'>Wind Speed</h3>
              <p className='text-xl'>{weatherData.wind.speed} <span className='text-lg'>km/h</span></p>
            </div>
            <div className='text-center'>
              <h3 className='text-lg font-semibold'>Humidity</h3>
              <p className='text-xl'>{weatherData.main.humidity} <span className='text-lg'>%</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
