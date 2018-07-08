import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'

import initializeDogSagaStore from './dog-saga/store'
import DogSaga from './dog-saga/components/DogSaga';
const store = initializeDogSagaStore();

ReactDOM.render(
  <Provider store={store}>
    <DogSaga />
  </Provider>
, document.getElementById('root'));
