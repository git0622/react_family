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
import "./src/https.js";
import Login from "./src/container/login/login";
import Register from "./src/container/register/register";
import AuthRoute from "./src/component/authroute/authroute";

import reducers from "./src/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import BossInfo from "./src/container/bossInfo/bossInfo.js";
import GeniusInfo from "./src/container/geniusInfo/geniusInfo.js";
import Dashboard from "./src/component/dashboard/dashboard.js";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


class App extends Component {
  render() {
    return (
      <div className="family">
        <HashRouter>
          <div>
            <AuthRoute></AuthRoute>
            {/* Switch 只要命中前面的路由，后面的就不用管了 */}
            <Switch>
              <Route path="/geniusInfo" component={GeniusInfo}></Route>
              <Route path="/bossInfo" component={BossInfo}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              {/* <Route path="/dashboard" component={Dashboard}></Route> */}
              <Route component={Dashboard}></Route>
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
