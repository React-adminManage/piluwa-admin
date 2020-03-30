import React,{Component} from 'react'
import classifyAPI from '@api/classifyAPI'
import {Pagination,Card,message,Table,Tag,Button,Popconfirm} from 'antd'
import style from './index.module.less'
class ClassifyList extends Component {
    state = { 
        typeList:[],//分类列表数据
        count:0,//总数量
        columns:[
            {title:'_id',dataIndedx:'_id',key:'_id'},
            {title:'类型',dataIndedx:'type',key:'type'}
        ]
     }
     componentDidMount=async()=>{
        // 请求商品的类别列表
        // let result= await classifyAPI.typelist()
        // console.log(result)
        let {code,msg,typeList,count}= await classifyAPI.typelist()
        if(code !==0){ return message.error(msg)}
        this.setState({typeList,count})
        console.log(typeList)
      }
    render(){
        let {typeList,columns}=this.state
        return ( 
            <div className={style.box}>
                <Card title='商品分类列表' className={style.card}>
                    <Table columns={columns} dataSource={typeList} rowKey='_id'></Table>
                </Card>
            </div>
         );
    }
}
export default ClassifyList;