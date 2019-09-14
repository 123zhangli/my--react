import React, {Component} from 'react'
import {withRouter,Redirect} from 'react-router-dom'//router-dom中withrouter方法
import {connect} from 'react-redux'//引入redux中connect方法

//高阶组件
function withCheckLogin(WrappedComponent) {
    return connect((state) =>({token:state.user.token}),null)
    (withRouter(class extends Component {
        static displayName = `CheckLogin(${WrappedComponent.displayName||WrappedComponent.name||`Component`})`;//定义名字
        render() {
            /*完成登录校验
                      1.判断当前地址是否是 /login
                        --登录过，跳转 /
                        --没有登录，不跳转
                      2.判断当前地址是否是 /
                        --登录过，不跳转
                        --没有登录，跳转 /login
                    */
            const {token,...rest} = this.props;
            const {location:{pathname}} = rest;
            //const token = this.props;
            if (pathname  === '/login' && token) return <Redirect to="/"/>;
            if (pathname !== '/login' && !token) return <Redirect to="/login"/>;
            return <WrappedComponent {...rest}/>;
        }

    }))
}
export  default withCheckLogin;//暴漏withCheckLogin
