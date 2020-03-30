import React,{Component} from 'react'
import style from './index.module.less'
import {Card} from 'antd'
class ShopList extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.box}>    
            <Card title='商品列表' className={style.Card}>

            </Card>
            </div>
         );
    }
}
 
export default ShopList;