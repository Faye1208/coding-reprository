import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import {counter, addGun, removeGun, addGunAsync} from './index.redux';
import {counter} from './index.redux';


// redux的基本使用
// 1、定义reducer
// function counter (state = 0, action) {
//     switch (action.type) {
//         case '加机关枪':
//             return state + 1;
//         case '减机关枪':
//             return state - 1;
//         default:
//             return 10;
//     }
// }
//
// // 2、传入reducer，创建store
// const store = createStore(counter);
// //store.getState()可以查看当前state
// console.log(store.getState());
//
// function listener () {
//     const current = store.getState();
//     console.log(`现在有${current}把机关枪`);
// }
//
// // 3、订阅事件,每次state变化都会触发
// store.subscribe(listener);
//
// // 4、派发事件
// store.dispatch({type: '加机关枪'});
// console.log(store.getState());


// 设置浏览器的redux-tools
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {
}
const store = createStore(counter, compose(
        applyMiddleware(thunk),
        reduxDevtools
));

// function render () {
//     ReactDOM.render(
//         <App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}/>,
//         document.getElementById('root')
//     );
// }
// // 首次加载时渲染
// render();
// // 发生变化以后再从新渲染
// store.subscribe(render);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
