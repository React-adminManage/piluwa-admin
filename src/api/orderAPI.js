import axios from '../utils/axios';

const HOST= 'http://localhost:3002'

class Order{
    findStatus(payload){
        let url =`${HOST}/order/searchStatus`
        return axios.post(url,payload)
    }
    find(payload){
        let url =`${HOST}/order/find`
        return axios.post(url,payload)
    }
    findById(payload){
        let url =`${HOST}/order/SearchByoId`
        return axios.get(url,{params:payload})
    }
    mutilquery(payload){
        let url =`${HOST}/order/mutilquery`
        return axios.post(url,payload)
    }
}

export default new Order()
