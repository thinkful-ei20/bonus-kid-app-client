import togglesReducer from '../../reducers/togglesReducer';

import { 
  TOGGLE_LOGIN_FORM, 
  TOGGLE_SIDE_NAV, 
  TOGGLE_ADD_TASK_FORM, 
  TOGGLE_PARENT_DETAILS,
  TOGGLE_ADD_REWARD_FORM,
  TOGGLE_CHILD_DETAILS,
  toggleLoginForm,
  toggleSideNav,
  toggleAddTaskForm,
  toggleAddRewardForm,
  toggleParentDetails,
  toggleChildDetails
} from '../../actions/toggles';


describe('togglesReducer', () => {

  it('should return the initial state', () => {
    const initialState = {
      loginChoice: { parent: true, child: false },
      sideNavView: false,
      addTaskView: { adding: false, id: null },
      addRewardView: { adding: false, id: null },
      chosenCard: {
        views: { detailView: false, editing: false },
        details: null
      },
      childDetails: { detailView: false, details: null }
    };
    const result = togglesReducer(undefined, {})
    expect(result).toEqual(initialState)
  });

  it('should switch loginChoice=> parent: !state.loginChoice.parent, child: !state.loginChoice.child', () => {
    const initialState = {
      loginChoice: { parent: true, child: false }     
    };
    const action = toggleLoginForm();
    const result = togglesReducer(initialState, action)
    expect(result.loginChoice.parent).toEqual(false);
    expect(result.loginChoice.child).toEqual(true);
  });

  it('should toggle sideNavView', () => {
    const initialState = {
      sideNavView: false,
    };
    const action = toggleSideNav();
    const result = togglesReducer(initialState, action)
    expect(result.sideNavView).toEqual(true);
  });

  it('should toggle addTaskView.adding and set addTaskView.id to childId', () => {
    const initialState = {
      addTaskView: { adding: false, id: null },
    };
    const childId = '123abc';
    const action = toggleAddTaskForm(childId);
    const result = togglesReducer(initialState, action)
    expect(result.addTaskView.adding).toEqual(true);
    expect(result.addTaskView.id).toEqual('123abc');
  });

  it('should toggle addRewardView.adding and set addRewardView.id to childId', () => {
    const initialState = {
      addRewardView: { adding: false, id: null },
    };
    const childId = 'abc123';
    const action = toggleAddRewardForm(childId);
    const result = togglesReducer(initialState, action)
    expect(result.addRewardView.adding).toEqual(true);
    expect(result.addRewardView.id).toEqual('abc123');
  });

  it('should toggle chosenCard.views=> detailView and editing and details to action.details', () => {
    const initialState = {
      chosenCard: {
        views: { detailView: false, editing: false },
        details: null
      }
    };
    const detailView = true;
    const editing = true;
    const details = {
      stuff: 'name maybe?'
    };
    const action = toggleParentDetails(detailView,editing,details);
    const result = togglesReducer(initialState, action)
    expect(result.chosenCard.views.detailView).toEqual(true);
    expect(result.chosenCard.views.editing).toEqual(true);
    expect(result.chosenCard.details).toEqual(details);
  });

  it('should toggle childDetails.detailView details to action.details', () => {
    const initialState = {
      childDetails: { 
        detailView: false, 
        details: null 
      }
    };
    const details = {
      stuff: 'name n stuff?'
    };
    const action = toggleChildDetails(details);
    const result = togglesReducer(initialState, action)
    expect(result.childDetails.detailView).toEqual(true);
    expect(result.childDetails.details).toEqual(details);
  });

});