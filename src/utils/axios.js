// axios的拦截器  接口还没做  --保留


import axios from 'axios'  //引入axios

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response.data;   //将拿到的数据进行过滤
}, function (error) {
  return Promise.reject(error);
});
export default axios   //抛出axios