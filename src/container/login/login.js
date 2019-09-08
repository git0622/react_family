import React, { Component } from "react";
import Logo from "../../component/logo/logo";
import { List, InputItem, WingBlank, WhiteSpace, Button } from "antd-mobile";
import { login } from "../../redux/user.redux.js";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

@connect(
  state => state.user,
  { login }
)
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pwd: ""
    };
  }
  register = () => {
    this.props.history.push("/register");
  };
  login = () => {
    this.props.login(this.state);
  };
  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }
  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <WingBlank>
          <List>
          {this.props.msg ? <p className="err-msg">{this.props.msg}</p> : null}
            <InputItem
              placeholder="displayed clear while typing"
              onChange={v => this.handleChange("user", v)}
            >
              用户
            </InputItem>
            <WhiteSpace />
            <InputItem
              placeholder="displayed clear while typing"
              onChange={v => this.handleChange("pwd", v)}
            >
              密码
            </InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.login}>
            登录
          </Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>
            注册
          </Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    );
  }
}

export default Login;
