import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RouterMap from './router/routerMap';

import './static/css/common.less';
import './static/css/font.less';

const store = configureStore();
render(
    <Provider store={store}>
        <RouterMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);
