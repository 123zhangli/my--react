import React, {Component} from 'react'
import {Form, Input, Icon, Button, Checkbox,message} from 'antd';//引入UI组件库
import {Redirect} from 'react-router-dom'
import axios from 'axios'

import './index.less'
import logo from './logo.png';

//引入logo图标

@Form.create()//装饰器语法
class Login extends Component {
   /*
   * 自定义表单校验函数
   * */
    validator = (rule,value,callback)=> {
        const name = rule.field === 'username' ? '用户名' : '密码';
        if (!value) {return callback(`请输入${name}`);}
        if (value.length < 3) {return callback(`${name}长度必须大于3位`);}
        if (value.length > 13) {return callback(`${name}长度必须小于13位`);}
        const reg = /^[a-zA-Z0-9_]{3,13}$/;
        if (!reg.test(value)) {return callback(`${name}只能包含英文、数字和下划线`);}
        callback();//调用callback
    };
    /*
    登录函数
    * */
    login = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((error,values)=>{
            if (!error){
                //校验成功
                const {username,password} = values;//获取表单的值
               // console.log(values);
                axios.post('http://localhost:3000/api/login',{username,password})
                .then((response)=>{
                    if (response.data.status===0) {
                       //成功
                        message.success('登录成功');
                        //跳转‘/’路由
                       return <Redirect to="/"/>
                    }else{
                       //失败
                        message.error(response.data.msg)
                    }
                })
                .catch((error)=>{
                    //失败
                    message.error('网络错误');
                })
            }else{

            }
        });
    };
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
                    <Form  onSubmit={this.login} >
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

export default Login;//暴漏新的Login