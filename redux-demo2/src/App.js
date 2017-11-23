import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const num = this.props.store.getState();
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const addGunAsync =this.props.addGunAsync;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to React </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>当前枪支数为{num}</h3>
        <button onClick={() => {this.props.store.dispatch(addGun())}}>加枪支</button>
        <button onClick={() => {this.props.store.dispatch(removeGun())}}>减枪支</button>
        <button onClick={() => {this.props.store.dispatch(addGunAsync())}}>延迟添加枪支</button>
      </div>
    );
  }
}

export default App;
