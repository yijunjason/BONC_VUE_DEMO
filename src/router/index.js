import HelloWorld from '../components/HelloWorld.vue';
import Page404 from '../components/404';

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/404', component: Page404 },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

export default router;