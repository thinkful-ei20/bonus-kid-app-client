import { 
  TOGGLE_LOGIN_FORM, 
  TOGGLE_SIDE_NAV, 
  TOGGLE_ADD_TASK_FORM, 
  TOGGLE_PARENT_DETAILS,
  TOGGLE_ADD_REWARD_FORM,
  TOGGLE_CHILD_DETAILS,
  TOGGLE_CHILD_SUBMITTED
} from '../actions/toggles';

const initState = {
  loginChoice: { parent: true, child: false },
  sideNavView: false,
  addTaskView: { adding: false, id: null },
  addRewardView: { adding: false, id: null },
  chosenCard: {
    views: { detailView: false, editing: false },
    details: null
  },
  childDetails: { detailView: false, details: null },
  newChildCreated: false
};

export default (state=initState, action) => {
  switch(action.type){
  case TOGGLE_LOGIN_FORM:
    return {
      ...state,
      loginChoice: {
        parent: !state.loginChoice.parent,
        child: !state.loginChoice.child
      }
    };
  case TOGGLE_SIDE_NAV:
    return { ...state, sideNavView: !state.sideNavView };
  case TOGGLE_ADD_TASK_FORM:
    return {
      ...state, 
      addTaskView: {
        adding: !state.addTaskView.adding,
        id: action.childId
      }
    }
  case TOGGLE_PARENT_DETAILS:
    return {
      ...state,
      chosenCard: {
        views: { detailView: action.detailView, editing: action.editing },
        details: action.details
      }
    }
  case TOGGLE_ADD_REWARD_FORM:
    return {
      ...state,
      addRewardView: {
        adding: !state.addRewardView.adding,
        id: action.childId
      }
    }
  case TOGGLE_CHILD_DETAILS:
    return {
      ...state,
      childDetails: { 
        detailView: !state.childDetails.detailView, 
        details: action.details
      }
    }
  case TOGGLE_CHILD_SUBMITTED:
    return {
      ...state,
      newChildCreated: action.isSubmitted
    }
  default:
    return state;
  }
};