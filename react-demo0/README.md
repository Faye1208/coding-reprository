> React性能优化（一）

 + 组件内性能优化

   + 属性传递优化

     +  传递参数时尽可能传递需要用到的参数

     +  尽量不要在render中新建变量

 + 组件间的性能优化

   + 使用shouldComponentUpdate以及其两个参数nextProp和nextState，可以结合immutablejs来定制。

   + 或者使用PureComponent，当某个组件是根据父组件的某个值来渲染的，即该值没有发生改变这个组件就不渲染，那么该组件就可以不需要定制shouldComponentUpdate