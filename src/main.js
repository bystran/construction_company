import Vue from 'vue'
import BaseView from './views/BaseView'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import Toasted from 'vue-toasted'
import VueAnalytics from 'vue-analytics'//and then use it in main.js


import './app.scss'

Vue.use(VueAnalytics, {
    id: 'UA-171598895-1',
    router
})

Vue.use(Vuelidate)
Vue.use(Toasted)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(BaseView)
}).$mount('#app')

