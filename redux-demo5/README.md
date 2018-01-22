> 手写一个简版的迷你redux

 + 创建createStore函数，接收一个reducer作为参数

        export function createStore (reducer){}

 + 添加currentState和currentListener两个变量用于存储当前的state以及监听函数

         let currentState = {};
         let currentListener = [];

 + 添加getState功能，用于读取当前的state

 + 添加订阅功能，增加监听函数

 + 添加事件派发功能，调用reducer和监听函数