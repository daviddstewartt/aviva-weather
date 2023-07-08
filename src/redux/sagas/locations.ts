import {all, takeLatest, call, put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  requestSelectedCityWeather,
  setSelectedCity,
} from '../features/location';
import {getCityWeather} from '../../util/location';
import {ICity, ICityWithWeather} from '../../ts/interfaces';
import {Config} from '../../../config';

function* fetchCityWeatherData(action: PayloadAction<ICity>) {
  try {
    const cityWeather = yield call(
      getCityWeather,
      action.payload,
      Config.OPEN_WEATHER_MAP_API_KEY,
    );

    // make Weather response compatibile with ICityWithWeather
    delete cityWeather.coord;
    delete cityWeather.name;

    const newCityWeather: ICityWithWeather = {
      ...action.payload,
      weather: cityWeather,
    };

    yield put({type: setSelectedCity.type, payload: newCityWeather});
  } catch (error) {
    /**
     * @todo handle error by creating setSelectedCityError action
     */
    console.error(error);
    yield put({type: setSelectedCity.type, payload: null});
  }
}

export default function* () {
  yield all([
    yield takeLatest(requestSelectedCityWeather.type, fetchCityWeatherData),
  ]);
}
