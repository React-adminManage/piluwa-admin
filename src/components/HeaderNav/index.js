import React, { Component,Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import { Menu, Dropdown, Icon,message,Spin  } from 'antd';


let userdata =[
  {name:'个人中心',icon:'user',divider:false},
  {name:'个人设置',icon:'setting',divider:true},
  {name:'退出登录',icon:'logout',divider:false},
]
let langData =[
  {name:'简体中文',icon:'user',divider:false},
  {name:'繁体中文',icon:'setting',divider:true},
  {name:'英语',icon:'logout',divider:false},
]


 


class HeaderNav extends Component {
  state = {  }

  createMenu(data){
    return (
       <Fragment>
       <Menu onClick={this.onClick}>
         {data.map((item,index)=>{
           return(   
               <Menu.Item key={item.name}>
                 <span rel="noopener noreferrer">
                 <Icon type={item.icon} />{item.name}
                 </span>
                 {/* <Menu.Divider></Menu.Divider> */}
               </Menu.Item>
           )
         })}
       </Menu>
      </Fragment>
    )
   }
  onClick = ({ key }) => {
    console.log(key)
    if(key=='退出登录'){
        message.info(`退出登录,3s后进行页面跳转`);
        setTimeout(() => {
          // 清除本地local
          let userMsg = JSON.parse(localStorage.getItem('userMsg'))
          userMsg.token='';//清除token
          localStorage.setItem('userMsg',JSON.stringify(userMsg)); //更新local
          this.props.history.replace('/login')
        }, 3000);
        
      }
    }
  render() { 
    return ( 
      <div >
        <Dropdown overlay={this.createMenu(userdata)}>
          <span  className="ant-dropdown-link" onClick={(e)=>{
            console.log(e)
             return e.preventDefault()
          }}>
            Hover me <Icon type="down" />
          </span>
        </Dropdown>
        <Dropdown overlay={this.createMenu(langData)}>
          <span className="ant-dropdown-link" onClick={e =>  e.preventDefault()}>
            语言 <Icon type="down" />
          </span>
        </Dropdown>
      </div>
     );
  }
}
 
export default withRouter(HeaderNav);