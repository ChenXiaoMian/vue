import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import formStock from '@/components/formStock'
import formOrigin from '@/components/formOrigin'
import formOutput from '@/components/formOutput'
import formEnvi from '@/components/formEnvi'
import formPieces from '@/components/formPieces'
import formPro from '@/components/formPro'

import chooseTemp from '@/components/chooseTemp'
import searchItem from '@/components/searchItem'
import tempData from '@/components/tempData'
import historyData from '@/components/historyData'
import historyList from '@/components/historyList'

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
      path: '/formOrigin',
      name: 'formOrigin',
      component: formOrigin
    },
    {
      path: '/formOutput',
      name: 'formOutput',
      component: formOutput
    },
    {
      path: '/formEnvi',
      name: 'formEnvi',
      component: formEnvi
    },
    {
      path: '/formPieces',
      name: 'formPieces',
      component: formPieces
    },
    {
      path: '/formPro',
      name: 'formPro',
      component: formPro
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
    },
    {
      path: '/tempData',
      name: 'tempData',
      component: tempData
    },
    {
      path: '/historyData',
      name: 'historyData',
      component: historyData
    },
    {
      path: '/historyList',
      name: 'historyList',
      component: historyList
    }
  ]
})
