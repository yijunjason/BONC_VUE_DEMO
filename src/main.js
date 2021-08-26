import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import * as echarts from 'echarts';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/index';

createApp(App).use(router).use(ElementPlus).use(echarts).mount('#app');
