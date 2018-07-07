import React from 'react';
import action from '../actions';
import { connect } from 'react-redux'
import { API_CALL_REQUEST } from '../actionTypes';

class App extends React.Component {
  render() {
    const { getDog, isFetching, dog } = this.props;
    return (
      <div>
        <button
          className="dog-btn"
          onClick={getDog}
        >
          Get random dog
        </button>
        { isFetching && <span>Fetching ...</span>}
        <div>
          <img src={dog}/>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({...state}),
  dispatch => ({getDog: () => dispatch(action(API_CALL_REQUEST))})
)(App);
