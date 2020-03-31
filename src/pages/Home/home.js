import React,{Component} from 'react'
import Style from './index.module.less'
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={Style.sayhello}>
                <img src='ava.png'></img>
                <span>hello,admin,祝您开心每一天!</span>
            </div>
         );
    }
}
 
export default Home;