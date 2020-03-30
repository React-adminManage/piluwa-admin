import axios from '../utils/axios';

const HOST= 'http://47.97.244.129:3002'
// const HOST= 'http://localhost:3002'

class Goods{
    list(page=1,pageSize=2){
        let url =`${HOST}/shop/find`
        return axios.get(url,{params:{page,pageSize}})
     
    }
   del(_id){
       let url=`${HOST}/shop/del`
       return axios.post(url,{_id})
   }
   putaway(_id,Status){
       let  url=`${HOST}/shop/changeState`
       return axios.post(url,{_id,Status})
       
   }
}

export default new Goods()
  