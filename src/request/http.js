import axios from "axios";
import store from "../store/index";
import router from "vue-router";
import { Msg } from "../utils/Message";
const env = process.env.NODE_ENV;
// 环境切换
switch (env) {
  case "development":
    axios.defaults.baseURL = "";
    break;
  case "debug":
    axios.defaults.baseURL = "";
    break;
  case "production":
    axios.defaults.baseURL = "";
    break;
}
axios.defaults.timeout = 10000; // 超过10秒请求中断
// axios.defaults.headers.post['Content-type'] ='application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data'

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 每次请求前先判断vuex中有无token
    // 若存在则统一在http请求的header加上token，便于后端根据token判断登录状态
    // 若本地token存在，但国企了，则需要在拦截器中对返回状态进行判断
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  (error) => Promise.error(error)
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 返回200 则成功
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    const { status } = error.response;
    if (status) {
      switch (status) {
        case 404:
          Msg({
            message: "网络请求不存在",
            type: "error",
            duration: 1000,
          });
          router.replace({
            path: "/404",
          });
          break;

        case 403:
          Msg({
            message: "登录过期，请重新登录",
            type: "warning",
            duration: 1000,
          });
          localStorage.removeItem("token"); // 清除token
          setTimeout(() => {
            router.replace({
              path: "/login",
            });
          }, 1000);
          break;
      }
      return Promise.reject(error.response);
    }
  }
);
export default axios;
