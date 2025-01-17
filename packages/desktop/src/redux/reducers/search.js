import * as actions from '../actions/actionTypes/search';
  
  const INITIAL_STATE = {
    currentSearch: `https://www.google.com`,
    currentSearchRegistered: false,
    tempSearchString: '',
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actions.SEARCH_BY_URL:
        return {
            ...state, 
            currentSearch: action.payload
        };
      case actions.SET_DOMAIN_REG_STATUS: 
        return {
          ...state,
          currentSearchRegistered: action.payload,
        }
      case actions.SET_TEMP_SEARCH: 
        return {
          ...state,
          tempSearchString: action.payload,
        }
      default:
        return state;
    }
  };