import { combineReducers } from 'redux';

import foods from './foods';
import cart from './cart';
import filter from './filter';

export default combineReducers({
    foods,
    cart,
    filter,
});
