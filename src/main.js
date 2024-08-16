import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 路由
import router from './router'; // 导入路由实例  
  
createApp(App).use(router).mount('#app');
// createApp(App).mount('#app')
