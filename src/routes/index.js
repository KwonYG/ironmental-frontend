import Vue from "vue";
import Router from "vue-router";
import { interviewItemGuard } from "./guard.js";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },

    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },

    {
      path: "/interviews",
      name: "interviews",
      component: () => import("../views/InterviewView.vue")
    },

    {
      path: "/interviews/:id",
      name: "interview",
      component: () => import("../views/OneInterviewView.vue"),
      beforeEnter: interviewItemGuard
    },

    {
      path: "/auth/confirm/:confirmCode",
      name: "confirm",
      component: () => import("../views/ConfirmView.vue")
    },

    {
      path: "*",
      name: "notFound",
      component: () => import("../views/ErrorView.vue")
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
