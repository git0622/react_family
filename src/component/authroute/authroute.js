import React, { Component } from "react";
import axios from "axios";

class authroute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios.get('api/user/info').then(res => {
      if (res.status == 200) {
        console.loga(res.data);
      }
    });
  }
  render() {
    return <div>判断跳转的地方</div>;
  }
}

export default authroute;
