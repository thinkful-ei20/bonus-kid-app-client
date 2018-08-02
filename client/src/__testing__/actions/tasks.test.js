import * as actions from '../../actions/tasks';

describe('actions', () => {

  it('should have a type of POST_TASK_SUCCESS', () => {
    const task = {};    
    const expectedAction = {
      type: 'POST_TASK_SUCCESS',
      task
    }
    const result = actions.postTaskSuccess(task);
    expect(result).toEqual(expectedAction);
  });
 
  it('should have a type of POST_TASK_ERROR', () => {
    const err = {};    
    const expectedAction = {
      type: 'POST_TASK_ERROR',
      err
    }
    const result = actions.postTaskError(err);
    expect(result).toEqual(expectedAction);
  });

  //postTask needed--------------------------------

  it('should have a type of PUT_TASK_SUCCESS', () => {
    const task = {};    
    const expectedAction = {
      type: 'PUT_TASK_SUCCESS',
      task
    }
    const result = actions.putTaskSuccess(task);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of PUT_TASK_ERROR', () => {
    const err = {};    
    const expectedAction = {
      type: 'PUT_TASK_ERROR',
      err
    }
    const result = actions.putTaskError(err);
    expect(result).toEqual(expectedAction);
  });

  //editTask needed----------------------------------

  it('should have a type of DELETE_TASK_SUCCESS', () => {
    const expectedAction = {
      type: 'DELETE_TASK_SUCCESS'
    }
    const result = actions.deleteTaskSuccess();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of DELETE_TASK_ERROR', () => {
    const err = {};    
    const expectedAction = {
      type: 'DELETE_TASK_ERROR',
      err
    }
    const result = actions.deleteTaskError(err);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CHILD_SUBMIT_TASK_SUCCESS', () => {
    const expectedAction = {
      type: 'CHILD_SUBMIT_TASK_SUCCESS'
    }
    const result = actions.childSubmitTaskSuccess();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CHILD_SUBMIT_TASK_ERROR', () => {
    const err = {};    
    const expectedAction = {
      type: 'CHILD_SUBMIT_TASK_ERROR',
      err
    }
    const result = actions.childSubmitTaskError(err);
    expect(result).toEqual(expectedAction);
  });

  //childSubmitTask needed----------------------------------

  it('should have a type of PARENT_APPROVE_TASK_SUCCESS', () => {
    const expectedAction = {
      type: 'PARENT_APPROVE_TASK_SUCCESS'
    }
    const result = actions.parentApproveTaskSuccess();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of PARENT_APPROVE_TASK_ERROR', () => {
    const err = {};    
    const expectedAction = {
      type: 'PARENT_APPROVE_TASK_ERROR',
      err
    }
    const result = actions.parentApproveTaskError(err);
    expect(result).toEqual(expectedAction);
  });

  //parentApproveTask needed----------------------------------

});