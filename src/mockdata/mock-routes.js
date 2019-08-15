export default [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/about',
    name: 'about'
  },
  {
    path: '/metrics',
    name: 'metrics'
  },
  {
    path: '/publicAccess',
    name: 'publicAccess'
  },
  {
    path: '/search',
    name: 'search'
  },
  {
    path: '/resources',
    children: [
      {
        path: '',
        name: 'resourceslanding'
      },
      {
        path: '/resources/guidelines',
        name: 'guidelines'
      },
      {
        path: '/resources/data-management/data-management',
        name: 'datamanagement'
      },
      {
        path: '/resources/data-management/preliminary-dmp',
        name: 'preliminarydmp'
      },
      {
        path: '/resources/data-management/post-award-dmp',
        name: 'postawarddmp'
      },
      {
        path: '/resources/data-management/template-and-instructions',
        name: 'templateandinstructions'
      },
      {
        path: '/resources/data-storage-system',
        name: 'datastoragesystem'
      },
      {
        path: '/resources/data-management/faqs',
        name: 'faqs'
      }
    ]
  }
];