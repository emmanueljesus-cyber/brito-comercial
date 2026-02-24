import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import './style.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/produto/:id',
      name: 'product',
      component: () => import('./views/ProductView.vue'),
    },
    {
      path: '/quem-somos',
      name: 'quem-somos',
      component: () => import('./views/QuemSomosView.vue'),
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

createApp(App).use(router).mount('#app')
