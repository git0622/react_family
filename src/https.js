import axios from "axios";
import { Toast } from "antd-mobile";

// 请求拦截器
axios.interceptors.request.use(
  function(req) {
    // 在发起请求请做一些业务处理
    Toast.loading("加载中", 0);
    return req;
  },
  function(error) {
    // 对请求失败做处理
    Toast.hide()
    return Promise.reject(error);
  }
);

//   响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做处理
    // setTimeout(()=>{
      Toast.hide()
    // },2000)
    return response;
  },
  function(error) {
    // 对响应错误做处理
    Toast.hide()
    return Promise.reject(error);
  }
);
