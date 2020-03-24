// 老佛爷
import {CHANGE_AGE,CHANGE_NAME} from './actionTypes'
import start from './state'
export  default (prevState = state,action)=>{
    // 深拷贝
    let newData = JSON.parse(JSON.stringify(prevState))
    let {type,payload} = action
    switch (type) {
        case CHANGE_AGE:
            newData.name=payload;  //批奏折
            break;
        case CHANGE_NAME:
            newData.age=payload;  //批奏折
            break;
    }
    return newData; //批完返回
}