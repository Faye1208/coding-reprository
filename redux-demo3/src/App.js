import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux.js';
import logo from './logo.svg';
import './App.css';
import Demo from './demo';

class App extends Component {
  render() {
     // 引入react-redux后,不需要这么写了
    // const num = this.props.store.getState();
    // const addGun = this.props.addGun;
    // const removeGun = this.props.removeGun;
    // const addGunAsync =this.props.addGunAsync;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to React </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*引入react-redux后,改为下面的写法*/}
        {/*<h3>当前枪支数为{num}</h3>*/}
        {/*<button onClick={() => {this.props.store.dispatch(addGun())}}>加枪支</button>*/}
        {/*<button onClick={() => {this.props.store.dispatch(removeGun())}}>减枪支</button>*/}
        {/*<button onClick={() => {this.props.store.dispatch(addGunAsync())}}>延迟添加枪支</button>*/}
        <h3>当前枪支数为{this.props.num}</h3>
        <button onClick={this.props.addGun}>加枪支</button>
        <button onClick={this.props.removeGun}>减枪支</button>
        <button onClick={this.props.addGunAsync}>延迟添加枪支</button>
          <Demo/>
      </div>
    );
  }
}

// 在state中，我们需要哪些数据转化为props
const mapStatetoProps = state => {return {num: state}};
// 把需要用到的action creator都转化为props
const actionCreators = { addGun, removeGun, addGunAsync };

// 标准的装饰器模式，connect先执行，然后在把App传进来，返回一个新的App组件
App = connect(mapStatetoProps, actionCreators)(App);
export default App;
