import {
  TOGGLE_SIDE_NAV, 
  IS_EDITING
} from '../actions';

const initState = {
  sideNavView: false,
  isEditing: {editing: false, id: null, name: null}
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
  }
  return state;
};