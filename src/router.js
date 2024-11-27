import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/home",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/login",
    alias: "/login",
    name: "login",
    component: () => import("./components/LoginForm")
  },
  {
    path: "/batchEnroll",
    alias: "/batchEnroll",
    name: "batchEnroll",
    component: () => import("./components/BatchEnroll")
  },
  {
    path: "/courseInterface/:batch_id",
    alias: "/courseInterface",
    name: "courseInterface",
    component: () => import("./components/CourseInterface")
  },
  {
    path: "/quizTest",
    alias: "/quizTest",
    name: "quizTest",
    component: () => import("./components/QuizTest")
  },
  {
    path: "/certificate",
    alias: "/certificate",
    name: "certificate",
    component: () => import("./components/Certificate")
  },
  {
    path: "/progressber",
    alias: "/progressber",
    name: "progressber",
    component: () => import("./components/ProgressBer")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;