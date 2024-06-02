import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context to store and provide weather-related data
export const UserContext = createContext();

const Context = (props) => {
  // State to store the current city name for fetching weather data
  const [cityName, setCityName] = useState("Delhi");
  // State to store the weather data of the current city
  const [weatherData, setWeatherData] = useState(null);
  // State to store the list of city names that the user pins
  const [cities, setCities] = useState([]);
  // State to store the weather data for the pinned cities
  const [citiesWeatherData, setCitiesWeatherData] = useState([]);

  // API key and endpoint for the OpenWeatherMap API
  const apiKey = "af0cb5a50f407b476ab109bf32e7afc6";
  const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  // Effect to fetch weather data for the current city whenever cityName changes
  useEffect(() => {
    const fetchData = async () => {
      const url = `${apiEndpoint}${cityName}&appid=${apiKey}`;
      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [cityName]);

  // Effect to fetch weather data for all pinned cities whenever the cities array changes
  useEffect(() => {
    const fetchMultipleCitiesData = async () => {
      const weatherDataArray = await Promise.all(
        cities.map(async (city) => {
          const url = `${apiEndpoint}${city}&appid=${apiKey}`;
          try {
            const response = await axios.get(url);
            return response.data;
          } catch (error) {
            console.error(`Error fetching weather data for ${city}:`, error);
            return null;
          }
        })
      );
      // Filter out any failed fetches (null values)
      setCitiesWeatherData(weatherDataArray.filter(data => data !== null));
    };

    if (cities.length > 0) {
      fetchMultipleCitiesData();
    } else {
      // Clear the weather data if no cities are left
      setCitiesWeatherData([]);
    }
  }, [cities]);

  // Function to add a new city name to the list of pinned cities
  const storingCitiesName = (name) => {
    setCities([...cities, name]);
  }

  // Function to remove a city from the list of pinned cities based on its index
  const removeCity = (index) => {
    const newCities = cities.filter((_, i) => i !== index);
    setCities(newCities);
    const newCitiesWeatherData = citiesWeatherData.filter((_, i) => i !== index);
    setCitiesWeatherData(newCitiesWeatherData);
  }

  // Providing context values to be accessible by any component that consumes this context
  return (
    <UserContext.Provider value={{ cityName, setCityName, weatherData, storingCitiesName, citiesWeatherData, removeCity }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;