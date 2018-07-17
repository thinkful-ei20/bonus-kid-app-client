import {
  FETCH_REWARDS_SUCCESS,
  FETCH_REWARDS_ERROR,
  POST_REWARDS_SUCCESS,
  POST_REWARDS_ERROR,
  PUT_REWARDS_SUCCESS,
  PUT_REWARDS_ERROR,
  DELETE_REWARDS_SUCCESS,
  DELETE_REWARDS_ERROR
} from '../actions/rewards';

const initState = {
  rewards: [],
  loading: false,
  error:null,
};

export default (state = initState, action) =>{
  if (action.type === FETCH_REWARDS_SUCCESS){
    return {
      ...state,
      loading: false,
      rewards: [...state.rewards, ...action.rewards]
    }
  } else if (action.type === FETCH_REWARDS_ERROR){
    return {
      ...state,
      loading: false,
      error: action.error
    }
  } else if (action.type === POST_REWARDS_SUCCESS){
    return {
      ...state,
      loading: false,
      rewards: [...state.rewards, ...action.rewards]
    }
  } else if (action.type === POST_REWARDS_ERROR){
    return {
      ...state,
      loading: false,
      error: action.error
    }
  } else if (action.type === PUT_REWARDS_SUCCESS){
    return {
      ...state,
      loading: false,
      rewards: [...state.rewards, ...action.rewards]
    }
  } else if (action.type === PUT_REWARDS_ERROR){
    return{
      ...state,
      loading: false,
      error: action.error
    }
  } else if (action.type === DELETE_REWARDS_SUCCESS){
    return {
      ...state,
      loading: false,
      rewards: [...state.rewards]
    }
  } else if (action.type === DELETE_REWARDS_ERROR){
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }
  return state;
}