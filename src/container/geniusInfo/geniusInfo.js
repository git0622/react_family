import React, { Component } from "react";
import { NavBar, Icon, InputItem, TextareaItem, Button } from "antd-mobile";
import AvatarSelector from "../../component/avatar-selector/avatar-selector.js";
import { update } from "../../redux/user.redux.js";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';

@connect(
  state => state.user,
  { update }
)
class geniusInfo extends Component {
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
    const path = this.props.location.pathname
		const redirect = this.props.redirectTo
    return (
      <div>
        {redirect && redirect !== path ? (
          <Redirect to={this.props.redirectTo}></Redirect>
        ) : null}

        <NavBar mode="dark">牛人完善信息页</NavBar>
        <AvatarSelector
          selectAvatar={imgname => {
            this.setState({
              avatar: imgname
            });
          }}
        ></AvatarSelector>
        <InputItem onChange={v => this.handleChange("title", v)}>
          职位名称
        </InputItem>
        <TextareaItem
          onChange={v => this.handleChange("desc", v)}
          rows={3}
          autoHeight
          title="个人简介"
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

export default geniusInfo;
