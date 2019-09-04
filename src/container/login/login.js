import React, { Component } from "react";
import Logo from "../../component/logo/logo";
import { List, InputItem, WingBlank, WhiteSpace, Button } from "antd-mobile";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  register = () => {
    console.log(this.props);
    this.props.history.push("/register");
  };
  render() {
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem placeholder="displayed clear while typing">
              用户
            </InputItem>
            <WhiteSpace />
            <InputItem placeholder="displayed clear while typing">
              密码
            </InputItem>
          </List>
					<WhiteSpace />
          <Button type="primary">登录</Button>
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

export default login;
