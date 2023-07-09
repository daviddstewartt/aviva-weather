import {AppStateStatus} from 'react-native';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import initialState from '../selectors/app';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Setting the users current locations to the users coordinates
    setAppStateStatus: (state, action: PayloadAction<AppStateStatus>) => {
      state.appState = action.payload;
    },
    setRequestingLocation: (state, action: PayloadAction<boolean>) => {
      state.requestingLocation = action.payload;
    },
  },
});

export const {setAppStateStatus, setRequestingLocation} = appSlice.actions;

export default appSlice.reducer;
