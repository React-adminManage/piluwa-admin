import axios from '../utils/axios';

const HOST= 'http://47.97.244.129:3002'

class Order{
    findStatus(payload){
        let url =`${HOST}/order/searchStatus`
        return axios.get(url,{params:payload})
    }
    find(payload){
        let url =`${HOST}/order/find`
        return axios.get(url,{params:payload})
    }
}

export default new Order()
