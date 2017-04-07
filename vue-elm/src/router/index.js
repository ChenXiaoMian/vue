import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Sell from '@/components/sell/sell'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/sell',
      name: 'Sell',
      component: Sell
    }
  ]
})
