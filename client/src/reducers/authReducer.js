import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS
} from '../actions/auth';

const initState = {
  authToken: null,
  loading: false,
  error: null,
  user: null
};

export default (state=initState, action) => {
  switch(action.type){
  case SET_AUTH_TOKEN:
    return { ...state, authToken: action.authToken };
  case CLEAR_AUTH:
    return {
      ...state,
      authToken: null,
      user: null,
      newChildAccounts: 0
    };
  case AUTH_REQUEST:
    return {
      ...state,
      loading: true,
      error: null
    };
  case AUTH_ERROR:
    return {
      ...state,
      loading: false,
      error: action.err
    };
  case AUTH_SUCCESS:
    return {
      ...state,
      loading: false,
      user: action.user
    };
  default:
    return state;
  }
};