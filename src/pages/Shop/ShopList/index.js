import React,{Component, Fragment} from 'react'
import style from './index.module.less'
import {Card, message,Table,Tag, Button,Pagination,Popconfirm,} from 'antd'
import goodsApi from '../../../api/goods'
class ShopList extends Component {
    
     
        state = { 
            page:1, 
            pageSize:4,
            result:[],
            allcount:0,
            columns:[{title: 'ID',dataIndex: '_id',key: '_id',width:120,}, 
            {title: '名称',dataIndex: 'title',key: 'title',width:120,}, 
            {title: '原价',dataIndex: 'originalPrice',key: 'originalPrice',width:120,render(originalPrice){
                return(
                    <Fragment>
                         <span style={{color:'blue'}}>{originalPrice}</span><span> 元</span>
                    </Fragment>
                )
            }}, 
            {title: '现价',dataIndex: 'currentPrice',key: 'currentPrice',width:120,render(originalPrice){
                return(
                    <Fragment>
                         <span style={{color:'red'}}>{originalPrice}</span><span> 元</span>
                    </Fragment>
              
                )
            }}, 
            {title: '产品图',dataIndex: 'imgUrl',key: 'imgUrl',width:160,render(imgUrl){
                return (
                    <img style={{width:100,height:100}} src={imgUrl}/>
                )
            }}, 
            {title: '描述',dataIndex: 'describe',key: 'describe', width:460}, 
            {title: '状态',dataIndex: 'Status',key: 'Status',width:120,render(putaway){
                 let obj={'0':{color:'red',msg:'已下架'},'1':{color:'green',msg:'已上架'}}
                return(
                <Tag color={obj[putaway].color}>{obj[putaway].msg}</Tag>
                )
            }}, 
            {title: '操作' ,fixed:'right',key: 'action',width:120,render:(recode)=>{
                return(
                    <div>
                        <Popconfirm title='你确定要删除这条数据么？' onConfirm={()=>{
                         this.delGoods(recode._id)
                        }}>
                            <Button type='danger' size='small' >删除</Button>
                        </Popconfirm>
                       
                        <Button type='warn' size='small'>上架</Button>
                        <Button type='primary' size='small'>修改</Button>
                    </div>
                )
            }}, 
        
        
        ]  
          
         }
    
   
     componentDidMount(){
         this.getListData()
     }
     //删除商品数据
     delGoods= async (_id)=>{
         let result = await goodsApi.del(_id)
         this.getListData() 
     }
     //获取商品数据
    getListData= async ()=>{
        let {page,pageSize} = this.state
        goodsApi.list(page,pageSize).then((pramas)=>{
           this.setState({result:pramas.shopList})
           this.setState({allcount:pramas.allcount})
            
        })

        
    }
    render() { 
        let {result, columns,allcount,pageSize} = this.state
        
        return ( 
            <div className={style.box}>    
           
            <Card title='商品列表' className={style.Card}>
            {/* {this.state.result.map((item,index)=>{
                return (
                <p key={index}>{item._id}</p>
                )
            })} */}
            <Table scroll={{y:600,x:500}} 
            columns={columns} 
            pagination={false}
            dataSource={result}
            rowKey='_id'>

            </Table>
            <Pagination showQuickJumper defaultCurrent={1} total={allcount } pageSize={pageSize}  
            onChange={(page,pageSize)=>{
                console.log(page)
                this.setState({page},()=>{
                    this.getListData()
                })
                
            }}
            />
            </Card>
            </div>
         );
    }
}
 
export default ShopList;