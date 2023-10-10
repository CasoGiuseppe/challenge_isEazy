import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      components: {
        default: () => import(/* webpackChunkName: "root" */ '@ui/components/defaults/default-root/DefaultRoot.vue'),
      },
      children: [
        {
          path: '/login',
          name: 'login',
          meta: { type: 'login' },
          components: {
            content: () => import(/* webpackChunkName: "login" */ '@ui/layouts/user-login/UserLogin.vue'),
          },
        },
      ],
      redirect: () => {
        return { name: 'login' };
      } 
    },
  ]
});

export default router;
