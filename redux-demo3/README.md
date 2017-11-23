> 使用react-redux库，专门用于连接react-redux进行状态管理

 + 安装：npm install react-redux --save

 + 没有subscribe函数，记住reducer，action和dispatch

 + 提供Provider和connect两个接口

> Provider的应用

  + 在组件应用的最外层包裹上Provider组件

  + 把store作为属性

> connect的应用

  + 把外部组件的东西转化为自己组件的props

  + 使用装饰器的方式写connect