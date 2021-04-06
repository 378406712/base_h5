import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "reset.css";
import "./assets/css/tailwind.css";
import i18n from "./utils/locales/index";
import ElementUi from "element-ui";
import { get, post } from "./request/api";
Vue.config.productionTip = false;
Vue.prototype.$NbGet = get;
Vue.prototype.$NbPost = post;

Vue.use(ElementUi);
new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
