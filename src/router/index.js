import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Employee from "../views/Employee.vue";
import EmployeeDetail from "../views/EmployeeDetail.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/employee",
    name: "employee",
    component: Employee,
  },
  {
    path: "/employee/:id",
    component: EmployeeDetail,
    name: "EmployeeDetail",
    props: true,
  },
  {
    path: "/employees",
    redirect: "/employee",
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
