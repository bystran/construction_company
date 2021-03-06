import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueLazyload from 'vue-lazyload'
import vueSmoothScroll from 'vue2-smooth-scroll'


Vue.use(vueSmoothScroll)
Vue.use(VueRouter)
Vue.use(VueLazyload)

const routes = [
  {
    path: '*',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/gdpr',
    name: 'gdpr',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GDPR.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: function(to) {
    if (to.hash) {
        return {selector: to.hash}
    } else {
        return { x: 0, y: 0 }
    }
},
  base: process.env.BASE_URL,
  routes
})

export default router
