import {ICityWithWeather, LocationCoords} from '../../ts/interfaces';
export interface LocationState {
  permissionsGranted: boolean;
  currentLocation: LocationCoords | null;
  selectedCity: ICityWithWeather | null;
  savedCities: ICityWithWeather[];
  isLoading: boolean;
  error: string | null;
}

const initialState: LocationState = {
  permissionsGranted: false,
  currentLocation: null,
  selectedCity: null,
  savedCities: [],
  isLoading: true,
  error: null,
};

export default initialState;
