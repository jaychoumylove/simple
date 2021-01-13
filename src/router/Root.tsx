import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter,
  RouteComponentProps,
} from "react-router-dom";
import Home from "../container/Home";
import User from "../container/User";
import Page from "../container/Page";
import Test from "../container/Test";
import Zindex from "../container/Zindex";
import Sudoku from "../container/Sudoku";
import ObserveDom from "../container/ObserveDom";
import LoadingPage from "../container/LoadingPage";

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/user"
            component={(props: RouteComponentProps) => <User {...props} />}
          />
          <Route path="/page" component={Page} />
          <Route path="/test" component={Test} />
          <Route path="/observer" component={ObserveDom} />
          <Route path="/zindex" component={Zindex} />
          <Route path="/sudoku" component={Sudoku} />
          <Route path="/loading" component={LoadingPage} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
