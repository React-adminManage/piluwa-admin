import React,{Component,Fragment} from 'react'
import Style from './index.module.less'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';
class Home extends Component {
    state = {  }
    line(){
        return{
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
            {
                data: [82, 100, 150, 34, 190, 10, 120],
                type: 'line',
                areaStyle: {}
            }
        ]
        }
      }
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
                            <div>
                                <ReactEcharts option={this.line()}></ReactEcharts>
                            </div>
                    </Card>
                  
                </div>
            </Fragment>
         );
    }
}
 
export default Home;