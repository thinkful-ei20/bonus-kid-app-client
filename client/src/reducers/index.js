import {
  TOGGLE_SIDE_NAV,
  TOGGLE_LOGIN_FORM,
  TOGGLE_MODAL, 
  TOGGLE_REWARD_MODAL,
  IS_EDITING,
  IS_ADDING,
  SHOW_DETAILS,
  SHOW_REWARD_DETAILS,
  TOGGLE_ADD_MODAL
} from '../actions';

const initState = {
  sideNavView: false,
  isEditing: {editing: false, id: null, name: null},
  isAdding: {adding: false, id: null},
  loginChoice: {parent: true, child: false},
  modalView: {tasks: false, rewards: false},
  showDetails: {detailView: false, taskDetails: null, rewardDetails: null, childId: null},
  addModal: false
};

export default (state=initState, action) => {
  if(action.type === TOGGLE_SIDE_NAV){
    return {
      ...state,
      sideNavView: !state.sideNavView
    };
  } else if(action.type === IS_EDITING){
    return {
      ...state,
      isEditing: {
        editing: !state.isEditing.editing, 
        id: action.id, 
        name: action.name
      }
    };
  } else if(action.type === IS_ADDING){
    return {
      ...state,
      isAdding: {
        adding: !state.isAdding.adding,
        id: action.id
      }
    };
  } else if(action.type === TOGGLE_LOGIN_FORM) {
    return {
      ...state, 
      loginChoice: {
        parent: !state.loginChoice.parent,
        child: !state.loginChoice.child
      }
    };
  } else if(action.type === TOGGLE_MODAL) {
    return {
      ...state,
      modalView: {tasks: !state.modalView.tasks, rewards: false}, 
      isEditing: {editing: false, id: null, name: null},
      isAdding: {adding: false, id: null},
      showDetails: {detailView: false, taskDetails: null, rewardDetails: null, childId: null}
    };
  } else if(action.type === TOGGLE_REWARD_MODAL) {
    return {
      ...state,
      modalView: {tasks: false, rewards: !state.modalView.rewards} 
    };
  } else if(action.type === SHOW_DETAILS) {
    return {
      ...state,
      showDetails: {
        detailView: !state.showDetails.detailView,
        taskDetails: action.taskDetails,
        rewardDetails: action.rewardDetails,
        childId: action.childId
      }
    }
  } else if(action.type === SHOW_REWARD_DETAILS) {
    return {
      ...state,
      showDetails: {
        detailView: !state.showDetails.detailView,
        rewardDetails: action.rewardDetails
      }
    }
  } else if(action.type === TOGGLE_ADD_MODAL) {
    return {
      ...state,
      addModal: !state.addModal
    }
  }
  return state;
};