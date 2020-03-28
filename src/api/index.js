import Axios from '../utils/axios'
class Admin {
    list() {
        let url = 'http://47.97.244.129:3002/admin'
        return Axios.get(url)
    }
}
export default new Admin()