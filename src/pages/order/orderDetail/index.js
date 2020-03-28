import React,{Component} from 'react'
import {Card,Descriptions } from 'antd'
import Style from './index.module.less'

import order from '../../../api/orderAPI';
class orderDetail extends Component {
    state = { 
        
    }
    componentDidMount(){
    }
    render() { 
        let {orderMsg}= this.props;
        return ( 
            <div className={Style.box}>
                <Card className={Style.card} title="订单详情" bordered={false}   extra={<span onClick={()=>{
                    this.props.close();
                }}>返回</span>}>
                <Descriptions title="订单信息">
                    <Descriptions.Item label="订单号">{orderMsg.oAddress.getName}</Descriptions.Item> 
                    <Descriptions.Item label="订单状态">{orderMsg.oAddress.getPhone}</Descriptions.Item>
                </Descriptions>
                <Descriptions title="用户信息">
                    <Descriptions.Item label="UserName">{orderMsg.oAddress.getName}</Descriptions.Item> 
                    <Descriptions.Item label="Telephone">{orderMsg.oAddress.getPhone}</Descriptions.Item>
                    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">{orderMsg.oAddress.address}</Descriptions.Item> 
                </Descriptions>
                <Descriptions title="商品信息">
                    <Descriptions.Item label="UserName">{orderMsg.oAddress.getName}</Descriptions.Item> 
                    <Descriptions.Item label="Telephone">{orderMsg.oAddress.getPhone}</Descriptions.Item>
                    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">{orderMsg.oAddress.address}</Descriptions.Item> 
                </Descriptions>
                </Card>
            </div>
         );
    }
}
 
export default orderDetail;