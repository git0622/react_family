import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { loadData } from "../../redux/user.redux";
import { connect } from "react-redux";

@withRouter
@connect(
  null,
  { loadData }
)
class authroute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios.get("/user/info").then(res => {
      if (res.status == 200) {
        if (res.data.code == 0) {
          //有登录信息
          this.props.loadData(res.data.data); //登录成功，更新登录用户信息
        } else {
          this.props.history.push("/login");
        }
      }
    });
  }
  render() {
    return <div>判断跳转的地方</div>;
  }
}

export default authroute;
