import { takeLatest, call, put, all } from 'redux-saga/effects'
import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE, START_API_CALL_REQUEST } from '../actionTypes'
import action from '../actions';
import { delay, getDog } from './utils'

export function* watchDogFetching() {
  yield takeLatest([API_CALL_REQUEST, START_API_CALL_REQUEST], showDog);
}

function* showDog({ type }) {
  if (type === API_CALL_REQUEST) {
    yield call(dogFetchingSaga);
  } else if (type === START_API_CALL_REQUEST) {
    while (true) {
      yield call(delay, 1000);
      yield call(dogFetchingSaga);
    }
  }
}

function* dogFetchingSaga() {
  try {
    const response = yield call(getDog);
    const dog = response.message;
    
    yield put(action(API_CALL_SUCCESS, dog));
  } catch (err) {
    yield put(action(API_CALL_FAILURE, err));
  }
}

export default function* rootSaga() {
  yield all([
    watchDogFetching()
  ])
}

