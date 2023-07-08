import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICity} from '../../ts/interfaces';

import initialState from '../selectors/location';

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationsPermissionsGranted: (state, action: PayloadAction<boolean>) => {
      state.permissionsGranted = action.payload;
    },
    setSelectedCity: (state, action: PayloadAction<ICity>) => {
      state.selectedCity = action.payload;
    },
    addCityToSaved: (state, action: PayloadAction<ICity>) => {
      state.savedCities.push(action.payload);
    },
    removeCityFromSaved: (state, action: PayloadAction<string>) => {
      state.savedCities = state.savedCities.filter(
        city => city.id !== action.payload,
      );

      if (state.selectedCity?.id === action.payload) {
        /** @todo selected city should be set to the users current */
        state.selectedCity = null;
      }

      return state;
    },
  },
});

export const {
  setLocationsPermissionsGranted,
  setSelectedCity,
  addCityToSaved,
  removeCityFromSaved,
} = locationSlice.actions;

export default locationSlice.reducer;
