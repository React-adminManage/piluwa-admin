import axios from '../utils/axios';

const HOST= 'http://47.97.244.129:3002'
// const HOST= 'http://localhost:3002'

class Goods{
    list(page=1,pageSize=2){
        let url =`${HOST}/shop/find`
        return axios.get(url,{params:{page,pageSize}})
    }
   
}

export default new Goods()
