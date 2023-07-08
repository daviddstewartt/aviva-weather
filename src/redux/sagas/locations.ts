import {takeEvery, all} from 'redux-saga/effects';
import {setSelectedCity} from '../features/location';

function* fetchCityWeatherData() {
  console.log('fetchCityWeatherData');
}

export default function* () {
  yield all([yield takeEvery(setSelectedCity.type, fetchCityWeatherData)]);
}
