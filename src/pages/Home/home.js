import React,{Component,Fragment} from 'react'
import Style from './index.module.less'
import {Card} from 'antd'
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <div className={Style.sayhello}>
                    <img src='ava.png' alt=''></img>
                    <span>欢迎登录,祝您开心每一天!</span>
                </div>
                <div className={Style.cards}>
                    
                    <Card title="商品数量" className={Style.card}>
                        68
                    </Card>
                    <Card title="订单数量" className={Style.card}>
                    68
                    </Card>
                    <Card title="用户数" className={Style.card}>
                    68
                    </Card>
                    <Card title="管理员数" className={Style.card}>
                    68
                    </Card>
                </div>
                <div className={Style.sale}>
                    
                    <Card title="销售量" className={Style.card}>
                        
                    </Card>
                  
                </div>
            </Fragment>
         );
    }
}
 
export default Home;