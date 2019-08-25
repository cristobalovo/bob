import * as actions from '../actionTypes/siteNavigation';

export const siteNavigation = (index) => {    
    return (dispatch) => {
        dispatch({
            type: actions.SET_SIDE_NAV,
            payload: index
        })
    }
}

export const toggleSider = (flag) => {   
    return (dispatch) => {
        dispatch({
            type: actions.TOGGLE_SIDE_MENU,
            payload: flag
        })
    }
}

export const setCommentFeed = (feed) => {   
    return (dispatch) => {
        dispatch({
            type: actions.SET_COMMENTS_FROM_3,
            payload: feed
        })
    }
}