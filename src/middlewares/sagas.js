import { takeLatest, call, put } from 'redux-saga/effects'
import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from '../actionTypes'
import action from '../actions';

export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

const getDog = () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
}

function* workerSaga() {
  try {
    const response = yield call(getDog);
    const dog = response.message;
    
    yield put(action(API_CALL_SUCCESS, dog));
  } catch (err) {
    yield put(action(API_CALL_FAILURE, err));
  }
}


