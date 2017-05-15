import * as actionTypes from '../constants/store';

// 更新
export function update(data){
    return {
        type: actionTypes.STORE_UPDATE,
        data
    };
}

// 添加
export function add(item){
    return {
        type: actionTypes.STORE_ADD,
        data: item
    };
}

// 删除
export function rm(item){
    return {
        type: actionTypes.STORE_RM,
        data: item
    };
}
