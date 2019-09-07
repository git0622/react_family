import React, { Component } from "react";
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio
} from "antd-mobile";
import Logo from "../../component/logo/logo";
import { connect } from "react-redux";
import { register } from "../../redux/user.redux.js";

const RadioItem = Radio.RadioItem;
@connect(
  state => state.user,
  { register }
)
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pwd: "",
      repeatpwd: "",
      type: "genius"
    };
  }

  handleRegister = () => {
    this.props.register(this.state);
  };

  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }
  render() {
    return (
      <div>
        <Logo></Logo>
        <List>
          {this.props.msg ? <p className="err-msg">{this.props.msg}</p> : null}
          <InputItem onChange={v => this.handleChange("user", v)}>
            用户名
          </InputItem>
          <WhiteSpace />
          <InputItem
            type="password"
            onChange={v => this.handleChange("pwd", v)}
          >
            密码
          </InputItem>
          <WhiteSpace />
          <InputItem
            type="password"
            onChange={v => this.handleChange("repeatpwd", v)}
          >
            确认密码
          </InputItem>
          <WhiteSpace />
          <RadioItem
            onChange={() => this.handleChange("type", "genius")}
            checked={this.state.type == "genius"}
          >
            牛人
          </RadioItem>
          <WhiteSpace />
          <RadioItem
            onChange={() => this.handleChange("type", "boss")}
            checked={this.state.type == "boss"}
          >
            Boss
          </RadioItem>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleRegister}>
            注册
          </Button>
        </List>
      </div>
    );
  }
}

export default Register;
