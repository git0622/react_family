import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

@withRouter
class authroute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios.get("/user/info").then(res => {
      console.log(res);
      if (res.status == 200) {
        console.log(res.data);
        if (res.data.code == 0) {
          //有登录信息
        } else {
            console.log('login')
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
