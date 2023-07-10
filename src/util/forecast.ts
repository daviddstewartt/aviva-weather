import axios from 'axios';
import {ICity, IForecastResponse} from '../ts/interfaces';

const units = 'metric';

/**
 *  Get Forecast data for the city
 * @param {ICity} selectedCity
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
        // }&exclude=${'current,minutely,hourly,alerts'}&appid=${API_KEY}`, //for daily
      }&exclude=${'current,minutely'}&appid=${API_KEY}&units=${units}`,
    );

    console.log(response.data);

    return response.data;
    // return exampleForecast;
  } catch (error) {
    throw new Error(error.response?.data.message || 'Failed to get cities');
  }
};

export {getCityForecast};
