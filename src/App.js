import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'  //引入路由

// 下面引入组件
import Login from './pages/Login'  //引入登录组件
import Admin from './pages/Admin'  //引入管理组件

// 商品管理相关组件
import ShopList from './pages/Shop/ShopList'
import ShopAdd from './pages/Shop/ShopAdd'

// 管理路由
import admins from './pages/administrator/index'
// 订单管理相关组件
import orderList from './pages/order/orderList'
import orderAudit from './pages/order/orderAudit'
import orderDetail from './pages/order/orderDetail'

class App extends Component {
  state = {}
  render() {
    return (
      // 设置路由 
      <HashRouter>
          {/* 一级路由模板   路径对应组件 */}
          <Route path='/login' component={Login}></Route>
          {/* 嵌套路由模板 */}
          <Route path='/admin' render={()=>{  
            return(  
              <Admin>
                 <Route path='/admin/shop/shopList' component={ShopList}></Route> 

                {/* 管理管理路由 */}
                <Route path='/admin/administrator' component={admins}></Route>

                {/* 订单管理的路由 */}
                 <Route exact path='/admin/order/List'   component={orderList}></Route>
                 <Route exact path='/admin/order/Audit'  component={orderAudit}></Route>
                 <Route exact path='/admin/order/Detail/:oId'  component={orderDetail}></Route>    
              </Admin>
            )
          }}></Route>
      </HashRouter>
    )
  }
}

export default App;


