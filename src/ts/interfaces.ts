/**
 * Cities formatted from response from OpenWeatherMap API
 */
export interface ICity {
  name: string;
  country: string;
  lat: number;
  lon: number;
  state?: string;
  local_names?: {
    [key: string]: string;
  };
}
