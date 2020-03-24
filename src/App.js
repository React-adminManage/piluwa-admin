import React,{Component} from 'react';
import {HashRouter, Route}  from 'react-router-dom'  //引入路由

// 下面引入组件
// import Login from './pages/Login'  //引入登录组件(还没写 打个样)

class App extends Component {
  state = {  }
  render() { 
    return ( 
      // 设置路由 
      <HashRouter>
          {/* 一级路由模板   路径对应组件 */}
          {/* <Route path='/login' component={Login}></Route> */}

          {/* 嵌套路由模板 */}
          <Route path='/admin' render={()=>{  
            return(
              1
              // <Admin>
              //    <Route path='/admin/XXX' component={XXX}></Route>
              // </Admin>
            )
          }}></Route>
      </HashRouter>
    )
  }
}
 
export default App;


