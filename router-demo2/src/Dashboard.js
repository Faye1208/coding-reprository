import React, { Component } from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
// 凡是需要用到redux的东西都需要引入connect
import { connect } from 'react-redux';
import App from './App';
import {logout} from "./Auth.redux";

class Erying extends Component{
    render() {
        return <h2>二营</h2>
    }
}

class Qibinglian extends Component{
    render(){
        return <h2>骑兵连</h2>
    }
}

class Test extends React.Component{
    // 无状态的constructor是没有意义的
	// constructor (props){
	// 	super(props);
	// }
	render(){
		console.log("--当一个组件作为一个路由的时候，会多了一些什么参数--");
		console.log(this.props);
        // 使用history直接跳转页面
        // this.props.history.push('/')
		return <h4>	测试组件 {this.props.match.params.local}</h4>
	}
}

@connect(
    state => state.auth,
    {logout}
)

class Dashboard extends Component{
    // 无状态的constructor是没有意义的
    // constructor (props){
    //     super(props);
    // }
    render(){
        console.log(this.props);
        const match = this.props.match;
        const redirectToLogin = <Redirect to="/login"></Redirect>
        const app = (
            <div>
                <h2>独立团</h2>
                {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
                <ul>
                    <li>
                        <Link to={`${match.url}/`}>一营</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/erying`}>二营</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/qibinglian`}>骑兵连</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/ordercenter`}>指挥部</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path={`${match.url}`} exact component={App}></Route>
                    <Route path={`${match.url}/erying`} component={Erying}></Route>
                    <Route path={`${match.url}/qibinglian`} component={Qibinglian}></Route>
                    <Route path={`${match.url}/:local`} component={Test}></Route>
                </Switch>
            </div>
        );
        return this.props.isAuth ? app : redirectToLogin;
    }
}

export default Dashboard;