import React, { Component } from 'react';
import { HashRouter, Route,Redirect,Switch  } from 'react-router-dom'  //引入路由

// 下面引入组件
import Login from '@pages/Login'  //引入登录组件
import Admin from '@pages/Admin'  //引入管理组件

// 主页面组件
import Home from '@pages/Home/home'

// 商品管理相关组件
import ShopList from '@pages/Shop/ShopList'
import ShopAdd from '@pages/Shop/ShopAdd'

// 用户管理
import User from '@pages/User/index'
// 管理路由
import admins from '@pages/administrator/index'
// 订单管理相关组件
import orderList from '@pages/order/orderList'
import orderAudit from '@pages/order/orderAudit'
// import connectRoute from './utils/connectRoute'

// 404页面
import Error from '@pages/Error/error'

// 商品分类相关组件
import Classify from '@pages/Classify/index'

class Routers extends Component {

    render() {
      return (
        // 设置路由 
        <HashRouter>
          <Switch>
            {/* 重定向  默认进入login页面 */}
            <Redirect from='/' to='/login' exact/>
            {/* 一级路由模板   路径对应组件 */}
            <Route path='/login' component={Login}></Route>
            {/* 嵌套路由模板 */}
            <Route path='/admin' render={()=>{  
              return(  
                <Admin>
                   <Route path='/admin/shop/shopList' component={ShopList}></Route> 
  
                  {/* 管理管理路由 */}
                  <Route path='/admin/administrator' component={admins}></Route>

                  {/* 用户管理 */}
                  <Route path='/admin/user' component={User}></Route>
  
                  {/* 订单管理的路由 */}
                   <Route exact path='/admin/order/List'   component={orderList}></Route>
                   <Route exact path='/admin/order/Audit'  component={orderAudit}></Route>   

                   {/* 商品分类的路由 */}
                   <Route exact path='/admin/type/find'   component={Classify}></Route> 
                </Admin>
              )
            }}>
            </Route>
          </Switch>
        </HashRouter>
      )
    }
  }
  
  
  
  
  export default Routers;
  
  