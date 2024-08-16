// src/router/index.js 或 src/router/index.ts  
import { createRouter, createWebHistory } from 'vue-router';  
  
// 引入需要路由的组件  
import Login from '../views/login/login.vue';  
import Home from '../views/home/home.vue';  
import About from '../views/about/about.vue';  
  
// 定义路由  
const routes = [  
  {  
    path: '/',  
    name: 'login',  
    component: Login,  
  },  
  {  
    path: '/home',  
    name: 'home',  
    component: Home,  
  },  
  {  
    path: '/about',  
    name: 'about',  
    component: About,  
  },  
  // 可以继续添加更多路由...  
];  
  
// 创建路由实例  
const router = createRouter({  
  history: createWebHistory(import.meta.env.BASE_URL),  
  routes,  
});  
export default router;