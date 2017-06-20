import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import formStock from '@/components/formStock'
import chooseTemp from '@/components/chooseTemp'
import searchItem from '@/components/searchItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/formStock',
      name: 'formStock',
      component: formStock
    },
    {
      path: '/chooseTemp',
      name: 'chooseTemp',
      component: chooseTemp
    },
    {
      path: '/searchItem',
      name: 'searchItem',
      component: searchItem
    }
  ]
})
