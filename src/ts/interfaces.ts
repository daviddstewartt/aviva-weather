import {GeolocationResponse} from '@react-native-community/geolocation';

/**
 * Cities formatted from response from OpenWeatherMap API
 * https://openweathermap.org/api/geocoding-api
 * @interface ICity
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

/**
 * Cities with weather formatted from response from OpenWeatherMap API
 * @interface ICityWithWeather
 * @extends {ICity}
 * @property {IWeather} weather Weather data for the city
 */
export interface ICityWithWeather extends ICity {
  weather: Omit<IWeather, 'coord' | 'name'>;
  timestamp: number;
}

export type LocationCoords = Pick<GeolocationResponse, 'coords'>;

/**
 * Weather formatted from response from OpenWeatherMap API
 * https://openweathermap.org/current
 * @interface IWeather
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

/**
 * Weather Forecast - List Property from response from OpenWeatherMap API (16 day forecast)
 * https://openweathermap.org/forecast16
 * @interface IForecast
 */
export interface IForecast {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}

export interface IForecastHourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_gust: number;
  wind_deg: number;
  pop: number;
  rain?: {
    '1h': number;
  };
  snow?: {
    '1h': number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}
