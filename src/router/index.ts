import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import userLocalStorage from 'hooks/useLocalstorage';

const routes: Array<RouteRecordRaw> = [
  {
      path: '/',
      redirect: '/dashboard'
  }, {
      path: "/",
      name: "Home",
      component: Home,
      children: [
          {
              path: "/dashboard",
              name: "dashboard",
              meta: {
                  title: '系统首页'
              },
              component: () => import (
              /* webpackChunkName: "dashboard" */
              "../views/Dashboard.vue")
          }, {
              path: "/table",
              name: "basetable",
              meta: {
                  title: '表格'
              },
              component: () => import (
              /* webpackChunkName: "table" */
              "../views/BaseTable.vue")
          }, {
              path: "/charts",
              name: "basecharts",
              meta: {
                  title: '图表'
              },
              component: () => import (
              /* webpackChunkName: "charts" */
              "../views/BaseCharts.vue")
          }, {
              path: "/form",
              name: "baseform",
              meta: {
                  title: '表单'
              },
              component: () => import (
              /* webpackChunkName: "form" */
              "../views/BaseForm.vue")
          }, {
              path: "/tabs",
              name: "tabs",
              meta: {
                  title: 'tab标签'
              },
              component: () => import (
              /* webpackChunkName: "tabs" */
              "../views/Tabs.vue")
          }, {
              path: "/donate",
              name: "donate",
              meta: {
                  title: '鼓励作者'
              },
              component: () => import (
              /* webpackChunkName: "donate" */
              "../views/Donate.vue")
          }, {
              path: "/upload",
              name: "upload",
              meta: {
                  title: '上传插件'
              },
              component: () => import (
              /* webpackChunkName: "upload" */
              "../views/Upload.vue")
          },{
              path: '/404',
              name: '404',
              meta: {
                  title: '找不到页面'
              },
              component: () => import (/* webpackChunkName: "404" */
              '../views/404.vue')
          }, {
              path: '/403',
              name: '403',
              meta: {
                  title: '没有权限'
              },
              component: () => import (/* webpackChunkName: "403" */
              '../views/403.vue')
          }
      ]
  }, {
      path: "/login",
      name: "Login",
      meta: {
          title: '登录'
      },
      component: () => import (
      /* webpackChunkName: "login" */
      "../views/Login.vue")
  }
];
const router = createRouter({
  history: createWebHistory('/'),
  routes
});

/**
 * 全局限制请求带token
 */
 router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    const { getLocalStorage } = userLocalStorage();
    let token = getLocalStorage('Authorization');

    if (token === null || token === "") {
      next("/login");
    } else {
      next() 
    }
  }
});


export default router;
