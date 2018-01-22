import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from './self.redux';

// 手写react-redux

// 把当前组件与redux连接，然后将redux的某些属性取得放在当前组件里作为该组件的属性
// 1、负责接收一个组件，把该组件需要的在state里面的属性返回到该组件里
// 2、数据变化的时候可以通知该组件
export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
    return class ConnectComponent extends React.Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor (props, context) {
            super(props, context);
            this.state = {
                props: {}
            }
        }

        componentDidMount () {
            const {store} = this.context;
            // 保证每次dispatch的时候都可以被监听到
            store.subscribe(() => this.update());
            this.update();
        }

        update () {
            // 获取mapStateToProps, mapDispatchToProps并把他们放到this.props里面
            const {store} = this.context;
            console.log(store);
            const stateProps = mapStateToProps(store.getState());
            // 方法不能直接给，需要dispatch
            const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch);
            this.setState({
                props: {
                    ...this.state.props,
                    ...stateProps,
                    ...dispatchProps
                }
            });
        }

        render () {
            return <WrapComponent {...this.state.props}></WrapComponent>
        }
    }
}

// 用function的方式写connect
// export function connect(mapStateToProps, mapDispatchToProps){
//     return function (WrapComponent) {
//         return class ConnectComponent extends React.Component{
//
//         }
//     }
// }

// Provider,把传入的属性store放到context里，所有的子元素就可以直接取到store
export class Provider extends React.Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    constructor (props, context) {
        super(props, context);
        this.store = props.store
    }

    getChildContext () {
        return {store: this.store}
    }

    render () {
        return this.props.children;
    }
}