import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from './self.redux';
import thunk from './self-redux-thunk';
import arrThunk from './self-redux-array';
import {Provider} from "./self.react-redux";
import App from './App';
import Page from './self.demo';
import {counter} from "./index.redux";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter, applyMiddleware(thunk, arrThunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
