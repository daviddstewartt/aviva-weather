import {ICity} from '../../ts/interfaces';

export interface LocationState {
  permissionsGranted: boolean;
  selectedCity: ICity | null;
  savedCities: ICity[];
}

const initialState: LocationState = {
  permissionsGranted: false,
  selectedCity: null,
  savedCities: [],
};

export default initialState;
