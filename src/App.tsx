import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './container/Home';
import User from './container/User';
import Page from './container/Page';
import './util/axios';
import './App.css';

class App extends Component {
	render() {
		return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/user" component={User} />
                    <Route path="/page" component={Page} />
                    <Route component={Home} />
                </Switch>
            </BrowserRouter>
        </Provider>
		);
	}
}

export default App;
