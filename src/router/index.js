import HelloWorld from '../components/HelloWorld.vue';
import Page404 from '../components/404';
import { createRouter, createWebHistory  } from 'vue-router';

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/404', component: Page404 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;