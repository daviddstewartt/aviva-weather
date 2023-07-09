import {all, takeLatest, call, put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  requestSelectedCityWeather,
  setIsLoading,
  setSelectedCity,
  setUsersCurrentLocation,
} from '../features/location';
import {getCityWeather, getLocationCity} from '../../util/location';
import {ICity, ICityWithWeather, LocationCoords} from '../../ts/interfaces';
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
      timestamp: Date.now(), // adding timestamp to know when the data was fetched
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

function* fetchUsersCurrentLocationCityAndWeatherData(
  action: PayloadAction<LocationCoords>,
) {
  try {
    console.log('action', action);
    yield put({type: setIsLoading.type, payload: true});

    const {longitude, latitude} = action.payload;

    const city = yield call(
      getLocationCity,
      latitude,
      longitude,
      Config.OPEN_WEATHER_MAP_API_KEY,
    );

    // get weather data from other generator
    yield* fetchCityWeatherData({type: '', payload: city});
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
    yield takeLatest(
      setUsersCurrentLocation.type,
      fetchUsersCurrentLocationCityAndWeatherData,
    ),
  ]);
}
