import React from 'react';
import ReactDOM from 'react-dom';
// applyMiddleware管理中间件,compose专门组合函数
import { createStore, applyMiddleware, compose } from 'redux';
// 异步插件
import thunk from 'redux-thunk';
// 让Provider组件下面的组件都可以访问到state
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

// 引入react-redux后,不需要
// import {counter, addGun, removeGun, addGunAsync} from './index.redux.js';
// 只需引入counter
import { counter } from './index.redux.js';

import registerServiceWorker from './registerServiceWorker';;

// 引入react-redux后,不需要
// function render(){
// 	ReactDOM.render(
// 		<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}/>,
// 		document.getElementById('root')
// 	);
// }

// 判断浏览器是否已经下载安装了Redux DevTools
// window.devToolsExtension 要记得执行一下
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : () => {
};

// 传入reducer创建store，使用组合函数compose将中间件管理函数applyMiddleware和reduxDevTools函数组合起来
const store = createStore(counter, compose(
	applyMiddleware(thunk),
    reduxDevTools
));

console.log(`初始枪支数为${store.getState()}`);

// 引入react-redux后,不需要
// render();
// store.subscribe(render);

// 引入react-redux后
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
