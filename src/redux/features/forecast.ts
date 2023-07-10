import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICity, IForecastResponse} from '../../ts/interfaces';

import initialState from '../selectors/forecast';

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    requestForecastData: (state, action: PayloadAction<ICity>) => {}, //Action for saga to listen to
    setForecast: (state, action: PayloadAction<IForecastResponse>) => {
      state = {
        ...state,
        hourly: action.payload.hourly,
        daily: action.payload.daily,
        isLoading: false,
      };
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
