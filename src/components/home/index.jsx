import React, { Component } from 'react';
import withCheckLogin from '../../containers/with-check-login'//引入高阶组件

//import BasicLayout from '../basic-layout'
@withCheckLogin//用于登录时校验
class Home extends Component {
  render() {
    return <div>
        Home
    </div>;
  }
}

export default Home;