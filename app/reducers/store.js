// 创建规则
import * as actionTypes from '../constants/store';

const initialState = [];

export default function store (state = initialState, action){
    switch(action.type){
    case actionTypes.STORE_UPDATE:
        return action.data;
    case actionTypes.STORE_ADD:
        state.unshift(action.data);
        return state;
    case actionTypes.STORE_RM:
        // 过滤
        return state.filter(item => {
            // 如果两个ID不相等，则直接返回，没必要删除
            if(item.id !== action.data.id) {
                return item;
            }
        });
    default:
        return state;
    }
}
