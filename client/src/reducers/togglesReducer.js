import { TOGGLE_LOGIN_FORM, TOGGLE_SIDE_NAV } from '../actions/toggles';

const initState = {
  loginChoice: { parent: true, child: false },
  sideNavView: false,
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
  default:
    return state;
  }
};