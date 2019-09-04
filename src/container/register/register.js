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

const RadioItem = Radio.RadioItem;

class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "genius"
    };
  }
  render() {
    return (
      <div>
        <Logo></Logo>
        <List>
          <InputItem>用户名</InputItem>
          <WhiteSpace />
          <InputItem>密码</InputItem>
          <WhiteSpace />
          <InputItem>确认密码</InputItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type == "genius"}>牛人</RadioItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type == "boss"}>Boss</RadioItem>
          <WhiteSpace />
          <Button type="primary">注册</Button>
        </List>
      </div>
    );
  }
}

export default register;
