import React, { Component } from 'react';
import logo from '../logo.svg';
import { RouteComponentProps, Prompt } from 'react-router';
import { Location } from 'history';

export default class Page extends Component<RouteComponentProps> {
	constructor(props: RouteComponentProps) {
		super(props);
		this.comfirmLeave = this.comfirmLeave.bind(this);
	}

	comfirmLeave(location: Location<any>):boolean | string {
		return window.confirm(`confirm to leave to ${location.pathname}?`);
	}

	render() {
		return <>
			<Prompt message={() => this.comfirmLeave(this.props.location)} when={true} />
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
						onClick={() => this.props.history.push('/')}
					>
						go Home
					</a>
					<a
						className="App-link"
						onClick={() => this.props.history.push('/user')}
					>
						go User
					</a>
				</header>
			</div>
		</>;
	}
}
