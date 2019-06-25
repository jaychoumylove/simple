import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../container/Home';
import User from '../container/User';
import Page from '../container/Page';
import Test from '../container/Test';
import Zindex from '../container/Zindex';
import Sudoku from '../container/Sudoku';

class Root extends Component {
	render() {
		return (
			<BrowserRouter>
                <Switch>
                    <Route path="/user" component={User} />
                    <Route path="/page" component={Page} />
                    <Route path="/test" component={Test} />
                    <Route path="/zindex" component={Zindex} />
                    <Route path='/sudoku' component={Sudoku} />
                    <Route component={Home} />
                </Switch>
            </BrowserRouter>
		);
	}
}

export default Root;
