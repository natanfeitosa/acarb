import Vue from 'vue'

import { BootstrapVue } from 'bootstrap-vue'
import VueGtag from 'vue-gtag'
// import VueMeta from 'vue-meta'

// import { FirebaseVue } from './firebase'
import router from './router'
import './registerServiceWorker'
import './assets/scss/main.scss'

import App from './App.vue'

Vue.config.productionTip = false

// Vue.use(Meta, {
//   keyName: 'metaInfo',
//   attribute: 'data-vue-meta',
//   ssrAttribute: 'data-vue-meta-server-rendered',
//   tagIDKeyName: 'vmid',
//   refreshOnceOnNavigation: true
// })

Vue.use(VueGtag, {
  config: {
    id: 'G-E1WPD7FH61',
  },
  appName: 'Acarb',
  pageTrackerScreenviewEnabled: true,
}, router)

Vue.use(BootstrapVue)
// Vue.use(FirebaseVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
