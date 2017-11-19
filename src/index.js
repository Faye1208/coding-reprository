import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

// reducer和action creator分文件管理
import {counter, addGun, removeGun} from './index.redux.js';

import registerServiceWorker from './registerServiceWorker';;

// // 最简单的reducer例子，只需从redux里引入{ createStore }
// const ADD_GUN = '加枪支';
// const REMOVE_GUN = '减枪支';

// // 创建reducer
// function counter(state=0,action){
// 	switch(action.type){
// 		case ADD_GUN:
// 			return state + 1 ;
// 		case REMOVE_GUN:
// 			return state - 1 ;
// 		default:
// 			return state + 10; 
// 	}
// }

// function listener(){
// 	console.log(`当前枪支数为${store.getState()}`)
// }

// // 接收reducer作为参数然后生成新的state存储在store中
// const store = createStore(counter);

// // store.getState()可以查看当前的state
// console.log(`初始枪支数为${store.getState()}`);

// // render();

// // 订阅事件，每次state发生变化就会触发
// store.subscribe(listener);

// // 派发action，
// store.dispatch({type:ADD_GUN});
// store.dispatch({type:ADD_GUN});
// store.dispatch({type:ADD_GUN});
// store.dispatch({type:REMOVE_GUN});
// store.dispatch({type:REMOVE_GUN});


// 手动结合redux和react
// 定义一个render函数，store.subscribe()的参数只能是function。
function render(){
	ReactDOM.render(
		<App store={store} addGun={addGun} removeGun={removeGun}/>,
		document.getElementById('root')
	);
}

const store = createStore(counter);
console.log(`初始枪支数为${store.getState()}`);

// 首次渲染页面
render();
// state发生变化后，从新渲染
store.subscribe(render);

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
