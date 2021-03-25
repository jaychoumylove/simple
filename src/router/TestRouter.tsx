import React, { PureComponent } from "react";
import { Route } from "react-router-dom";
import Page from "../container/Page";
import Test from "../container/Test";
import Zindex from "../container/Zindex";
import Sudoku from "../container/Sudoku";
import ObserveDom from "../container/ObserveDom";
import LoadingPage from "../container/LoadingPage";
import { Switch } from "react-router-dom";
import Subpub from "../container/test/Subpub";
import ClearFloat from "../container/test/ClearFloat";

class TestRouter extends PureComponent {
  render() {
    //@ts-ignore
    const { path } = this.props;
    return (
      <Switch>
        <Route path={path + "/test"} component={Test} />
        <Route path={path + "/page"} component={Page} />
        <Route path={path + "/observer"} component={ObserveDom} />
        <Route path={path + "/zindex"} component={Zindex} />
        <Route path={path + "/sudoku"} component={Sudoku} />
        <Route path={path + "/loading"} component={LoadingPage} />
        <Route path={path + "/subpub"} component={Subpub} />
        <Route path={path + "/clear_float"} component={ClearFloat} />
      </Switch>
    );
  }
}

export default TestRouter;
