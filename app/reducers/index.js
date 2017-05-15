/**
 * Redux提供了combineReducers()合并所有reducer的返回值，组合整个state
 */
import { combineReducers } from 'redux';
import userinfo from './userinfo';
import store from './store';

const rootReducer = combineReducers({
    userinfo,
    store
});

export default rootReducer;
