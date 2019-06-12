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
        name: 'guidelines'
      }
    ]
  }
];