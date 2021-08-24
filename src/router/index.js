import HelloWorld from '../components/HelloWorld.vue';
// import Page404 from '../components/404';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {path: '/', name:'HelloWorld', component: HelloWorld, props: true},
    {path: '/DataPage', name:'DataPage', component: () => import('../components/DataPage'), props: true},
    {path: '/IfPage', name:'IfPage', component: () => import('../components/IfPage'), props: true},
    {path: '/OnPage', name:'OnPage', component: () => import('../components/OnPage'), props: true},
    {path: '/FormPage', name:'FormPage', component: () => import('../components/FormPage'), props: true},
    {path: '/:catchAll(.*)', name: '404', component: () => {return import("../components/404")}, props: true},
    // {path: '/:catchAll(.*)', redirect: '/404'},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;