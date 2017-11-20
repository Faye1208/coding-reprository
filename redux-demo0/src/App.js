import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGun, removeGun, addGunAsync} from './index.redux';
import logo from './logo.svg';
import './App.css';

// const mapStatetoProps = (state) => {
//     return {num: state}
// };
// const actionCreators = {addGun, removeGun, addGunAsync};
// App = connect(mapStatetoProps, actionCreators)(App)

// 使用了装饰器
@connect(
    (state) => {return {num: state}},
    {addGun, removeGun, addGunAsync}
)

class App extends Component {
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <h2>现在有{this.props.num}把机枪</h2>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>上交武器</button>
                <button onClick={this.props.addGunAsync}>延迟两天</button>
            </div>
        );
    }
}

// const mapStatetoProps = (state) => {
//     return {num: state}
// }
// const actionCreators = {addGun, removeGun, addGunAsync}
// App = connect(
//     mapStatetoProps,
//     actionCreators
// )(App)
export default App;
