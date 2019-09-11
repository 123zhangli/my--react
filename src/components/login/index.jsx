import React, {Component} from 'react'
import {Form, Input, Icon, Button, Checkbox} from 'antd';//引入UI组件库

import './index.less'
import logo from './logo.png';//引入logo图标

@Form.create()//装饰器语法
class Login extends Component {
   /*
   * 自定义表单校验
   * */
    validator = (rule,value,callback)=> {
        const name = rule.field === 'username' ? '用户名' : '密码';
        if (!value) {return callback(`请输入${name}`);}
        if (value.length < 3) {return callback(`${name}长度必须大于3位`);}
        if (value.length > 13) {return callback(`${name}长度必须小于13位`);}
        const reg = /^[a-zA-Z0-9_]{3,13}$/;
        if (!reg.test(value)) {return callback(`${name}只能包含英文、数字和下划线`);}
        callback();//调用callback
    }
    ;
    render() {
        const {getFieldDecorator} = this.props.form;//表单校验
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
                            {
                                getFieldDecorator
                                ('username', {rules: [{validator: this.validator}]})
                                (<Input prefix={<Icon type="user-add"/>} placeholder="用户名" type="username"/>)
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator
                                ('password', {rules: [{validator: this.validator}]})
                                (<Input prefix={<Icon type="lock"/>} placeholder="密码" type="password"/>)
                            }
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

export default Login;