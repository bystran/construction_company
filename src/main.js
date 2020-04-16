import Vue from 'vue'
import BaseView from './views/BaseView'
import router from './router'
import store from './store'
import VueObserveVisibility from 'vue-observe-visibility'

import './app.scss'

Vue.config.productionTip = false
Vue.use(VueObserveVisibility)

new Vue({
  router,
  store,
  render: h => h(BaseView)
}).$mount('#app')

