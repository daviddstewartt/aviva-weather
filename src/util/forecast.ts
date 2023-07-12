import axios from 'axios';
import {ICity, IForecastResponse} from '../ts/interfaces';

const units = 'metric';

/**
 *  Get Forecast data for the city
 * @param {ICity} city
 * @param {string} API_KEY
 * @returns {Promise<IForecastResponse>}
 */
const getCityForecast = async (
  city: ICity,
  API_KEY: string,
): Promise<IForecastResponse> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${city?.lat}&lon=${
        city?.lon
      }&exclude=${'minutely'}&appid=${API_KEY}&units=${units}`,
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to get cities forecast');
  }
};

export {getCityForecast};
