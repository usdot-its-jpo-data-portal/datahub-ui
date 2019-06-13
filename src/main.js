import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtm from 'vue-gtm';
import 'uswds'

Vue.config.productionTip = false

Vue.use(VueGtm, {
  id: 'GTM-T6F2VPH',
  enabled: true,
  debug: false,
  vueRouter: router,
  ignoredView: []
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
