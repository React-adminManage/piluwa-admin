import React,{Component} from 'react';
import {HashRouter, Route}  from 'react-router-dom'  //引入路由

// 下面引入组件
import Login from './pages/Login'  //引入登录组件
import Admin from './pages/Admin'  //引入管理组件

// 商品管理相关组件
import ShopList from './pages/Shop/ShopList'
import ShopAdd from './pages/Shop/ShopAdd'

class App extends Component {
  state = {  }
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
              </Admin>
            )
          }}></Route>
      </HashRouter>
    )
  }
}
 
export default App;


