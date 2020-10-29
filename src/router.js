import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  // eslint-disable-next-line
  scrollBehavior: function(to, from, savedPosition) {
    if(to.hash) {
      return {selector: to.hash}
    // } else if(savedPosition) {
    //   return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  },
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
      path: '/data-access-coe',
      components: { default: () => import('./views/DataAccessCoE.vue')},
      children: [
        // {
        //   path: '',
        //   name: 'dataaccesscoeoverview',
        //   components: { dataaccesscoe: () => import('./views/dataaccesscoe/overview.vue')}
        // },
        {
          path: '',
          name: 'dataaccesscoe-pl',
          components: { dataaccesscoe: () => import('./views/dataaccesscoe/community-support.vue')},
        },
        {
          path: '/data-access-coe/community-support/planning',
          name: 'dataaccesscoe-pl-planning',
          components: { dataaccesscoe: () => import('./views/dataaccesscoe/pl-planning.vue')}
        },
        {
          path: '/data-access-coe/community-support/preaward',
          name: 'dataaccesscoe-pl-preaward',
          components: { dataaccesscoe: () => import('./views/dataaccesscoe/pl-preaward.vue')}
        },
        {
          path: '/data-access-coe/community-support/award',
          name: 'dataaccesscoe-pl-award',
          components: { dataaccesscoe: () => import('./views/dataaccesscoe/pl-award.vue')}
        },
        {
          path: '/data-access-coe/community-support/postaward',
          name: 'dataaccesscoe-pl-postaward',
          components: { dataaccesscoe: () => import('./views/dataaccesscoe/pl-postaward.vue')}
        },
        {
          path: '/data-access-coe/community-support/closeout',
          name: 'dataaccesscoe-pl-closeout',
          components: { dataaccesscoe: () => import('./views/dataaccesscoe/pl-closeout.vue')}
        }
      ]
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
          name: 'resourceslanding',
          components: { resources: () => import('./views/resources/resources-landing.vue')}
        },
        {
          path: '/resources/guidelines',
          name: 'guidelines',
          components: { resources: () => import('./views/resources/resources-guidelines.vue')}
        },
        {
          path: '/resources/data-management/data-management',
          name: 'datamanagement',
          components: { resources: () => import('./views/resources/data-management/data-management.vue')}
        },
        {
          path: '/resources/data-management/preliminary-dmp',
          name: 'preliminarydmp',
          components: { resources: () => import('./views/resources/data-management/preliminary-dmp.vue')}
        },
        {
          path: '/resources/data-management/post-award-dmp',
          name: 'postawarddmp',
          components: { resources: () => import('./views/resources/data-management/post-award-dmp.vue')}
        },
        {
          path: '/resources/data-management/template-and-instructions',
          name: 'templateandinstructions',
          components: { resources: () => import('./views/resources/data-management/template-and-instructions.vue')}
        },
        {
          path: '/resources/data-storage-system',
          name: 'datastoragesystem',
          components: { resources: () => import('./views/resources/data-storage-system.vue')}
        },
        {
          path: '/resources/data-registration',
          name: 'data-registration',
          components: { resources: () => import('./views/resources/data-registration.vue')}
        },
        {
          path: '/resources/data-management/faqs',
          name: 'faqs',
          components: { resources: () => import('./views/resources/faqs.vue')}
        },
        {
          path: '/resources/metrics',
          name: 'metrics',
          components: { resources: () => import('./views/resources/metrics.vue')}
        },
        {
          path: '/resources/data-management/additional-resources',
          name: 'additional-resources',
          components: { resources: () => import('./views/resources/additional-resources.vue')}
        }
      ]
    },
    {
      path: '/*',
      redirect: { name: 'home' }
    }
  ]
})

