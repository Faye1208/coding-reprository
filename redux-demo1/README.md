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

   **首次渲染**：安装redux --> 引入createStore模块 --> 创建reducer函数，接收两个参数，分别是state和action，最后返回一个新的state --> 将reducer传入createStore()函数，生成store

   **再次渲染**：用户操作（点击"添加"按钮）触发store.dispatch(actionObj)派发事件 --> reducer接收action和state，返回新的state -->
  触发store.subscribe(listener)

 ---

> 手写react和redux结合例子

