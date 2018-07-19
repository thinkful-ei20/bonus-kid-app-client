import { 
  FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR, 
  POST_TASK_SUCCESS, POST_TASK_ERROR, 
  PUT_TASK_SUCCESS, PUT_TASK_ERROR,
  DELETE_TASK_SUCCESS, DELETE_TASK_ERROR } from '../actions/tasks';


const initState = {
  tasks: [],
  loading: false,
  error: null
};

export default (state=initState, action) => {
  if (action.type === FETCH_TASKS_SUCCESS){
    return {
      ...state, 
      loading: false, 
      tasks: [...action.task]
    }
  } 
  else if (action.type === FETCH_TASKS_ERROR){
    return {
      ...state, 
      error: action.err
    }

  } else if (action.type === POST_TASK_SUCCESS){
    return {
      ...state, 
      tasks: [...state.tasks, action.task]
    }

  } else if (action.type === POST_TASK_ERROR){
    return {
      ...state, 
      error: action.err
    }

  } else if (action.type === PUT_TASK_SUCCESS){
    return {
      ...state,
      loading:false,
      tasks: [...state.tasks, action.task]
    }

  } else if (action.type === PUT_TASK_ERROR){
    return {
      ...state,
      loading: false,
      error: action.err
    }

  }else if (action.type === DELETE_TASK_SUCCESS){
    return {
      ...state,
      loading:false,
    }

  } else if (action.type === DELETE_TASK_ERROR){
    return {
      ...state, 
      error: action.err
    };
  }
  return state;
};