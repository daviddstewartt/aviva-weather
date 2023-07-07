import {ICity} from '../../ts/interfaces';

export interface LocationState {
  selectedCity: ICity | null;
  savedCities: ICity[];
}

const initialState: LocationState = {
  selectedCity: null,
  savedCities: [],
};

export default initialState;
