import React,{Component} from 'react'
import { Table,Tag  } from 'antd';
import order from '../../api/orderAPI'
// import reqwest from 'reqwest';

const statusobj={
    '0':{txt:'未付款',color:'volcano'},
    '1':{txt:'已付款',color:'purple'},
    '2':{txt:'已完成',color:'cyan'},
    '3':{txt:'已取消',color:'red'},
    '4':{txt:'审核中',color:'blue'},
}

const columns = [
    {title: '_id',dataIndex: '_id'},
    {title: '订单号',dataIndex: 'oId'},
    {title: '用户',dataIndex: 'oUser'},
    {title: '订单状态',dataIndex: 'oStatus',render(oStatus){
 
      return(    
        <Tag color={statusobj[oStatus].color}>{statusobj[oStatus].txt}</Tag>
      )
    }},
    {title: '创建时间',dataIndex: 'createTime'},
    {title: '更新时间',dataIndex: 'updateTime'},

    
];

class orderTable extends Component {
  state = {
    data: [],
    pagination: {defaultPageSize:5},
    loading: false,
  };

  componentDidMount() {
      console.log(this)
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
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
    //   oStatus:Number(this.props.oStatus)
    });
  };

  fetch = (params = {}) => {
    // console.log('params:', params);
    let {results=5,page=1,oStatus} = params;
    // console.log(oStatus)
    this.setState({ loading: true });
    order.find({pageSize:results,page})
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
  };

  render() {
    return (
      <Table
        columns={columns} 
        rowKey={record => record._id}
        dataSource={this.state.data}   //数据源
        pagination={this.state.pagination}  //分页器
        loading={this.state.loading}  //页面加载
        onChange={this.handleTableChange}  //分页、排序、筛选变化时触发
      />
    );
  }
}

export default orderTable;