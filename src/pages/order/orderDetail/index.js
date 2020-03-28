import React,{Component} from 'react'
class orderDetail extends Component {
    state = {  }
    componentDidMount(){
        console.log(this.props.match.params.oId)
        // axios 请求
    }
    render() { 
        return ( 
            <div>这里是订单详情页面</div>
         );
    }
}
 
export default orderDetail;