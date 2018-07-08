import React from 'react';
import action from '../actions';
import { connect } from 'react-redux'
import { API_CALL_REQUEST, START_DOG_SHOW, STOP_DOG_SHOW } from '../actionTypes';

class DogSaga extends React.Component {
  render() {
    const { getDog, isFetching, dog, showDog, stopDog } = this.props;

    return (
      <div className="dog-container">
        <div className="dog-btns">
          <button onClick={getDog}>
            Get random dog
          </button>
          <button onClick={showDog}>
            Show dog every second
          </button>
          <button onClick={stopDog}>
            STOP
          </button>
        </div>
        <div>
          {dog && <img src={dog} alt='dog'/>}
        </div>
        { isFetching && <span>Fetching ...</span>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDog: () => dispatch(action(API_CALL_REQUEST)),
    showDog: () => dispatch(action(START_DOG_SHOW)),
    stopDog: () => dispatch(action(STOP_DOG_SHOW))
  }
}

export default connect(
  state => ({...state}),
  mapDispatchToProps
)(DogSaga);
