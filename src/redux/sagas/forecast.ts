import {all, takeLatest, call, put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  requestForecastData,
  setForecast,
  setError,
  setIsLoading,
} from '../features/forecast';
import {getCityForecast} from '../../util/forecast';
import {ICity} from '../../ts/interfaces';
import {Config} from '../../../config';

function* fetchCityForecastData(action: PayloadAction<ICity>) {
  try {
    yield put(setIsLoading(true));
    const cityForecastData = yield call(
      getCityForecast,
      action.payload,
      Config.OPEN_WEATHER_MAP_API_KEY,
    );

    yield put({type: setForecast.type, payload: cityForecastData});
  } catch (error) {
    console.error(error);
    yield put({type: setForecast.type, payload: null});
    yield put({type: setError.type, payload: error.message});
  }
}

export default function* () {
  yield all([
    yield takeLatest(requestForecastData.type, fetchCityForecastData),
  ]);
}
