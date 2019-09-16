import React, { Component } from "react";
import PropTypes from "prop-types";
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";

@withRouter
class navLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    data: PropTypes.array.isRequired
  };
  renderContent(content) {
    return <div>{content}</div>;
  }
  Î;
  render() {
    const navList = this.props.data.filter(v => !v.hide);
    const { pathname } = this.props.location;
    return (
      <div>
        <TabBar>
          {navList.map(v => {
            return (
              <TabBar.Item
                key={v.path}
                title={v.title}
                icon={{ uri: require(`./img/${v.icon}.png`) }}
                selectedIcon={{ uri: require(`./img/${v.icon}-active.png`) }}
                selected={pathname === v.path}
                onPress={() => {
                  this.props.history.push(v.path);
                }}
              ></TabBar.Item>
            );
          })}
        </TabBar>
      </div>
    );
  }
}

export default navLink;
