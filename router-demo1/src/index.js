import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import { counter } from './index.redux.js';
import registerServiceWorker from './registerServiceWorker';;

const store = createStore(counter, compose(
	applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => {}
));

function Erying () {
	return <h2>二营</h2>
}

function Qibinglian () {
	return <h2>骑兵连</h2>
}

class Test extends React.Component{
	// constructor (props){
	// 	super(props);
	// }
	render(){
		console.log("--当一个组件作为一个路由的时候，会多了一些什么参数--");
		console.log(this.props);
        // 使用history直接跳转页面
        // this.props.history.push('/')
		return <h4>	测试组件 {this.props.match.params.location}</h4>
	}
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to='/'>一营</Link>
					</li>
					<li>
						<Link to='/erying'>二营</Link>
					</li>
					<li>
						<Link to='/qibinglian'>骑兵连</Link>
					</li>
				</ul>

				<Switch>
                    {/*无论在什么页面，指定一加载应用时的页面*/}
                    {/*<Redirect to='/qibinglian'></Redirect>*/}
					<Route path='/' exact component={App}></Route>
					<Route path='/erying' component={Erying}></Route>
					<Route path='/qibinglian' component={Qibinglian}></Route>
                    {/*使用url参数*/}
					<Route path='/:location'  component={Test}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();


