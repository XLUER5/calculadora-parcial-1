import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Calculator from "./views/CalculatorView.vue";
import Login from "./views/Login.vue";
import { getToken } from "./utils/Token";
import vue3GoogleLogin from "vue3-google-login";

const CLIENT_ID = "24376355745-ab9ku5834kc8u5rrhnv9apstl7gne4er.apps.googleusercontent.com"

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/:pathMatch(.*)*", redirect: "/login" },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/calculadora",
    name: "Calculadora",
    component: Calculator,
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.path === "/calculadora") {
    const isLogged = getToken("isLogged");
    if (isLogged === "true") {
      next();
    } else {
      next("/login");
    }
  } else if (to.path === "/login") {
    const isLogged = getToken("isLogged");

    if (isLogged === "true") {
      next("/calculadora");
    } else {
      next();
    }
  } else {
    next();
  }
});

createApp(App).use(router).use(vue3GoogleLogin,{
    clientId: CLIENT_ID
}).mount("#app");
