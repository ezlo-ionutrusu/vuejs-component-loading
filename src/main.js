import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import repoComponent from "repo-component";

Vue.config.productionTip = false;
Vue.use(repoComponent);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
