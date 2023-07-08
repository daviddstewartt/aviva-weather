import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICity, ICityWithWeather, LocationCoords} from '../../ts/interfaces';

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
    requestSelectedCityWeather: (state, action: PayloadAction<ICity>) => {}, // Action only for saga side effects
    setSelectedCity: (state, action: PayloadAction<ICityWithWeather>) => {
      state.selectedCity = action.payload;
    },
    addCityToSaved: (state, action: PayloadAction<ICityWithWeather>) => {
      state.savedCities.push(action.payload);
    },
    removeCityFromSaved: (state, action: PayloadAction<string>) => {
      state.savedCities = state.savedCities.filter(
        city => city.id !== action.payload,
      );

      return state;
    },
  },
});

export const {
  setLocationsPermissionsGranted,
  setUsersCurrentLocation,
  requestSelectedCityWeather,
  setSelectedCity,
  addCityToSaved,
  removeCityFromSaved,
} = locationSlice.actions;

export default locationSlice.reducer;
