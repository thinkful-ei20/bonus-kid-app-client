export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const toggleLoginForm = () => ({ type: TOGGLE_LOGIN_FORM });

export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';
export const toggleSideNav = () => ({ type: TOGGLE_SIDE_NAV });

export const TOGGLE_ADD_TASK_FORM = 'TOGGLE_ADD_TASK_FORM';
export const toggleAddTaskForm = (childId=null) => ({
  type: TOGGLE_ADD_TASK_FORM, childId
});