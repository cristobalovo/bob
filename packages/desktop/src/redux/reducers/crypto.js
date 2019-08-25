import * as actions from '../actions/actionTypes/crypto';
  
  const INITIAL_STATE = {
    provider: {},
    wallet: {},
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actions.SET_PROVIDER:
        return {
            ...state, 
            provider: action.payload
        };
      case actions.SET_WALLET: 
        return {
          ...state,
          wallet: action.payload,
        }
      default:
        return state;
    }
  };