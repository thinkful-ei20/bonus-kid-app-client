import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import { storeAuthInfo, refreshAuthToken } from './auth';

// ============ POST TASKS ==================

export const POST_TASK_SUCCESS = 'POST_TASK_SUCCESS',
  postTaskSuccess = task => ({ type: POST_TASK_SUCCESS, task }),
  POST_TASK_ERROR = 'POST_TASK_ERROR',
  postTaskError = err => ({ type: POST_TASK_ERROR, err }),
  postTask = (id, task) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${authToken}`, 'content-type': 'application/json' },
      body: JSON.stringify(task)
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({authToken}) => storeAuthInfo(authToken, dispatch))
      .then(() => dispatch(refreshAuthToken()))
      .catch(err => dispatch(postTaskError(err)));
  };


// ============ PUT TASKS ==================
export const PUT_TASK_SUCCESS = 'PUT_TASK_SUCCESS',
  putTaskSuccess = task => ({ type: PUT_TASK_SUCCESS, task }),
  PUT_TASK_ERROR = 'PUT_TASK_ERROR',
  putTaskError = err => ({ type: PUT_TASK_ERROR, err }),
  editTask = (id, task) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${authToken}`, 'content-type': 'application/json' },
      body: JSON.stringify({ name: task.name, pointValue: task.points })
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({authToken}) =>  storeAuthInfo(authToken, dispatch))
      .catch(err => dispatch(putTaskError(err)));
  };

// ============ DELETE TASKS ==================

export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS',
  deleteTaskSuccess = () => ({ type: DELETE_TASK_SUCCESS }),
  DELETE_TASK_ERROR = 'DELETE_TASK_ERROR',
  deleteTaskError = err => ({ type: DELETE_TASK_ERROR, err }),
  deleteTask = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${authToken}` }
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({authToken}) =>  storeAuthInfo(authToken, dispatch))
      .catch(err => dispatch(deleteTaskError(err)));
  };

  // =========== CHILD SUBMIT TASK FOR APPROVAL ==========

  export const CHILD_SUBMIT_TASK_SUCCESS = 'CHILD_SUBMIT_TASK_SUCCESS';
  export const childSubmitTaskSuccess = () => ({ type: CHILD_SUBMIT_TASK_SUCCESS });

  export const CHILD_SUBMIT_TASK_ERROR = 'CHILD_SUBMIT_TASK_ERROR';
  export const childSubmitTaskError = err => ({ type: CHILD_SUBMIT_TASK_ERROR, err });

  export const childSubmitTask = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/tasks/child/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        childComplete: true,
      })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .then(() => dispatch(childSubmitTaskSuccess()))
    .catch(err => dispatch(childSubmitTaskError(err)))
  };

  // =========== PARENT SUBMIT TASK FOR APPROVAL ==========

  export const PARENT_APPROVE_TASK_SUCCESS = 'PARENT_APPROVE_TASK_SUCCESS';
  export const parentApproveTaskSuccess = () => ({
    type: PARENT_APPROVE_TASK_SUCCESS
  });

  export const PARENT_APPROVE_TASK_ERROR = 'PARENT_APPROVE_TASK_ERROR';
  export const parentApproveTaskError = err => ({
    type: PARENT_APPROVE_TASK_ERROR, err
  });

  export const parentApproveTask = (taskId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        complete: true
      })
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .then(() => dispatch(parentApproveTaskSuccess()))
    .catch(err => dispatch(parentApproveTaskError(err)))
  };