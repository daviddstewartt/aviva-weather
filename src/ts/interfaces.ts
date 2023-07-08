import {GeolocationResponse} from '@react-native-community/geolocation';

/**
 * Cities formatted from response from OpenWeatherMap API
 * https://openweathermap.org/api/geocoding-api
 */
export interface ICity {
  id?: string;
  name: string;
  country: string;
  lat: number;
  lon: number;
  state?: string;
  local_names?: {
    [key: string]: string;
  };
}

export interface ICityWithWeather extends ICity {
  weather: Omit<IWeather, 'coord' | 'name'>;
}

export type LocationCoords = Pick<GeolocationResponse, 'coords'>;

/**
 * Weather formatted from response from OpenWeatherMap API
 * https://openweathermap.org/current
 */
export interface IWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
