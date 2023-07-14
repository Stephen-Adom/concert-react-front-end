import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
  } from '../actions/userActions';
  
  const initialState = {
    token: null,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGN_UP_SUCCESS:
      case SIGN_IN_SUCCESS:
        return {
          ...state,
          token: action.payload,
          error: null,
        };
      case SIGN_UP_FAILURE:
      case SIGN_IN_FAILURE:
        return {
          ...state,
          token: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  