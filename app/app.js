import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RouterMap from './router/routerMap';

/*
import fn from './redux-demo';
fn();
*/

/*

render(
    <RouterMap history={hashHistory}/>,
    document.getElementById('root')
);

*/

import Hello from './containers/Hello';
const store = configureStore();
render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root')
);
