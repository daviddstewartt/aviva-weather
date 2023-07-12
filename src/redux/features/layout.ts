import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import initialState from '../selectors/layout';
const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    // Setting the users current locations to the users coordinates
    setSavedLocationList: (state, action: PayloadAction<boolean>) => {
      state.savedLocationIsListView = action.payload;
    },
    setShowSavedLocations: (state, action: PayloadAction<boolean>) => {
      state.showSavedLocations = action.payload;
    },
    setShowForecastToggle: (state, action: PayloadAction<boolean>) => {
      state.showForecastToggle = action.payload;
    },
  },
});

export const {
  setSavedLocationList,
  setShowForecastToggle,
  setShowSavedLocations,
} = layoutSlice.actions;

export default layoutSlice.reducer;
