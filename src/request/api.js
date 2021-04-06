// 封装get/post请求

import axios from "./http";

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err.data));
  });
};

export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err.data));
  });
};
