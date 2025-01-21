import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AboutTab from '@/components/AboutTab.vue'
import PrivacyTab from '@/components/PrivacyTab.vue'
import TermsTab from '@/components/TermsTab.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: AboutTab
  },
  {
    path: '/privacidade',
    name: 'Privacidade',
    component: PrivacyTab
  },
  {
    path: '/termos',
    name: 'Termos',
    component: TermsTab
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router