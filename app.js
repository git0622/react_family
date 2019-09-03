import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "./index.scss";
// import "./src1/assets/styles/reset.css";
// import './mock/mock.js';
import CountWrapper from './count/countWrapper.js';


class App extends Component {
  render() {
    return (
      <div>
        <CountWrapper />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
