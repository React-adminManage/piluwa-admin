import React,{Component} from 'react'

import { Card,Button,Input,Tabs,Tag,Table} from 'antd';
import order from '../../../api/orderAPI'
import Style from './index.module.less'
const { TabPane } = Tabs;



  const statusobj={
    '0':{txt:'未付款',color:'volcano'},
    '1':{txt:'已付款',color:'purple'},
    '2':{txt:'已完成',color:'cyan'},
    '3':{txt:'已取消',color:'red'},
    '4':{txt:'审核中',color:'blue'},
}



class orderList extends Component {
    state = {
        data: [],
        pagination: {defaultPageSize:5},
        loading: false,
        oStatus:'all',  //status状态值
        columns:[
            {title: '_id',dataIndex: '_id',key:'_id'},
            {title: '订单号',dataIndex: 'oId',key:'oId'},
            {title: '用户',dataIndex: 'oUser',key:'oUser'},
            {title: '订单状态',dataIndex: 'oStatus',key:'oStatus',render(oStatus){
         
              return(    
                <Tag color={statusobj[oStatus].color}>{statusobj[oStatus].txt}</Tag>
              )
            }},
            {title: '创建时间',dataIndex: 'createTime',key:'createTime'},
            {title: '更新时间',dataIndex: 'updateTime',key:'updateTime'},
            {title: '操作',key: 'action',render:(recode)=>{
                return(    
                   <Button size='small' type="primary" onClick={this.jumpDetail.bind(this,recode.oId)}>详情</Button>
                )
              }},
        ]
      };
    componentDidMount() {
        console.log(this)
        this.fetch();
    }
    jumpDetail=(oId)=>{
        this.props.history.push(`/admin/order/Detail/${oId}`)    
    }
    handleTableChange = (pagination) => {
      console.log(pagination,'1')
      const pager = { ...this.state.pagination };
      console.log(pager)
      pager.current = pagination.current;
      this.setState({
        pagination: pager,
      });
      this.fetch({
        results: 5,
        page: pagination.current,
        oStatus:this.state.oStatus
      });
    };
  
    fetch = (params = {}) => {  //网络请求订单列表
      let {results=5,page=1,oStatus} = params;
      this.setState({ loading: true });
      let request = ''
      console.log(oStatus)
      if(oStatus ==='all'||!oStatus){
        request= order.find({pageSize:results,page})
      }else{
        request= order.findStatus({pageSize:results,page,oStatus:Number(oStatus)})
      }
      request
      .then(data => {
        const pagination = { ...this.state.pagination };
        console.log(data)
        pagination.total = data.allcount;
        this.setState({
          loading: false,
          data: data.orderList,
          pagination,
        });
      });
    }
    callback=(key)=> { //tab切换触发axios请求
        this.setState({oStatus:key})
        this.fetch({
            results: 5,
            page: this.state.pagination.current,
            oStatus:key
          });
    }
    render() { 
        return ( 
            <div className={Style.box}>
                <Card className={Style.card} title="订单列表" bordered={false} >
                    {/* tab切换 */}
                    <Tabs tabPosition='top' animated={false} defaultActiveKey="all" onChange={this.callback}>
                        <TabPane tab="全部" key="all">
                        </TabPane>
                        <TabPane tab="待付款" key="0">
                        </TabPane>
                        <TabPane tab="已付款" key="1">
                        </TabPane>
                        <TabPane tab="已完成" key="2">
                        </TabPane>
                        <TabPane tab="已取消" key="3">
                        </TabPane>
                        <TabPane tab="审核中" key="4">
                        </TabPane>
                       
                    </Tabs>
                    {/* 搜索 */}
                    <div className={Style.search}>
                        <Input className={Style.inp} placeholder="订单号" />
                        <Input className={Style.inp} placeholder="用户" />
                        <Button>搜索</Button>
                    </div>
                    {/* 表格 */}
                    <Table
                        columns={this.state.columns} 
                        rowKey={record => record._id}
                        dataSource={this.state.data}   //数据源
                        pagination={this.state.pagination}  //分页器
                        loading={this.state.loading}  //页面加载
                        onChange={this.handleTableChange}  //分页、排序、筛选变化时触发
                    />
                </Card>
          </div>
         );
    }
}
 
export default orderList;