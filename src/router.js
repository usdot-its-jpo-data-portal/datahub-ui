import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/metrics',
      name: 'metrics',
      component: () => import('./views/Metrics.vue')
    },
    {
      path: '/publicAccess',
      name: 'publicAccess',
      component: () => import('./views/PublicAccess.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
    {
      path: '/resources',
      components: { default: () => import('./views/Resources.vue')},
      children: [
        {
          path: '',
          name: 'guidelines',
          components: { resources: () => import('./views/Resources/resources-guidelines.vue')}
        }
      ]
    }
  ]
})
