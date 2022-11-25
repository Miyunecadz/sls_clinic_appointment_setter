import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AboutView from '../views/AboutView.vue'
import SetView from '../views/SetView.vue'
import ServiceView from '../views/ServiceView.vue'
import GetAquaintedView from '../views/GetAquaintedView.vue'
import LarnMoreView from '../views/LarnMoreView.vue'
import DashboardView from '../views/DashboardView.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/services',
      name: 'services',
      component: ServiceView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/set',
      name: 'set',
      component: SetView
    },
    {
      path: '/getaquainted',
      name: 'getaquanted',
      component: GetAquaintedView
    },
    {
      path: '/learnmore',
      name: 'learnmore',
      component: LarnMoreView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    }
    
    
    
   
  ]
})

export default router
