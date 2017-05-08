import { createStore } from 'redux';

export default function(){
    // 定义计算规则，即 reducer
    function counter(state = 0, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    }

    // 根据计算规则生成 store
    const store = createStore(counter);

    // 定义数据(即state)变化之后的派发规则
    store.subscribe(() => {
        console.log('current state', store.getState());
    });

    // 触发数据变化
    store.dispatch({
        type: 'INCREMENT'
    });
    store.dispatch({
        type: 'INCREMENT'
    });
    store.dispatch({
        type: 'INCREMENT'
    });
    store.dispatch({
        type: 'DECREMENT'
    });
}
