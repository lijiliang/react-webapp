/**
 * 有了Action来传达需要操作的信息，那么就需要有根据这个信息来对应操作的方法。这就是reducer
 * Reducer一般为简单的处理函数
 * 传入旧的state和指示操作的action来更新state
 *
 * reducer一定要保持纯净。只要传入参数相同，返回计算得到的下一个state就一定相同。没有特殊情况，没有副作用，没有API请求，没有变量修改，单纯执行计算。
 */
import * as actionTypes from '../constants/userinfo';

const initialState = {};

export default function userinfo(state = initialState, action) {
    switch (action.type) {
    // 登录
    case actionTypes.USERINFO_LOGIN:
        // 更新 字段
        return action.data;
    // 修改城市
    case actionTypes.UPDATE_CITYNAME:
        return action.data;
    default:
        return state;
    }
}
