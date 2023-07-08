import {GeolocationResponse} from '@react-native-community/geolocation';

/**
 * Cities formatted from response from OpenWeatherMap API
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

export type LocationCoords = Pick<GeolocationResponse, 'coords'>;
