import axios from '../utils/axios';

const HOST = 'http://47.97.244.129:3002'
// const HOST= 'http://localhost:3002'

class Classify {
    list() {
        let url = `${HOST}/type/find`
        return axios.get(url)
    }
    add(Type) {
        let url = `${HOST}/type/add`
        return axios.post(url,Type)
    }
    del(_id) {
        let url = `${HOST}/type/del`
        return axios.post(url,{_id:_id})
    }
}
export default new Classify()