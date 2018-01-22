/* 简版redux */

// 发布订阅机制
export function createStore (reducer) {
    // 当前的状态
    let currentState = {};
    // 监听函数
    let currentListener = [];

    // 读取当前的状态
    function getState () {
        return currentState;
    }

    // 订阅功能，添加监听函数
    function subscribe (listener) {
        currentListener.push(listener);
    }

    // 事件派发功能
    function dispatch (action) {
        currentState = reducer(currentState, action);
        currentListener.forEach(v => v());
        return action;
    }

    // 获取一个初始的state,让reducer命中default时的state
    dispatch({type:'@FAYE/SELF-REDUX'});

    return {getState, subscribe, dispatch}
}