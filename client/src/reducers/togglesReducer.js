import { 
  TOGGLE_LOGIN_FORM, 
  TOGGLE_SIDE_NAV, 
  TOGGLE_ADD_TASK_FORM, 
  TOGGLE_PARENT_TASK_DETAIL
} from '../actions/toggles';

const initState = {
  loginChoice: { parent: true, child: false },
  sideNavView: false,
  addTaskView: { adding: false, id: null },
  chosenTask: {
    views: { details: false, editing: false },
    task: null
  }
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
  case TOGGLE_PARENT_TASK_DETAIL:
    return {
      ...state,
      chosenTask: {
        views: { details: action.details, editing: action.editing },
        task: action.task
      }
    }
  default:
    return state;
  }
};