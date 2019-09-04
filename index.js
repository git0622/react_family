import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  HashRouter
} from "react-router-dom";
import "./index.scss";
import Login from "./src/container/login/login";
import Register from "./src/container/register/register";

import CountWrapper from "./count/countWrapper.js";

class App extends Component {
  render() {
    return (
      <div className="family">
        {/* <CountWrapper /> */}
        <HashRouter>
          <div>
            {/* <AuthRoute></AuthRoute> */}
            {/* <Route path='/boss' component={Boss}></Route> */}
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
          </div>
        </HashRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
