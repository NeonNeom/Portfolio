import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Preloader from '@/components/Preloader'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Preloader',
      component: Preloader
    }
  ]
})
