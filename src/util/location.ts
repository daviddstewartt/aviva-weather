import Geolocation from '@react-native-community/geolocation';
import {store} from '../redux/store';
import axios from 'axios';
import {ICity, IWeather} from '../ts/interfaces';

const units = 'metric';

/**
 * Get the users current location using the Geolocation API
 * and sets it in state
 * @returns {Promise<void>}
 */
const getUsersCurrentLocation = async (): Promise<void> => {
  await Geolocation.getCurrentPosition(
    position => {
      // call redux action to set the users current location
      store.dispatch({
        type: 'location/setUsersCurrentLocation',
        payload: position.coords,
      });
    },
    error => {
      console.log(error);
      store.dispatch({type: 'location/setUsersCurrentLocation', payload: null});
    },
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );
};

/**
 * Search for cities that match the search text
 * using the OpenWeatherMap API
 *
 * @param {string} searchText city name to search for
 * @param {string} API_KEY API key to use for the request
 * @returns {Promise<ICity[]>} Cities that match the search text
 */
const searchLocationCities = async (
  searchText: string,
  API_KEY: string,
): Promise<ICity[]> => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=5&appid=${API_KEY}&units=${units}`,
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to get cities');
  }
};

/**
 * Get the city for a location by coordinates using the OpenWeatherMap API
 * @param {number} lat Latitude of the location
 * @param {number} lon Longitude of the location
 * @param {string} API_KEY API key to use for the request
 * @returns {Promise<ICity>} City for the location
 */
const getLocationCity = async (
  lat: number,
  lon: number,
  API_KEY: string,
): Promise<ICity> => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}&units=${units}`,
    );

    return response.data[0];
  } catch (error) {
    throw new Error(
      error.response?.data.message || 'Failed to get location city',
    );
  }
};

/**
 * Get the weather for a city using the OpenWeatherMap API
 * @param {ICity} city City to get the weather for
 * @param {string} API_KEY API key to use for the request
 * @returns {Promise<IWeather>} Weather data for the city
 */
const getCityWeather = async (
  city: ICity,
  API_KEY: string,
): Promise<IWeather> => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=${units}`,
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to get cities');
  }
};

export {
  getUsersCurrentLocation,
  getLocationCity,
  searchLocationCities,
  getCityWeather,
};
