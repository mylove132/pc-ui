import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeLayout from '@/layouts/HomeLayout.vue';
import OnlineScript from "@/components/Content/OnlineScript/index.vue";
import Login from "@/page/Login.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeLayout,
    children: [
      {
        path: "/onlineScript",
        name: "OnlineScript",
        component: OnlineScript
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
  
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
