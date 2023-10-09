import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      redirect: () => {
        return { name: 'login' };
      }
    },

    {
      path: '/login',
      name: 'login',
      meta: { type: 'login' },
      components: {
        default: () => import(/* webpackChunkName: "login" */ '@ui/layouts/user-login/UserLogin.vue'),
      },
      props: {
        default: true,
      },
    }
  ]
});

export default router;
