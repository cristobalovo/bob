import { combineReducers } from 'redux'

import siteNavigation from '../reducers/siteNavigation';
import search from '../reducers/search';
import crypto from '../reducers/crypto';

export default combineReducers({
    navigation: siteNavigation,
    search: search,
    crypto: crypto,
});