import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import appReducer from './app';
import locationReducer from './location';
import layoutReducer from './layout';
import forecastReducer from './forecast';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['location', 'layout', 'forecast'],
};

const rootReducer = combineReducers({
  app: appReducer,
  location: locationReducer,
  forecast: forecastReducer,
  layout: layoutReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
