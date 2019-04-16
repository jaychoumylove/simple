import React, { Component } from 'react';
import logo from '../logo.svg';
import BackHandle from '../component/hoc/Hoc';
import { RouteComponentProps } from 'react-router';

export default class Page extends Component<RouteComponentProps> {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React page
					</a>
					<a
						className="App-link"
						onClick={()=> this.props.history.push('/')}
					>
						go Home
					</a>
					<a
						className="App-link"
						onClick={()=> this.props.history.push('/user')}
					>
						go User
					</a>
				</header>
			</div>
		);
	}
}
