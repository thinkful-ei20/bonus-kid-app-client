export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const toggleLoginForm = () => ({ type: TOGGLE_LOGIN_FORM });

export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';
export const toggleSideNav = () => ({ type: TOGGLE_SIDE_NAV });

export const TOGGLE_ADD_TASK_FORM = 'TOGGLE_ADD_TASK_FORM';
export const toggleAddTaskForm = (childId=null) => ({ type: TOGGLE_ADD_TASK_FORM, childId });

export const TOGGLE_ADD_REWARD_FORM = 'TOGGLE_ADD_REWARD_FORM';
export const toggleAddRewardForm = (childId=null) => ({ type: TOGGLE_ADD_REWARD_FORM, childId });

export const TOGGLE_PARENT_DETAILS = 'TOGGLE_PARENT_DETAILS';
export const toggleParentDetails = (detailView=false, editing=false, details=null) => ({ 
  type: TOGGLE_PARENT_DETAILS,
  detailView,
  editing, 
  details
});

export const TOGGLE_CHILD_DETAILS = 'TOGGLE_CHILD_DETAILS';
export const toggleChildDetails = (details=null) => ({ type: TOGGLE_CHILD_DETAILS, details });

export const TOGGLE_CHILD_SUBMITTED = 'TOGGLE_CHILD_SUBMITTED';
export const toggleChildSubmitted = () => ({ type: TOGGLE_CHILD_SUBMITTED });