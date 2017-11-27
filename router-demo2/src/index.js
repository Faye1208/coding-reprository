import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
// import App from './App';
// import { counter } from './index.redux.js';
import reducers from './reducer';
import registerServiceWorker from './registerServiceWorker';
import Auth from './Auth';
import Dashboard from './Dashboard';

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => {}
));
console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path='/login' component={Auth}></Route>
				<Route path='/dashboard' component={Dashboard}></Route>
                {/*无论在什么页面，指定一加载应用时的页面*/}
                <Redirect to='/dashboard'></Redirect>
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();


