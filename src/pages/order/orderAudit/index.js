import React,{Component} from 'react'

import { Card,Button,Input,Tabs,Tag,Table} from 'antd';

import Style from './index.module.less'




class orderAudit extends Component {
    state = {
       
      };
    componentDidMount() {
      
    }
    render() { 
        return ( 
            <div className={Style.box}>
                <Card className={Style.card} title="审核订单" bordered={false} >
                  
                </Card>
             </div>
         );
    }
}
 
export default orderAudit;