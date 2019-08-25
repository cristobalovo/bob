import * as actions from '../actions/actionTypes/siteNavigation';
  
  const INITIAL_STATE = {
    sideNavIndex: 0,
    siderOpen: false,
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actions.SET_SIDE_NAV:
        return {
            ...state, 
            sideNavIndex: action.payload
        };
      case actions.TOGGLE_SIDE_MENU:
        return {
            ...state, 
            siderOpen: action.payload
        };
      default:
        return state;
    }
  };