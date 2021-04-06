import Vue from "vue";
import Vuex from "vuex";
import camelcase from "camelcase";

import getters from "./getters";
Vue.use(Vuex);
const context = require.context("./modules", false, /\.js$/);
//获取moudules文件下所有js文件；
const moduleStores = {};

context.keys().forEach((key) => {
  const fileName = key.slice(2, -3);
  const fileNameInCamelCase = camelcase(fileName);
  const fileModule = context(key).default;
  moduleStores[fileNameInCamelCase] = {
    ...fileModule,
    namespaced: true,
  };
});
export default new Vuex.Store({
  modules: {
    ...moduleStores,
  },
  getters,
});
