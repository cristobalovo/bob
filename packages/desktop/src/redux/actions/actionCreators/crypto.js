import * as actions from '../actionTypes/crypto';

export const setProvider = (provider) => {
    return (dispatch) => {
        dispatch({
            type: actions.SET_PROVIDER,
            payload: provider
        })
    }
}

export const setWallet = (wallet) => {
    return (dispatch) => {
        dispatch({
            type: actions.SET_WALLET,
            payload: wallet
        })
    }
}