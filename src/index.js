import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import initializeStore from './dog-saga/store'
import Home from './Home'
import DogSaga from './dog-saga/components/DogSaga';
const store = initializeStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/dog-saga"  component={DogSaga}/>
      </Switch>
    </Router>
  </Provider>
, document.getElementById('root'));
