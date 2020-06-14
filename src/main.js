import Vue from 'vue'
import BaseView from './views/BaseView'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import Toasted from 'vue-toasted'

import './app.scss'

Vue.use(Vuelidate)
Vue.use(Toasted)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(BaseView)
}).$mount('#app')

