import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICity} from '../../ts/interfaces';

import initialState from '../selectors/location';

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<ICity>) => {
      state.selectedCity = action.payload;
    },
  },
});

export const {setSelectedCity} = locationSlice.actions;
export default locationSlice.reducer;
