import { createRouter, createWebHistory } from "vue-router";
import vacationpicker from "../views/vacationpicker";
import addcountry from "../views/addcountry";
import pageNotFound from "../views/page-not-found.vue";

const routes = [
  { path: "/", name: "home", component: vacationpicker },
  { path: "/add", name: "add", component: addcountry },
  {
    path: "/update",
    name: "update",
    component: () =>
      import(/* webpackChunkName: "update" */ "@/views/updatecountry")
  },
  //  { path: '/detail/:id/:name',
  //    name: 'detail',
  //    component: () => import ( /* webpackChunkName: "update" */ "@/views/countrydetail" )
  //  },
  {
    path: "/:catchAll(.*)*",
    component: pageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes
});

export default router;
