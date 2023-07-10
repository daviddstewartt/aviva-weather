import {all, fork} from 'redux-saga/effects';

// Sagas
import locationSaga from './locations';
import forecastSaga from './forecast';

const sagas = [locationSaga, forecastSaga];

export default function* () {
  yield all(sagas.map(saga => fork(saga)));
}
