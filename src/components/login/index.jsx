import React, {Component} from 'react'
import {Form, Input, Icon, Button, Checkbox} from 'antd';//引入UI组件库

import './index.less'
import logo from './logo.png';//引入logo图标
export default class Login extends Component {

    //自定义表单验证方法
    

    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理项目</h1>
                </header>
                <section className="login-section">
                    <h4>用户登录界面</h4>
                  <Form>
                      <Form.Item>
                          <Input prefix={<Icon type="user-add" />} placeholder="用户名" type="password"/>
                      </Form.Item>
                      <Form.Item>
                          <Input prefix={<Icon type="lock" />} placeholder="密码" type="password"/>
                      </Form.Item>
                      <Form.Item>
                          <Checkbox>记住密码</Checkbox>
                      </Form.Item>
                      <Form.Item>
                          <Button type="dashed " htmlType="submit" className="login-btn">登录</Button>
                      </Form.Item>
                  </Form>
                </section>
            </div>
        )
    }
}