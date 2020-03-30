import React, { Component } from 'react';
<<<<<<< HEAD
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
// import connectRoute from './utils/connectRoute'

class App extends Component {

  render() {
    return (
      // 设置路由 
      <HashRouter>
        {/* 一级路由模板   路径对应组件 */}
        <Route path='/login' component={Login}></Route>
        {/* 嵌套路由模板 */}
        <Route path='/admin' render={() => {
          return (
            <Admin>
              <Route path='/admin/shop/shopList' component={ShopList}></Route>

              {/* 管理管理路由 */}
              <Route path='/admin/administrator' component={admins}></Route>
            </Admin>
          )
        }}></Route>
          {/* 一级路由模板   路径对应组件 */}
          <Route path='/login' component={Login}></Route>
          {/* 嵌套路由模板 */}
          <Route path='/admin' render={()=>{  
            return(  
              <Admin>
                 <Route path='/admin/shop/shopList' component={ShopList}></Route> 


                {/* 订单管理的路由 */}
                 <Route path='/admin/order/List' component={orderList}></Route>
                 <Route path='/admin/order/Audit' component={orderAudit}></Route>
                 <Route path='/admin/order/:oId' component={orderDetail}></Route>    
              </Admin>
            )
          }}></Route>
      </HashRouter>
    )
  }
=======
import Routers from './router/router'

function App() {
  return (
    <div className="App">
     <Routers></Routers>
    </div>
  );
>>>>>>> aaf1564c6462bc5040be06833bdfa0572950e4ce
}
export default App;



