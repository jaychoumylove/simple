import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { login, logout, loginA } from '../redux/token';
import { bindActionCreators, Action, Dispatch } from 'redux';
import { TOEKENDATA } from '../types/actions/token';
import ROOTDATA from '../types/reducer';

type Props = State & Func;

interface State {
  state: TOEKENDATA
}

interface Func {
  logout: Function
  loginA: Function
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
            type='button' onClick={() => this.props.loginA('11','22')}>Login</button>
            <button 
              className="App-link"
              type='button' onClick={() => this.props.logout()}>logout</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state: ROOTDATA): State => {
  return { state: state.token };
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return bindActionCreators({ loginA, logout }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)