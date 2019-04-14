import React, { Component } from 'react';
import logo from '../logo.svg';
import { RouteComponentProps } from 'react-router';

class App extends Component<RouteComponentProps> {

	constructor(props: RouteComponentProps) {
		super(props);
		this.handleOnUrlChange = this.handleOnUrlChange.bind(this);
	}

	componentDidMount() {
		window.addEventListener('popstate', this.handleOnUrlChange);
	}
	componentWillUnmount() {
		console.info('willunmount')
		window.removeEventListener('popstate', this.handleOnUrlChange)
	}

	handleOnUrlChange(e: any) {
		// alert('hello');
		console.info(document.URL);
		console.log(e);
	}
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
						Learn React home
					</a>
					<a
						className="App-link"
						onClick={()=> this.props.history.push('/page')}
					>
						go page
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

export default App;
