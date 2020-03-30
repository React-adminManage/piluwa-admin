import React,{Component} from 'react'
import axios from '@api/orderAPI';
import { Card} from 'antd';

import Style from './index.module.less'
class orderAudit extends Component {
    state = {
       audioOrder:[],//审核订单
    };
    render() { 
        console.log('render')
        return ( 
            <div className={Style.box}>
                <Card className={Style.card} title="审核订单" bordered={false} >
                    {/* {this.state.audioOrder} */}
                </Card>
             </div>
         );
    }
}
 
export default orderAudit;