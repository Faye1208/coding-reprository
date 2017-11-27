> 安装redux:

     $  npm install redux --save

----

> 手写一个简单的redux例子

  + 安装redux:

        $  npm install redux --save

  + 在页面引入createStore模块:

        import { createStore }  from 'redux';

  + 创建reducer:

        function counter(state=0,action){
              switch(action.type){
                    case '添加':
                        return state + 1;
                    case '减少':
                        return state - 1;
                    default:
                        return 10;
              }
        }

  + 创建store并将reducer传入:

        const store = createStore(counter);

  + 通过访问store.getState()可以查看当前的state：

        console.log(store.getState());     // 10

  + 通过store.dispatch(actionObj)派发事件:

         store.dispatch({type:'添加'});
         store.dispatch({type:'减少'});

  + 订阅store.subscribe(listener)，每次state变化都会触发listener函数:

         function listener(){
               console.log(store.getState());
         }
         store.subscribe(listener);

> 流程：

   **首次**：安装redux --> 引入createStore模块 --> 创建reducer函数，接收两个参数，分别是state和action，最后返回一个新的state --> 将reducer传入createStore()函数，生成store

   **再次**：用户操作（点击"添加"按钮）触发store.dispatch(actionObj)派发事件 --> reducer接收action和state，返回新的state -->
  触发store.subscribe(listener)

 ---

> 手写react和redux结合例子

 + 新建index.redux.js文件,定义操作类型，reducer和action creator

 + 在index.js中，

       引入reducer，创建store，把store传给App组件作为属性；

       接着声明一个渲染函数render(),执行并用传入subscribe(render),以便state变化可以即时更新；

       引入action creator，并传给App组件作为属性；



 + 在App.js中，派发事件

        从父组件中拿到store和action creator，创建点击事件触发事件派发

 + 这种方式读取state或者action creator需要通过层层传递，特别繁琐，引入react-redux会方便很多。
