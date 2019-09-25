import React, { Component } from "react";
import { Card, WingBlank, WhiteSpace } from "antd-mobile";
import { getUserList } from "../../redux/chatuser.redux";
import { connect } from "react-redux";

@connect(
  state => state.chatUser,
  { getUserList }
)
class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.props.getUserList("genius");
  }
  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    console.log("userlist", this.props.userlist);
    return (
      <div>
        <WingBlank>
          <WhiteSpace />
          {this.props.userlist.map(v => (
            v.avatar ? (
              <Card key={v._id}>
                <Header
                  title={v.user}
                  thumb={require(`../img/${v.avatar}.png`)}
                  extra={<span>{v.title}</span>}
                />
                <Body>
                  <div>{v.title}</div>
                </Body>
              </Card>
            ) : null
          ))}
        </WingBlank>
      </div>
    );
  }
}

export default Boss;
