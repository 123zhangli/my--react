import React, { Component } from 'react';
import { Form, Input, Icon, Button, message,Checkbox } from 'antd';

import { reqLogin } from '../../api';

import { connect } from 'react-redux';
import { saveUser } from '../../redux/action-creators';

import logo from './logo.png';
import './index.less';

@connect(
  null,
  { saveUser }
)
@Form.create()
class Login extends Component {
/*
* 校验表单合法性
* */
  validator = (rule, value, callback) => {
    const name = rule.field === 'username' ? '用户名' : '密码';
    if (!value) {return callback(`请输入${name}`);}
    if (value.length < 3) {return callback(`${name}长度必须大于3位`);}
    if (value.length > 13) {return callback(`${name}长度必须小于13位`);}
    const reg = /^[a-zA-Z0-9_]{3,13}$/;
    if (!reg.test(value)) {return callback(`${name}只能包含英文、数字和下划线`);}
    callback(); // 调用callback
  };

  /**
   * 登录函数
   */
  login = (e) => {
    // 禁止默认行为
    e.preventDefault();
    // 校验表单
    this.props.form.validateFields((error, values) => {
      if (!error) {
        // 校验通过
        // console.log(values);
        const { username, password } = values;// 获取表单项的值
        reqLogin(username, password)// 发送请求
          .then((result) => {
            // 登录成功
            message.success('登录成功~');
            this.props.saveUser(result);// 保存用户数据
            this.props.history.replace('/');// 跳转到 / 路由
          })
          .catch(() => {
            this.props.form.resetFields(['password']);// 清空密码
          })
      }
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form;//表单验证方法

    return <div className="login">
      <header className="login-header">
        <img src={logo} alt="logo"/>
        <h1>React项目: 后台管理系统</h1>
      </header>
      <section className="login-section">
        <h3>用户登录</h3>
        <Form onSubmit={this.login}>
          <Form.Item>
            {
              getFieldDecorator
              ('username', {rules: [{validator: this.validator}]})
              (<Input  prefix={ <Icon type="user-add" />} placeholder="用户名" type="username"/>)}
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator
              ('password', {rules: [{validator: this.validator}]})
              (<Input prefix={<Icon type="lock" />} placeholder="密码" type="password"/>)
            }
          </Form.Item>
          <Form.Item>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="dashed" htmlType="submit" className="login-btn">登录</Button>
          </Form.Item>
        </Form>
      </section>
    </div>;
  }
}
export default Login;//暴漏新的Login