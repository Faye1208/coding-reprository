import React, {Component} from 'react';
import {Map, is} from 'immutable';
// import logo from './logo.svg';
import './App.css';

// immutable的使用例子
// 例子一:使用Map
let obj0 = Map({
    name: 'Faye',
    course: Map({name: 'Jenny'})
});

let obj1 = obj0.set('name', 'May');
console.log(obj0.get('course') === obj1.get('course'));
console.log(obj0 === obj1);

// 例子二:使用is
let obj2 = Map({name: 1, title: 'Faye'});
let obj3 = Map({name: 1, title: 'Faye'});
console.log(is(obj2, obj3));

// 结合immutable定制组件
class App extends Component {
    constructor (props) {
        super(props);
        this.state = Map({
            num: 1,
            title: true
        });

        this.handleClickNum = this.handleClickNum.bind(this);
        this.handleClickTitle = this.handleClickTitle.bind(this);
    }

    handleClickNum () {
        console.log(this.state);
        this.setState(
            // this.state.set('num', this.state.get('num') + 1)
        );
    }

    handleClickTitle () {
        // this.setState({
        //     title: !this.state.title
        // });
        this.setState(
            // this.state.set('title',!this.state.get('title'))
        )
    }

    render () {
        return (
            <div className="App">
                <h2>App, {this.state.get('num')}</h2>
                <button onClick={this.handleClickNum}>btnNum</button>
                <button onClick={this.handleClickTitle}>btnTitle</button>
                <Demo title={this.state.get('title')}/>
            </div>
        );
    }
}

class Demo extends Component {
    // 性能优化
    shouldComponentUpdate (nextProps, nextState) {
        return is(nextProps, this.props);
    }

    render () {
        console.log('demo render 执行中');
        return (
            <h2>Hi! {this.props.title ? "Faye" : "Jenny"}</h2>
        );
    }
}

// 当某个组件是根据父组件的某个值来渲染的，即该值没有发生改变这个组件就不渲染，可以使用PureComponent
// class Demo extends React.PureComponent {
//     render () {
//         console.log('demo render 执行中');
//         return (
//             <h2>Hi! {this.props.title ? "Faye" : "Jenny"}</h2>
//         );
//     }
// }


export default App;
