export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';
export const toggleSideNav = () => ({
  type: TOGGLE_SIDE_NAV
});

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = () => ({
  type: TOGGLE_MODAL
});

export const TOGGLE_ADD_MODAL = 'TOGGLE_ADD_MODAL';
export const toggleAddModal = () => ({
  type: TOGGLE_ADD_MODAL
});


export const TOGGLE_REWARD_MODAL = 'TOGGLE_REWARD_MODAL';
export const toggleRewardModal = () => ({
  type: TOGGLE_REWARD_MODAL
});

export const IS_EDITING = 'IS_EDITING';
export const isEditing = (id=null, name=null) => ({
  type: IS_EDITING, id, name
});

export const IS_ADDING = 'IS_ADDING';
export const isAdding = (id=null) => ({
  type: IS_ADDING, id
});

export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const toggleLoginForm = () => ({
  type: TOGGLE_LOGIN_FORM
});

export const SHOW_DETAILS = 'SHOW_DETAILS';
export const showDetails = (childId=null, taskDetails=null, rewardDetails=null) => ({
  type: SHOW_DETAILS, taskDetails
});

export const SHOW_REWARD_DETAILS = 'SHOW_REWARD_DETAILS';
export const showRewardDetails = (rewardDetails=null) => ({
  type: SHOW_REWARD_DETAILS, rewardDetails
});