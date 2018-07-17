import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS',
  fetchTasksSuccess = task => ({
    type: FETCH_TASKS_SUCCESS, 
    task
  }),
  FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR',
  fetchTasksError = error => ({
    type: FETCH_TASKS_ERROR, error
  }),
  fetchTasks = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/tasks`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => normalizeResponseErrors(res))
      .then(tasks => tasks.json())
      .then(tasks => dispatch(fetchTasksSuccess(tasks)))
      .catch(err => {
        dispatch(fetchTasksError(err));
      });
  };

export const POST_TASK_SUCCESS = 'POST_TASK_SUCCESS',
  postTaskSuccess = task => ({
    type: POST_TASK_SUCCESS, task
  }),
  POST_TASK_ERROR = 'POST_TASK_ERROR',
  postTaskError = error => ({
    type: POST_TASK_ERROR, error
  }),
  postTask = task => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/tasks`, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type': 'application/json'
      }
    })
      .then(res => normalizeResponseErrors(res))
      .then(task => dispatch(postTaskSuccess(task)))
      .catch(err => {
        dispatch(postTaskError(err));
      });
  };

export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS',
  deleteTaskSuccess = () => ({type: DELETE_TASK_SUCCESS}),
  DELETE_TASK_ERROR = 'DELETE_TASK_ERROR',
  deleteTaskError = error => ({type: DELETE_TASK_ERROR, error}),
  deleteTask = task => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/tasks/${task.id}`, {
      method: 'DELETE',
      headers: {Authorization: `Bearer ${authToken}`}
    })
      .then(() => dispatch(deleteTaskSuccess))
      .then(() => dispatch(fetchTasks()))
      .catch(err => dispatch(deleteTaskError(err)));
  };