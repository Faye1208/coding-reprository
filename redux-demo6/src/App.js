import React, {Component} from 'react';
import {connect} from './self.react-redux';
import logo from './logo.svg';
import './App.css';
import {addGun, removeGun} from "./index.redux";

class App extends Component {
    render () {
        console.log(this.props);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title"> Welcome to React </h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <h3>当前枪支数为{this.props.num}</h3>
                <button onClick={this.props.addGun}>加枪支
                </button>
                <button onClick={this.props.removeGun}>减枪支
                </button>
            </div>
        );
    }
}

App = connect(
    state => ({num: state}),
    {addGun, removeGun}
)(App);

export default App;
