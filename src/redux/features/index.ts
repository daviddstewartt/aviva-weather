import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import appReducer from './app';
import locationReducer from './location';
import layoutReducer from './layout';
import forecastReducer from './forecast';
import {TransformInbound, createTransform, persistReducer} from 'redux-persist';

// on app load, keep certain layout state values, but reset main ones
const layoutTransform = createTransform(
  (inboundState: TransformInbound, key) => {
    return inboundState;
  },
  (outboundState, key) => {
    return {
      ...outboundState,
      showForecastToggle: true,
      showSavedLocations: false,
    };
  },
  {whitelist: ['layout']},
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['location', 'layout', 'forecast'],
  transforms: [layoutTransform],
};

const rootReducer = combineReducers({
  app: appReducer,
  location: locationReducer,
  forecast: forecastReducer,
  layout: layoutReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
