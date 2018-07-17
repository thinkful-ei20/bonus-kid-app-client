import {SET_AUTH_TOKEN, CLEAR_AUTH, AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS } from '../actions/auth';

const initState = {
  authToken: null,
  user: null,
  loading: false,
  error: null
};

export default (state = initState, action) => {
  if(action.type === SET_AUTH_TOKEN){
    return {...state, authToken: action.authToken};
  } else if(action.type === CLEAR_AUTH){
    return {...state, authToken: null, user: null};
  } else if(action.type === AUTH_REQUEST){
    return {...state, loading: true, error: null};
  } else if(action.type === AUTH_ERROR){
    return {...state, loading: false, error: action.err};
  } else if(action.type === AUTH_SUCCESS){
    return {...state, loading: false, user: action.user};
  }
  return state;
};