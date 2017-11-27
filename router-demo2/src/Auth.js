import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from './Auth.redux';
import {Redirect} from 'react-router-dom';

@connect(
    state => state.auth,
    {login}
)

class Auth extends Component{
    // 无状态的constructor是没有意义的
    // constructor (props){
    //     super(props);
    // }
    render(){
        return (
            <div>
                {this.props.isAuth ? <Redirect to="/dashboard"/> : null}
                <h2>您还登录，请登录再查看信息！</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        );
    }
}

export default Auth;