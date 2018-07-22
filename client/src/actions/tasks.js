import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const fetchTasksSuccess = tasks => ({
  type: FETCH_TASKS_SUCCESS, 
  tasks
});

export const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';
export const fetchTasksError = error => ({
  type: FETCH_TASKS_ERROR, 
  error
});

export const fetchTasks = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return (fetch(`${API_BASE_URL}/tasks`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(tasks => dispatch(fetchTasksSuccess(tasks)))
    .catch(err => {
      dispatch(fetchTasksError(err));
    }));
};