import React, { Component} from 'react';
import {withRouter}  from 'react-router-dom'
import CustomNav from '../../components/CustomNav'
import HeaderNav from '../../components/HeaderNav'
import { Layout, message } from 'antd';
import Style from './index.module.less'
const { Header, Content, Sider } = Layout;
class Admin extends Component {
  state = {  }
  
  componentDidMount=()=>{
    try {
      let {token} =JSON.parse(localStorage.getItem('userMsg')) 
      console.log('cunzai')
      if(!token){ //token不存在,返回到login页面
          message.error('当前未登录,请登录')
          this.props.history.replace('/login')
      }
    } catch (error) {
          message.error('当前未登录,请登录')
          this.props.history.replace('/login')
    }
         
  }
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
 
export default  withRouter(Admin);