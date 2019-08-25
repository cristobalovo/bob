import * as actions from '../actionTypes/search';

export const setSearchText = (url) => {
    return (dispatch) => {
        dispatch({
            type: actions.SEARCH_BY_URL,
            payload: url
        })
    }
}

export const setCurrentDomainRegStatus = (approved) => {
    return (dispatch) => {
        dispatch({
            type: actions.SET_DOMAIN_REG_STATUS,
            payload: approved
        })
    }
}