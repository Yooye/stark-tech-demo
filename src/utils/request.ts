import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.finmindtrade.com/api/v4",
});

instance.interceptors.request.use(
  function (config) {
    console.log("请求拦截器");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("响应拦截器", response);
    return response;
  },
  function (error) {
    console.log("响应拦截器失败拦截");
  }
);

export default instance;
