import axios from '../utils/axios';

const HOST = 'http://47.97.244.129:3002'
// const HOST= 'http://localhost:3002'

class Classify {
    typelist() {
        let url = `${HOST}/type/find`
        return axios.get(url)
    }
    typeadd(typeName) {
        let url = `${HOST}/type/add`
        return axios.post(url, { typeName })
    }
    typeupdate(_id, typeName) {
        let url = `${HOST}/type/update` + _id
        return axios.put(url, { typeName })
    }
    typedel(_id) {
        let url = `${HOST}/type/del` + _id
        return axios.delete(url)
    }
}
export default new Classify()