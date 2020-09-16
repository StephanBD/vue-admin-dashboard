import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Team from "../views/Team.vue";

import Signin from "../views/SigninFlow/Signin";
import Request from "../views/SigninFlow/Request";
import Recover from "../views/SigninFlow/Recover";

//====================================================//
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "team",
    component: Team,
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
  },
  {
    path: "/request",
    name: "request",
    component: Request,
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
