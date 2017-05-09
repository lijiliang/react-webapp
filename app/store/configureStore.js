/**
 * Action是用来表达操作消息，Reducer根据Action来更新State
 * Store是单一的，维护着一个全局的State,并根据Action来进行事件分发处理State.
 * Store是一个把Action和Reducer结合起来的对象
 *
 * Redux提供了createStore()方法来生产Store,并提供三个API
 * 三个API分别是：
 *  store.getState() 用来获取state数据
 *  store.subscribe(listener) 用于注册监听函数。每当state数据更新时，将会触发监听函数
 *  store.dispatch(action) 是用于将一个action对象发送给reducer进行处理
 *
 * bindActoinCreators
 * 我们使用ActionCreator来生产action。store.dispatch(action)
 * bindActionCreators就是对store。dispatch进行了再一层封装，将多参数转化为单参数的形式。
 * var actionCreators = bindActionCreators(actionCreators, store.dispatch);
 * 经过bindActionCreators包装过后的action Creator形成了具有改变全局state数据的多个函数，将这些函数分发到各个地方，即能通过调用这些函数来改变全局的state
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers';   // rootReducer 为顶级的 Reducer

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        // 触发redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined,
        /*
        applyMiddleware(
            thunkMiddleware,  //允许我们dispatch()函数
            loggerMiddleware  // 一个很便捷的middleware，用来打印action日志
        ),
        */
    );
    return store;
}
