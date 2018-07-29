import {
  POST_TASK_SUCCESS,
  POST_TASK_ERROR,
  PUT_TASK_SUCCESS,
  PUT_TASK_ERROR,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_ERROR,
  CHILD_SUBMIT_TASK_SUCCESS,
  PARENT_APPROVE_TASK_SUCCESS,
  CHILD_SUBMIT_TASK_ERROR,
  PARENT_APPROVE_TASK_ERROR
} from '../actions/tasks';

const initState = {
  error: null
};

export default (state=initState, action) => {
  switch(action.type){
  case POST_TASK_SUCCESS:
    return {...state};
  case POST_TASK_ERROR:
    return { ...state, error: action.err };
  case PUT_TASK_SUCCESS:
    return {...state};
  case PUT_TASK_ERROR:
    return { ...state, error: action.err };
  case DELETE_TASK_SUCCESS:
    return {...state};
  case DELETE_TASK_ERROR:
    return { ...state, error: action.err };
  case CHILD_SUBMIT_TASK_SUCCESS:
    return {...state};
  case CHILD_SUBMIT_TASK_ERROR:
    return { ...state, error: action.err };
  case PARENT_APPROVE_TASK_SUCCESS:
    return {...state};
  case PARENT_APPROVE_TASK_ERROR:
    return { ...state, error: action.err };
  default:
    return state;
  }
};