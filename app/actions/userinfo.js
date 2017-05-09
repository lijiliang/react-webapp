/*
action 主要用来传递state的信息
 */
import * as actionTypes from '../constants/userinfo'

// 以下函数统称为 Action Creator
export function login(data) {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}

export function updateCityName(data) {
    return {
        type: actionTypes.UPDATE_CITYNAME,
        data
    }
}
