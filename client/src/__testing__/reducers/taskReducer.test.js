import taskReducer from '../../reducers/taskReducer';

import {
  POST_TASK_SUCCESS,
  POST_TASK_ERROR,
  PUT_TASK_SUCCESS,
  PUT_TASK_ERROR,
  DELETE_TASK_SUCCESS,
  deleteTaskSuccess,
  DELETE_TASK_ERROR,
  CHILD_SUBMIT_TASK_SUCCESS,
  PARENT_APPROVE_TASK_SUCCESS,
  CHILD_SUBMIT_TASK_ERROR,
  PARENT_APPROVE_TASK_ERROR,
  postTaskSuccess,
  postTaskError,
  putTaskSuccess,
  deleteTaskError,
  childSubmitTaskSuccess,
  childSubmitTaskError,
  parentApproveTaskSuccess,
  parentApproveTaskError
} from '../../actions/tasks';

describe('taskReducer', () => {

  it('should return the initial state', () => {
    const initialState = {
      error: null
    };
    const result = taskReducer(undefined, {})
    expect(result).toEqual(initialState)
  });

  it('should return state', () => {
    const initialState = {
      error: null
    };
    const task = {name:"testTask", pointValue:100, complete: false, childComplete: false};

    const action = postTaskSuccess(task);
    const result = taskReducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  // it('should set error:action.err', () => {
  //   const err = {message: 'exampleTaskError'}
  //   const initialState = {
  //     error: null
  //   };
  //   const action = postTaskError(err);
  //   const result = taskReducer(initialState, action);
  //   expect(result.error.message).toEqual('exampleTaskError');
  //   expect(result.error).toEqual(err);
  // });

  it('should return state', () => {
    const initialState = {
      error: null
    };
    const task = {name:"testPutTask", pointValue:100, complete: false, childComplete: false};
    const action = putTaskSuccess(task);
    const result = taskReducer(initialState, action);
    expect(result).toEqual(initialState);
  });


  // it('should set error:action.err', () => {
  //   const err = {message: 'exampleTaskPutError'}
  //   const initialState = {
  //     error: null
  //   };
  //   const action = putTaskError(err);
  //   const result = taskReducer(initialState, action);
  //   expect(result.error.message).toEqual('exampleTaskPutError');
  //   expect(result.error).toEqual(err);
  // });

  it('should return state', () => {
    const initialState = {
      error: null
    };
    const action = deleteTaskSuccess();
    const result = taskReducer(initialState, action)
    expect(result).toEqual(initialState);
  });

  // it('should set error: action.err', () => {
  //   const err = {message:'test delete Reward Error'};
  //   const initialState = {
  //     error: null
  //   };
  //   const action = deleteTaskError(err);
  //   const result = taskReducer(initialState, action)
  //   expect(result.error).toEqual(err);
  // });

  it('should return state', () => {
    const initialState = {
      error: null
    };
    const action = childSubmitTaskSuccess();
    const result = taskReducer(initialState, action)
    expect(result).toEqual(initialState);
  });

  it('should set error: action.err', () => {
    const err = {message:'test submit Task Error'};
    const initialState = {
      error: null
    };
    const action = childSubmitTaskError(err);
    const result = taskReducer(initialState, action)
    expect(result.error).toEqual(err);
  });

  it('should return state', () => {
    const initialState = {
      error: null
    };
    const action = parentApproveTaskSuccess();
    const result = taskReducer(initialState, action)
    expect(result).toEqual(initialState);
  });

  it('should set error: action.err', () => {
    const err = {message:'test parent approve Task Error'};
    const initialState = {
      error: null
    };
    const action = parentApproveTaskError(err);
    const result = taskReducer(initialState, action)
    expect(result.error).toEqual(err);
  });

});