import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('../views/CardsView.vue'),
  },
  {
    path: '/card/:id',
    name: 'Card',
    component: () => import('../views/CardView.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue'),
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: () => import('../views/RewardsView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
