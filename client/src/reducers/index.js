import {
  TOGGLE_SIDE_NAV, 
  IS_EDITING,
  IS_ADDING
} from '../actions';

const initState = {
  sideNavView: false,
  isEditing: {editing: false, id: null, name: null},
  isAdding: {adding: false, id: null}
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
  }
  return state;
};