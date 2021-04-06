import VueI18n from "vue-i18n"; // 引入vue-i18n多语言包
import Vue from "vue";
import store from "@/store/index";

Vue.use(VueI18n);

const DEFAULT_LANG = "zh";
// const USER_LANG = (navigator.language || navigator.browserLanguage)
// const USER_LANG = "zh".toLowerCase().substr(0, 2);
const LOCALE_KEY = "boucheron_language";

const locales = {
  zh: require("./zh.json"),
};

const i18n = new VueI18n({
  locales: DEFAULT_LANG,
  messages: locales,
});
export const setup = (lang) => {
  window.localStorage.removeItem(LOCALE_KEY);
  if (lang == undefined) {
    lang = window.localStorage.getItem(LOCALE_KEY);
    if (locales[lang] == undefined) {
      lang = DEFAULT_LANG;
      //   store.commit("locales/SET_LANG", lang);
    }
  }
  window.localStorage.setItem(LOCALE_KEY, lang);
  Object.keys(locales).forEach(() => {
    document.body.classList.remove("lang-${item}");
  });
  document.body.classList.add("lang-${lang}");
  document.body.setAttribute("lang", lang);
  Vue.config.lang = lang;
  i18n.locale = lang;
};
setup();
export default i18n;
