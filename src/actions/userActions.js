import axios from 'axios';

// Action Types
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

// Action Creators
export const signUpSuccess = (token) => ({
  type: SIGN_UP_SUCCESS,
  payload: token,
});

export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});

export const signInSuccess = (token) => ({
  type: SIGN_IN_SUCCESS,
  payload: token,
});

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

// Async Actions
export const signUp = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/register', formData);
    const { authentication_token } = response.data;
    dispatch(signUpSuccess(authentication_token));
  } catch (error) {
    dispatch(signUpFailure(error.response.data.error));
  }
};

export const signIn = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/login', formData);
    const { authentication_token } = response.data;
    dispatch(signInSuccess(authentication_token));
  } catch (error) {
    dispatch(signInFailure(error.response.data.error));
  }
};
