import {
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_ERROR
} from '../actions/tasks';

const initState = {
  tasks: [],
  loading: false,
  error: null
};

export default (state=initState, action) => {
  if(action.type === FETCH_TASKS_SUCCESS){
    return {
      ...state,
      loading: false,
      tasks: action.tasks
    };
  } else if (action.type === FETCH_TASKS_ERROR){
    return {
      ...state,
      error: action.err
    };
  }
  return state;
};