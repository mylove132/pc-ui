import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import filters from './utils/filters';
import installElementPlus from '@/plugins/element'; // 按需引入element标签
import './assets/css/icon.css'

/**
 * 捕获全局promise-reject
 */
window.addEventListener('unhandledrejection', e => {
  if (process.env.NODE_ENV === 'production') {
    e.preventDefault();
    console.log(e);
  }
});



const app = createApp(App);
installElementPlus(app);
// 全局过滤器
app.config.globalProperties.$filters = filters;
app.use(router).use(store).mount('#app');


