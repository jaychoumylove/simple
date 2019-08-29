import React, { Component } from 'react';
import logo from '../logo.svg';
import { RouteComponentProps } from 'react-router';
import { Button, Icon } from 'antd';
import Test from '../component/Test';

class App extends Component<RouteComponentProps> {
	render() {
		if (true) {
			return <Test />
		}

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
						Learn React home
					</a>
					<Button 
						type="link"
						onClick={() => this.props.history.push('/page')}
					>
						<Icon type="left" />
						Page
					</Button>
					<a
						className="App-link"
						onClick={() => this.props.history.push('/user')}
					>
						go User
					</a>
				</header>
			</div>
		);
	}
}

export default App;
