/**
 * Redux提供了combineReducers()合并所有reducer的返回值，组合整个state
 */
import { combineReducers } from 'redux';
import userinfo from './userinfo';

const rootReducer = combineReducers({
    userinfo
});

export default rootReducer;
