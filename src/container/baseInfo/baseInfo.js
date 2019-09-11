import React, { Component } from "react";
import { NavBar, Icon, InputItem, TextareaItem, Button } from "antd-mobile";
import AvatarSelector from "../../component/avatar-selector/avatar-selector.js";
import { update } from "../../redux/user.redux.js";
import { connect } from "react-redux";

@connect(
  state => state.user,
  { update }
)
class baseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }
  render() {
    return (
      <div>
        <NavBar mode="dark">Boss完善信息页</NavBar>
        <AvatarSelector selectAvatar={this.selectAvatar}></AvatarSelector>
        <InputItem onChange={v => this.handleChange("title", v)}>
          招聘职位
        </InputItem>
        <InputItem onChange={v => this.handleChange("company", v)}>
          公司名称
        </InputItem>
        <InputItem onChange={v => this.handleChange("money", v)}>
          职位薪资
        </InputItem>
        <TextareaItem
          onChange={v => this.handleChange("desc", v)}
          rows={3}
          autoHeight
          title="职位要求"
        />
        <Button
          onClick={() => {
            this.props.update(this.state);
          }}
          type="primary"
        >
          保存
        </Button>
      </div>
    );
  }
}

export default baseInfo;
