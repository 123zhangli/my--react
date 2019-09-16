import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotMatch from './components/not-match'
import BasicLayout from './components/basic-layout';
import Login from './containers/login/index'

import routes from './config/routes';


class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route path="/login" component={Login} exact/>
        <BasicLayout>
          <Switch>
            {
              routes.map((route, index) => {
                // return <Route path={route.path} exact={route.exact} component={route.component}/>
                return <Route {...route} key={index}/>;
              })
            }
            <Route component={NotMatch}/>{/*Route有两个属性，path，component，不写path就是匹配所有路径*/}
          </Switch>
        </BasicLayout>
      </Switch>

    </Router>;
  }
}

export default App;