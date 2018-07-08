import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from '../actionTypes'

const initialState = {
  isFetching: false,
  dog: null,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:  
      return {...state, isFetching: true, error: null};
    case API_CALL_SUCCESS: 
      return {...state, isFetching: false, dog: action.payload};
    case API_CALL_FAILURE: 
      return {isFetching: false, dog: null, error: action.payload};
    default: 
      return state;
  }
}

export default reducer; 
