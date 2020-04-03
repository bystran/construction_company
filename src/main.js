import Vue from 'vue'
import BaseView from './views/BaseView'
import router from './router'
import store from './store'

import './app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(BaseView)
}).$mount('#app')

