import {all, fork} from 'redux-saga/effects';

// Sagas
import locationSaga from './locations';

const sagas = [locationSaga];

export default function* () {
  yield all(sagas.map(saga => fork(saga)));
}
