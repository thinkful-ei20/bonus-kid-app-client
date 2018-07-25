import jwtDecode from 'jwt-decode';

import { API_BASE_URL } from '../config';
import { clearAuthToken, saveAuthToken } from '../local-storage';
import { normalizeResponseErrors } from './utils';
import { SubmissionError } from 'redux-form';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN, authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = user => ({
  type: AUTH_SUCCESS, user
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = err => ({
  type: AUTH_ERROR, err
});

export const AUTH_CHILD_SUCCESS_MESSAGE = 'AUTH_CHILD_SUCCESS_MESSAGE';
export const authChildSuccessMessage = () => ({
  type: AUTH_CHILD_SUCCESS_MESSAGE
});

export const CLEAR_CHILD_SUCCESS_MESSAGE = 'CLEAR_CHILD_SUCCESS_MESSAGE';
export const clearChildSuccessMessage = () => ({
  type: CLEAR_CHILD_SUCCESS_MESSAGE
});

export const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

export const loginParent = (username, password) => dispatch => {
  dispatch(authRequest());
  return (fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username, password
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      const { status } = err.error;
      const message = status===401 ? 'Wrong username or password':
        'Unable to log you in. Please check your username and password.';
      dispatch(authError(err));
      return Promise.reject(
        new SubmissionError({
          _error: message
        })
      );
    })
  );
};

export const loginChild = (username, password) => dispatch => {
  dispatch(authRequest());
  return (fetch(`${API_BASE_URL}/childLogin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username, password
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      const { status } = err.error;
      const message = status===401 ? 'Wrong username or password':
        'Unable to log you in. Please check your username and password.';
      dispatch(authError(err));
      return Promise.reject(
        new SubmissionError({
          _error: message
        })
      );
    })
  );
};

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/parent`,{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err =>{
      const {reason, message, location} = err;
      if (reason === 'ValidationError'){
        return Promise.reject(
          new SubmissionError({
            [location]:message
          }) 
        );
      }
    });
};

export const registerChild = user => (dispatch,getState) => {

  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/parent/child`,{
    method: 'POST',
    headers:{
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}` 
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err =>{
      console.log('err hit in auth', err);
      
      const {reason, message, location} = err;
      if (reason === 'ValidationError'){
        return Promise.reject(
          new SubmissionError({
            [location]:message
          }) 
        );
      }
    });
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/refresh`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(authToken);
    });
};