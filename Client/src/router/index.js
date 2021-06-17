import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import donations from '@/components/donations'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path     : '/',
      name     : 'index',
      component: index
    },
    {
      path     : '/donations',
      name     : 'donations',
      component: donations
    }
  ]
})
