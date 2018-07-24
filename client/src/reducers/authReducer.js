import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_CHILD_SUCCESS_MESSAGE,
  CLEAR_CHILD_SUCCESS_MESSAGE
} from '../actions/auth';

const initState = {
  authToken: null,
  loading: false,
  error: null,
  user: null,
  childSuccessMessage: null
};

export default (state=initState, action) => {
  if(action.type === SET_AUTH_TOKEN){
    return {
      ...state,
      authToken: action.authToken
    };
  } else if(action.type === CLEAR_AUTH){
    return {
      ...state,
      authToken: null,
      user: null
    };
  } else if(action.type === AUTH_REQUEST){
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if(action.type === AUTH_ERROR){
    return {
      ...state,
      loading: false,
      error: action.err
    };
  } else if(action.type === AUTH_SUCCESS){
    return {
      ...state,
      loading: false,
      user: action.user
    };
  }
  else if(action.type === AUTH_CHILD_SUCCESS_MESSAGE){
    return {
      ...state,
      loading: false,
      childSuccessMessage: "child account created!"
    }
  }
  else if(action.type === CLEAR_CHILD_SUCCESS_MESSAGE){
    return {
      ...state,
      childSuccessMessage: null
    }
  }
  return state;
};