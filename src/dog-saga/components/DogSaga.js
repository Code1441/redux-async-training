import React from 'react';
import action from '../actions';
import { connect } from 'react-redux'
import { API_CALL_REQUEST, START_DOG_SHOW, STOP_DOG_SHOW } from '../actionTypes';

class DogSaga extends React.Component {
  state = {
    seconds: 1
  }

  handleInputChange = event => {
    const seconds = event.target.value || 1;
    this.setState({seconds})
  }

  render() {
    const { getDog, isFetching, dog, showDog, stopDog } = this.props;
    const { seconds } = this.state;
    
    return (
      <div className="dog-container">
        <div>
          <button onClick={getDog} className="dog-btns">
            Get random dog
          </button>
          <input 
            type="text"
            className="dog-btns-input"
            onChange={this.handleInputChange}
            placeholder="sec.."
          />
          <input 
            type="submit"
            className="dog-btns  show-btn"
            onClick={() => { showDog(seconds) }}
            value={`Show random dog every ${seconds} second(s)`}
          />
          <button onClick={stopDog} className="dog-btns">
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
    showDog: sec => dispatch(action(START_DOG_SHOW, sec)),
    stopDog: () => dispatch(action(STOP_DOG_SHOW))
  }
}

export default connect(
  state => ({...state}),
  mapDispatchToProps
)(DogSaga);
