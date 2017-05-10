/*
action 主要用来传递state的信息
 */
import * as actionTypes from '../constants/userinfo';

// 以下函数统称为 Action Creator
export function update(data){
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    };
}
