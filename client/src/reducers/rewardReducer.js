import {
  POST_REWARD_SUCCESS,
  POST_REWARD_ERROR,
  PUT_REWARD_SUCCESS,
  PUT_REWARD_ERROR,
  DELETE_REWARDS_SUCCESS,
  DELETE_REWARDS_ERROR,
} from '../actions/rewards';

const initState = {
  error: null
};

export default (state=initState, action) => {
  switch(action.type){
  case POST_REWARD_SUCCESS:
    return {...state};
  case POST_REWARD_ERROR:
    return { ...state, error: action.err };
  case PUT_REWARD_SUCCESS:
    return {...state};
  case PUT_REWARD_ERROR:
    return { ...state, error: action.err };
  case DELETE_REWARDS_SUCCESS:
    return {...state};
  case DELETE_REWARDS_ERROR:
    return { ...state, error: action.err };
  default:
    return state;
  }
};