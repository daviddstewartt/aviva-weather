import {ICity, LocationCoords} from '../../ts/interfaces';
export interface LocationState {
  permissionsGranted: boolean;
  currentLocation: LocationCoords | null;
  selectedCity: ICity | null;
  savedCities: ICity[];
}

const initialState: LocationState = {
  permissionsGranted: false,
  currentLocation: null,
  selectedCity: null,
  savedCities: [],
};

export default initialState;
