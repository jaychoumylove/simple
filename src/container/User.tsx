import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { logout, login } from '../redux/token';
import { TOEKENDATA } from '../types/actions/token';
import ROOTDATA from '../types/reducer';
import Counter from '../component/R';

interface OwnProps {

}

type Props = State & Func;

interface State {
  	state: TOEKENDATA
}

interface Func {
	logout: Function
	login: Function
}

class App extends Component<Props> {
	public constructor(props: Props) {
		super(props);
		this.state = props.state;
		console.log(props);
	}

	public render() {
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
					>`
						Learn React user
					</a>
					<button 
						className="App-link"
						type='button' 
						onClick={() => this.props.login('11','22')}
					>Login</button>
					<button 
						className="App-link"
						type='button' 
						onClick={() => this.props.logout()}
					>logout</button>
					<Counter initial={0} />
				</header>
			</div>
		);
	}
}

export default connect(
    (state: ROOTDATA): State => {
        return { state: state.token };
    },
    { login, logout }
)(App)