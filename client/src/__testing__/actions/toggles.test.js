import * as actions from '../../actions/toggles';

describe('actions', () => {

  it('should have a type of TOGGLE_LOGIN_FORM', () => {
    const expectedAction = {
      type: 'TOGGLE_LOGIN_FORM'      
    }
    const result = actions.toggleLoginForm();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of TOGGLE_SIDE_NAV', () => {
    const expectedAction = {
      type: 'TOGGLE_SIDE_NAV'      
    }
    const result = actions.toggleSideNav();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of TOGGLE_ADD_TASK_FORM', () => {
    const childId = '5b5d014829d7fa1ec1155zZz'
    const expectedAction = {
      type: 'TOGGLE_ADD_TASK_FORM',
      childId      
    }
    const result = actions.toggleAddTaskForm(childId);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of TOGGLE_ADD_REWARD_FORM', () => {
    const childId = '5b5d014829d7fa1ec1155zZz'
    const expectedAction = {
      type: 'TOGGLE_ADD_REWARD_FORM',
      childId      
    }
    const result = actions.toggleAddRewardForm(childId);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of TOGGLE_PARENT_DETAILS', () => {
    const detailView = {};
    const editing = {};
    const details = {};
    const expectedAction = {
      type: 'TOGGLE_PARENT_DETAILS',
      detailView,
      editing,
      details      
    }
    const result = actions.toggleParentDetails(detailView, editing, details);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of TOGGLE_CHILD_DETAILS', () => {
    const details = {};
    const expectedAction = {
      type: 'TOGGLE_CHILD_DETAILS',
      details      
    }
    const result = actions.toggleChildDetails(details);
    expect(result).toEqual(expectedAction);
  });

});