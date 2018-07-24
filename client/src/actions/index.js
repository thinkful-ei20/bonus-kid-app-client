export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';
export const toggleSideNav = () => ({
  type: TOGGLE_SIDE_NAV
});

export const IS_EDITING = 'IS_EDITING';
export const isEditing = (id=null, name=null) => ({
  type: IS_EDITING, id, name
});

export const IS_ADDING = 'IS_ADDING';
export const isAdding = id => ({
  type: IS_ADDING, id
});
