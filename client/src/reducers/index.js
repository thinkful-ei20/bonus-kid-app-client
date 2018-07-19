import { TOGGLE_SIDE_NAV } from '../actions';

const initState = {
  sideNavView: false
};

export default (state=initState, action) => {
  if(action.type===TOGGLE_SIDE_NAV){
    return {...state, sideNavView: !state.sideNavView};
  }
  return state;
};