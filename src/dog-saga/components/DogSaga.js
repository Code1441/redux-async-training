import React from 'react';
import action from '../actions';
import { connect } from 'react-redux'
import { API_CALL_REQUEST, START_API_CALL_REQUEST } from '../actionTypes';

class DogSaga extends React.Component {
  render() {
    const { getDog, isFetching, dog, showDog } = this.props;

    return (
      <div>
        <button className="dog-btn" onClick={getDog}>
          Get random dog
        </button>
        <button className="dog-btn" onClick={showDog}>
          Show dog every second
        </button>
        { isFetching && <span>Fetching ...</span>}
        <div>
          {dog && <img src={dog} alt='dog'/>}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDog: () => dispatch(action(API_CALL_REQUEST)),
    showDog: () => dispatch(action(START_API_CALL_REQUEST))
  }
}

export default connect(
  state => ({...state}),
  mapDispatchToProps
)(DogSaga);
