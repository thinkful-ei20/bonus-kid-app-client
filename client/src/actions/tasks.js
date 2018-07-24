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

// ============ POST TASKS ==================

export const POST_TASK_SUCCESS = 'POST_TASK_SUCCESS',
  postTaskSuccess = task => ({
    type: POST_TASK_SUCCESS,
    task
  }),

  POST_TASK_ERROR = 'POST_TASK_ERROR',
  postTaskError = error => ({
    type: POST_TASK_ERROR, 
    error
  }),

  postTask = (id, task) => (dispatch, getState) => {
    console.log('post task ran');
    console.log(task);
    console.log(id);
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: task.name,
        pointValue: task.pointValue
      })
    })
      .then(res => normalizeResponseErrors(res))
      //.then(res => res.json())
      .then(data => {
        dispatch(postTaskSuccess(data));
        dispatch(fetchTasks());
      })
      .catch(err => {
        dispatch(postTaskError(err));
      });
  };


// ============ PUT TASKS ==================
export const PUT_TASK_SUCCESS = 'PUT_TASK_SUCCESS',
  putTaskSuccess = task => ({
    type: PUT_TASK_SUCCESS, task
  }),
  PUT_TASK_ERROR = 'PUT_TASK_ERROR',
  putTaskError = error => ({
    type: PUT_TASK_ERROR, error
  }),
  editTask = (id, task) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: task.name,
        pointValue: task.points
      })
    })
      .then(res => normalizeResponseErrors(res))
      .then(data => dispatch(putTaskSuccess(data)))
      .then(() =>  dispatch(fetchTasks()))
      .catch(err => {
        dispatch(putTaskError(err));
      });
  };

// ============ DELETE TASKS ==================

export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS',
  deleteTaskSuccess = () => ({
    type: DELETE_TASK_SUCCESS
  }),

  DELETE_TASK_ERROR = 'DELETE_TASK_ERROR',
  deleteTaskError = error => ({
    type: DELETE_TASK_ERROR,
     error
  }),

  deleteTask = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
      headers: {Authorization: `Bearer ${authToken}`}
    })
      .then(() => dispatch(deleteTaskSuccess()))
      .then(() => dispatch(fetchTasks()))
      .catch(err => dispatch(deleteTaskError(err)));
  };