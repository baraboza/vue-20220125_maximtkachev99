import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory('/05-vue-router/01-AuthPages'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/PageIndex'),
    },
    {
      path: '/login',
      name: 'login',
      props: (to) => ({from: to.query.from}),
      component: () => import('../views/PageLogin'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/PageRegister'),
    }
  ],
});
