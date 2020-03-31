import React, { Component } from 'react';
import CustomNav from '../../components/CustomNav'
import HeaderNav from '../../components/HeaderNav'
import { Layout } from 'antd';
import Style from './index.module.less'
const { Header, Content, Sider } = Layout;
class Admin extends Component {
  state = {  }

  render() { 
    return ( 
        <Layout className={Style.wrapper}>
          {/* 侧边栏 */}
        <Sider>
          <div style={{background:'#fff',textAlign: 'center'}}>
              {/* <img style={{width:'82px'}} alt='' > */}
              <div className={Style.logo}>
                  <img src='logo.jpg'></img>
              </div>
            
          </div>
          <CustomNav></CustomNav>
        </Sider>
      
        <Layout >
        <Header className={Style.header}>
            <HeaderNav></HeaderNav>
        </Header>
        <Content className={Style.content}> 
          {this.props.children}
        </Content>
        {/* <Footer style={ {height:'10%'} }>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
     );
  }
}
 
export default Admin;