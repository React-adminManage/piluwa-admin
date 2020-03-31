import React,{Component}from 'react'
import {Card,Input, Button,TreeSelect } from 'antd'
import style from './index.module.less'
import goodsApi from '../../../api/goods'
const { TextArea } = Input;
const { TreeNode } = TreeSelect;

 

class ShopAdd extends Component {
    state = { 
        "imgUrl" : "http://haitao.nosdn2.127.net/1bl7l6omn61_800_800.jpg?imageView&thumbnail=800x0&quality=85", 
        "title" : "荷兰牛栏1111", 
        "productName" : "Nutrion荷兰牛栏 婴幼儿H.A半水解蛋白奶粉1段(0-6个月)750克/罐", 
        "originalPrice" : 269, 
        "currentPrice" : 119,
        "describe" : "【有效期至2020-08-01】适度水解蛋白低敏配方，在每日所需基本营养配方的基础上，对牛奶蛋白进行部分水解。不含蔗糖及乙基香兰素：口味清淡，奶味香醇，宝宝更易接受。新老包装随机发货。", 
        "standards" : {
            "title" : "阶段", 
            "standards" : [
                "一段", 
                "二段", 
                "三段"
            ]
        }, 
        "count" :1,
        "type" : "全球奶粉",
        "Status" : 0,
        "productId" : "0001",
        value: undefined,
    }
   
    add=async(arguements)=>{
        let result = await goodsApi.addGoods(arguements)
        console.log('传输成功',arguements)
    
    }
    onChange = value => {
        console.log(value);
        this.setState({ value });
        
      };
    render() { 
        let url = null
        return ( 
            <div className={style.box}>

            <Card title='商品添加' className={style.Card}>
                标题<Input placeholder="请输入标题" allowClear onChange={(e)=>{
                    this.setState({title:e.target.value})
                }} /><br />
                图片地址<Input placeholder="请输入图片的URL地址" allowClear onChange={(e)=>{
                    this.setState({imgUrl:e.target.value})
                }} />
               
                <br/>
                商品名称<Input placeholder="请输入商品名称" allowClear onChange={(e)=>{
                    this.setState({productName:e.target.value})
                }} /><br /> 
                商品ID<Input placeholder="请输入商品名称" allowClear onChange={(e)=>{
                    this.setState({productId:e.target.value})
                }} /><br />
                商品状态值
                <TreeSelect showSearch style={{ width: '100%' }} value={this.state.value} dropdownStyle={{ maxHeight: 400, overflow: 'auto' }} placeholder="Please select" allowClear treeDefaultExpandAll onChange={this.onChange}>
                    <TreeNode value="1" title="上架"></TreeNode>
                    <TreeNode value="-1" title="待上架"></TreeNode>
                    <TreeNode value="0" title="下架"></TreeNode>
                </TreeSelect>
                原价<Input prefix="￥" suffix="RMB"  onChange={(e)=>{
                    this.setState({originalPrice:e.target.value})
                }}
                /><br />
                现价<Input prefix="￥" suffix="RMB"  onChange={(e)=>{
                    this.setState({currentPrice:e.target.value})
                }}
                /><br />
                 
                商品描述<TextArea placeholder="请写入商品的描述" allowClear onChange={(e)=>{
                     this.setState({describe:e.target.value}) 
                }}  />
                商品数量<Input placeholder="请输入商品数量" allowClear onChange={(e)=>{
                    this.setState({count:e.target.value})
                }} /><br />
                商品种类<Input placeholder="请输入商品类别" allowClear onChange={(e)=>{
                    this.setState({type:e.target.value})
                }} /><br />
                <Button className={style.submit} onClick={()=>{
                    this.add(this.state)
                }}>提交商品数据</Button>
            </Card>   
            
            </div>
         );
    }
}
 
export default ShopAdd;
/* 
商品添加
1.用户输入信息
2.获取用户输入的信息
3.调用添加接口
4.添加成功之后，可以保持不动也可以跳转回列表页
*/