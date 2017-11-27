> 使用redux-thunk插件处理异步操作

  + 先从redux库中引入applyMiddleware中间件管理函数

  + 把thunk传到applyMiddleware()里从而实现异步操作,即

        applyMiddleware(thunk)

> 使用redux的chrome浏览器调试工具

     window.devToolsExtension ? window.devToolsExtension() : () => {}

> 使用compose组合函数，把以上两个函数组合起来传到createStore()中作为第二参数

    compose(
            applyMiddlewar(thunk),
            window.devToolsExtension ? window.devToolsExtension() : () => {}
    )