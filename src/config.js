// 请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发起请求请做一些业务处理
    return config;
  },
  function(error) {
    // 对请求失败做处理
    return Promise.reject(error);
  }
);

//   响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做处理
    return response;
  },
  function(error) {
    // 对响应错误做处理
    return Promise.reject(error);
  }
);
