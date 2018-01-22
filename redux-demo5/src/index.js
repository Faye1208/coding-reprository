import React from 'react';
import ReactDOM from 'react-dom';

// 使用个人定义的简版redux
import {createStore} from './self.redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// 最简单的reducer例子，只需从redux里引入{ createStore }
const ADD_GUN = '加枪支';
const REMOVE_GUN = '减枪支';

// 创建reducer
function counter (state = 0, action) {
    console.log(state, action);
    switch (action.type) {
        case ADD_GUN:
            return state + 1;
        case REMOVE_GUN:
            return state - 1;
        default:
            return 10;
    }
}

function listener () {
    console.log(`当前枪支数为${store.getState()}`)
}

// 接收reducer作为参数然后生成新的state存储在store中
const store = createStore(counter);

// store.getState()可以查看当前的state
console.log(`初始枪支数为${store.getState()}`);

// 订阅事件，每次state发生变化就会触发
store.subscribe(listener);

// 派发action
store.dispatch({type: ADD_GUN});
store.dispatch({type: ADD_GUN});
store.dispatch({type: ADD_GUN});
store.dispatch({type: REMOVE_GUN});
store.dispatch({type: REMOVE_GUN});



registerServiceWorker();
