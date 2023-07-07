import {ICity} from '../../ts/interfaces';

export interface LocationState {
  selectedCity: ICity | null;
}

const initialState: LocationState = {
  selectedCity: null,
};

export default initialState;
