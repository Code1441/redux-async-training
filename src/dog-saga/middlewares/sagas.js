import { takeLatest, call, put, all, race, take } from 'redux-saga/effects'
import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE, START_DOG_SHOW, STOP_DOG_SHOW } from '../actionTypes'
import action from '../actions';
import { delay, getDog } from './utils'

export function* watchDogFetching() {
  yield takeLatest([API_CALL_REQUEST, START_DOG_SHOW], showDog);
}

function* showDog({ type }) {
  if (type === API_CALL_REQUEST) {
    yield call(dogFetching);
  } else if (type === START_DOG_SHOW) {
    yield race({
      start: call(startDogShowing),
      stop: take(STOP_DOG_SHOW)
    })
  }
}

function* startDogShowing() {
  while (true) {
    yield call(delay, 1000);
    yield call(dogFetching);
  }
}

function* dogFetching() {
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
