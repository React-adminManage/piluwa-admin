import React, { Component,Fragment } from 'react';
import { Menu, Dropdown, Icon } from 'antd';


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
function createMenu(data){
 return (
    <Fragment>
    <Menu>
      {data.map((item,index)=>{
        return(   
            <Menu.Item key={index}>
              <span rel="noopener noreferrer">
              <Icon type={item.icon} />{item.name}
              </span>
              <Menu.Divider></Menu.Divider>
            </Menu.Item>
        )
      })}
    </Menu>
   </Fragment>
 )
}
class HeaderNav extends Component {
  state = {  }
  render() { 
    return ( 
      <div >
        <Dropdown overlay={createMenu(userdata)}>
          <span  className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me <Icon type="down" />
          </span>
        </Dropdown>
        <Dropdown overlay={createMenu(langData)}>
          <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            语言 <Icon type="down" />
          </span>
        </Dropdown>
      </div>
     );
  }
}
 
export default HeaderNav;