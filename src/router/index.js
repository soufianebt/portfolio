import { createRouter, createWebHistory } from 'vue-router'
import WhoAmIView from '../views/WhoAmIView.vue'

const routerBase = window.location.pathname.startsWith('/portfolio/')
  ? '/portfolio/'
  : '/'

const router = createRouter({
  history: createWebHistory(routerBase),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WhoAmIView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/EducationView.vue')
    }
    ,
    {
      path: '/technologies',
      name: 'technologies',
      component: () => import('../views/TechnologyView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/blog/:slug?',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    }
  ]
})

export default router
