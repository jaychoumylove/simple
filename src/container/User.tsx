import React, { Component } from "react";
import logo from "../logo.svg";
import { connect } from "react-redux";
import { logout, login } from "../redux/token";
import { TOKEN_DATA } from "../types/actions/token";
import { default as ROOT_DATA } from "../types/reducer";
import Counter from "../component/R";
import { RouteComponentProps } from "react-router";
import Axios from "axios";

type ownProps = State & Func;

interface State {
  state: TOKEN_DATA;
}

interface Func {
  logout: Function;
  login: Function;
}

type Props = RouteComponentProps & ownProps;

class User extends Component<Props> {
  // readonly state = this.props.state;

  async login() {
    const user = "react";
    const pwd = "react";
    await Axios.post("user/login", {
      user,
      pwd,
    });
    // this.props.login(mobile,password);
  }

  public async test() {
    const user = {
      mobile: "15512345679",
      pwd: 123456,
    };
    await Axios.post("token/user", user, {
      baseURL: "http://symfony.local/",
    });
    // await Axios.get('/person', {
    // 	baseURL: 'http://api.laravel.local/person',
    // });
    // const res: any = await Axios.post('token/user', {
    // 	mobile: '13263995262',
    // 	password: '123456',
    // 	is_third: 1
    // }, {
    // 	baseURL: 'http://api.piaopiao.com/v1/'
    // });

    // const { token } = res;
    // await Axios.put('user/change_bind_mobile', user, {
    // 	baseURL: 'http://api.piaopiao.com/v1/',
    // });
    // await Axios.post('v1/token/user', user, {
    // 	baseURL: 'http://www.piaopiao.com/'
    // })
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
          >
            ` Learn React user
          </a>
          <button
            className="App-link"
            type="button"
            onClick={() => this.login()}
          >
            Login
          </button>
          <button
            className="App-link"
            type="button"
            onClick={() => this.test()}
          >
            test
          </button>
          <button
            className="App-link"
            type="button"
            onClick={() => this.props.logout()}
          >
            logout
          </button>
          <button
            className="App-link"
            type="button"
            onClick={() => this.props.history.push("/page")}
          >
            go page
          </button>
          <Counter initial={0} />
        </header>
      </div>
    );
  }
}

export default connect(
  (state: ROOT_DATA): State => {
    return { state: state.token };
  },
  { login, logout }
)(User);
