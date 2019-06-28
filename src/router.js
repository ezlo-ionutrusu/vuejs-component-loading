import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "async",
      component: () => import("./views/Async.vue")
    },
    {
      path: "/http",
      name: "http",
      component: () => import("./views/HTTP.vue")
    },
    {
      path: "/repo",
      name: "repo",
      component: () => import("./views/Repo.vue")
    }
  ]
});
