import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "@/views/User.vue";
import Error from "@/views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/user",
    name: "user",
    component: User
    // component: () =>
    //   import(/* webpackChunkName: "user" */ "@/views/User.vue")
  },
  {
    path: "*",
    name: "Error",
    component: Error
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
