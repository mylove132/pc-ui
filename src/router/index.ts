import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeLayout from '@/layouts/HomeLayout.vue';
import OnlineScript from "@/components/Content/OnlineScript/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeLayout,
    redirect: "/onlineScript",
    children: [
      {
        path: "/onlineScript",
        name: "OnlineScript",
        component: OnlineScript
      }
    ]
  }
  
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
