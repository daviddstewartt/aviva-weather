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
 * Weather Forecast - Current Forecast  from OpenWeatherMap API (16 day forecast)
 * https://openweathermap.org/api/one-call-3#data
 * @interface IForecastCurrent
 */
export interface IForecastCurrent {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

/**
 * https://openweathermap.org/api/one-call-3#data
 */
export interface IForecastDaily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    morn: number;
    day: number;
    eve: number;
    night: number;
    min: number;
    max: number;
  };
  feels_like: {
    morn: number;
    day: number;
    eve: number;
    night: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_gust?: number;
  wind_deg: number;
  clouds: number;
  uvi: number;
  pop: number;
  rain?: number;
  snow?: number;
  weather: {
    id: number;
    main: string;

    description: string;
    icon: string;
  }[];
}

/**
 * https://openweathermap.org/api/one-call-3#data
 */
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

/**
 * https://openweathermap.org/api/one-call-3#data
 */
export interface IForecastAlert {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
}

/**
 * Result from OpenWeatherMap API One Call current and forecast data
 * https://openweathermap.org/api/one-call-3#data
 */
export interface IForecastResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: IForecastCurrent;
  hourly: IForecastHourly[];
  daily: IForecastDaily[];
  alerts: IForecastAlert[];
}
