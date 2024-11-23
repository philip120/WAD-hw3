import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import SignupPage from '../views/SignupPage.vue';

const routes = [{ 
    path: '/',
    name: 'main',
    component: MainPage },
    { path: '/signuppage',
        name: 'signuppage',
        component: SignupPage
    }
];

// Use `routes` correctly here
const router = createRouter({
  history: createWebHistory(),
  routes, // <-- Make sure to include this line
});

export default router;
