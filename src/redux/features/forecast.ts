import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICity, IForecastResponse} from '../../ts/interfaces';

import initialState from '../selectors/forecast';

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    requestForecastData: (state, action: PayloadAction<ICity>) => {}, //Action for saga to listen to
    setForecast: (state, action: PayloadAction<IForecastResponse>) => {
      if (!action.payload) {
        state.current = null;
        state.hourly = null;
        state.daily = null;
        state.alerts = null;
        state.isLoading = false;
        return;
      }
      state.current = action.payload.current;
      state.hourly = action.payload.hourly;
      state.daily = action.payload.daily;
      state.alerts = action.payload.alerts;
      state.isLoading = false;
      state.error = null;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {requestForecastData, setForecast, setIsLoading, setError} =
  forecastSlice.actions;

export default forecastSlice.reducer;
