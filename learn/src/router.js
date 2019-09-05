import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:"/registry"
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/404/')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('./views/music/')
    },
    {
      path: '/registry',
      name: 'registry',
      component: () => import('./views/registry/')
    }
  ]
})
