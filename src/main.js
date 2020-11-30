import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import routes from "./router";
import store from "./store/index.js";

import Card from "./components/ui/Card.vue";
import BaseButton from "./components/ui/BaseButton.vue";
Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.component("card", Card);
Vue.component("baseButton", BaseButton);
const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
