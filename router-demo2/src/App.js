import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';
import './App.css';

// 使用装饰器的写法改写connect
@connect(
    state => ({ num: state.counter }),
    { addGun, removeGun, addGunAsync }
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>当前枪支数为{this.props.num}</h3>
        <button onClick={this.props.addGun}>加枪支</button>
        <button onClick={this.props.removeGun}>减枪支</button>
        <button onClick={this.props.addGunAsync}>延迟添加枪支</button>
      </div>
    );
  }
}

export default App;
