import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import { saveAuthToken, clearAuthToken } from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN',
  setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN, authToken
  });

export const CLEAR_AUTH = 'CLEAR_AUTH',
  clearAuth = () => ({type: CLEAR_AUTH});

export const AUTH_REQUEST = 'AUTH_REQUEST',
  authRequest = () => ({type: AUTH_REQUEST});

export const AUTH_SUCCESS = 'AUTH_SUCCESS',
  authSuccess = user => ({type: AUTH_SUCCESS, user});

export const AUTH_ERROR = 'AUTH_ERROR',
  authError = err => ({type: AUTH_ERROR, err});

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

export const loginParent = (username, password) => dispatch => {
  dispatch(authRequest());
  return (
    fetch(`${API_BASE_URL}/login`, {
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
        const { code } = err;
        const message = code===401 ? 'Wrong username or password':'Unable to log you in. Please check your username and password.';
        dispatch(authError(err));
        return Promise.reject(
          new SubmissionError({
            _error: message
          })
        );
      })
  );
};

// export const loginChild = (username, password) => dispatch => {
//   dispatch(authRequest());
//   fetch(`${API_BASE_URL}/refresh`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       username, password
//     })
//   }).then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .then(({authToken}) => storeAuthInfo(authToken, dispatch))
//     .catch(err => {
//       const { code } = err;
//       const message = code===401 ? 'Wrong username or password':'Unable to log you in. Please check your username and password.';
//       dispatch(authError(err));
//       return Promise.reject(
//         new SubmissionError({
//           _error: message
//         })
//       );
//     });
// };

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


