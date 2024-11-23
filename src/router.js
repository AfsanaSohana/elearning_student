import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/home",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/sohana",
    alias: "/sohana",
    name: "sohana",
    component: () => import("./components/Home")
  },
  {
    path: "/batchEnroll",
    alias: "/batchEnroll",
    name: "batchEnroll",
    component: () => import("./components/BatchEnroll")
  },
  {
    path: "/courseInterface",
    alias: "/courseInterface",
    name: "courseInterface",
    component: () => import("./components/CourseInterface")
  },
  {
    path: "/paymentForm",
    alias: "/paymentForm",
    name: "paymentForm",
    component: () => import("./components/PaymentForm")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;