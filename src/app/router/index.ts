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
    },

    {
      path: '/success',
      name: 'success',
      meta: { type: 'success' },
      components: {
        dialog: () => import(/* webpackChunkName: "dialog" */ '@ui/components/user-dialog/UserDialog.vue'),
      },
    }
  ]
});

export default router;
