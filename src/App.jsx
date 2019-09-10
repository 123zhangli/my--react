import React, {Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import routes from './config/routes'
export default class App extends Component {
    render() {
        return (
            <Router>
            {/*    <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/login" exact={true} component={Login}/>
                </Switch>*/}
                {
                   routes.map((route,index)=>{
                       // return <Route path={route.path} exact={route.exact} component={route.component}/>
                       return <Route {...route} key={index}/>
                   })
                }
            </Router>
        )
    }
}