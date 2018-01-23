import React from 'react';
import ReactDOM from 'react-dom';
// 引入applyMiddleware
import {createStore} from './self.redux';
import {Provider} from "./self.react-redux";
import App from './App';
import Page from './self.demo';
import {counter} from "./index.redux";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
