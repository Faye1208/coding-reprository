> 手写一个简易的react-redux

 + 编写Provider组件

   组件功能： 为全局提供了一个context属性，即需要把传入的属性store放到context里，然后所有的子元素就可以直接取到store

 + 编写connect高阶组件

    功能：

    1、负责接收一个组件，把该组件需要的在state里面的属性放在到该组件里，作为该组件的属性

    2、数据变化的时候可以通知该组件

> 添加redux的bindActionCreators功能

   功能：接收actionCreators和dispatch作为参数，然后使用dispatch调用actionCreators