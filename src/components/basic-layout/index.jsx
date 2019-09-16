import React, {Component} from 'react'
import { Layout, Breadcrumb, } from 'antd';

import withCheckLogin from '../../containers/with-check-login';
import Logo from '../../assets/images/logo.png'//引入图片
import './index.less'//引入样式
import LeftNav from './left-nav'//引入左部分结构


const { Header, Content, Footer, Sider } = Layout;

@withCheckLogin
 class BasicLayout extends Component {

    state = {
        collapsed: false,
        isDisplay:true
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({
            collapsed,
            isDisplay:! this.state.isDisplay
        });
    };

    render() {
        const {collapsed,isDisplay} = this.state;//提取状态数据
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="basic-layout-logo" >
                        <img src={Logo} alt=""/>
                        <h1 style={{display:isDisplay ? 'block' : 'none' }}>硅谷后台管理</h1>
                    </div>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}{/*决定子元素渲染的位置*/}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default BasicLayout