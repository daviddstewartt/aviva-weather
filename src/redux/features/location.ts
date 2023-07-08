import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICity, LocationCoords} from '../../ts/interfaces';

import initialState from '../selectors/location';

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationsPermissionsGranted: (state, action: PayloadAction<boolean>) => {
      state.permissionsGranted = action.payload;
    },
    // Setting the users current locations to the users coordinates
    setUsersCurrentLocation: (state, action: PayloadAction<LocationCoords>) => {
      state.currentLocation = action.payload;
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
  setUsersCurrentLocation,
  setSelectedCity,
  addCityToSaved,
  removeCityFromSaved,
} = locationSlice.actions;

export default locationSlice.reducer;
