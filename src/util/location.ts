import axios from 'axios';
import {ICity} from '../ts/interfaces';

/**
 * Search for cities that match the search text
 * using the OpenWeatherMap API
 *
 * @param searchText city name to search for
 * @param API_KEY API key to use for the request
 * @returns {Promise<ICity[]>} Cities that match the search text
 */
const searchLocationCities = async (
  searchText: string,
  API_KEY: string,
): Promise<ICity[]> => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=5&appid=${API_KEY}`,
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to get cities');
  }
};

export {searchLocationCities};
