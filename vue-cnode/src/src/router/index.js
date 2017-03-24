import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Signout from '@/components/Signout'
import About from '@/components/About'

import MyUsername from '@/components/my/MyUsername'
import MyHome from '@/components/my/MyHome'
import MyMessages from '@/components/my/MyMessages'

import TopicCreate from '@/components/topic/TopicCreate'
import TopicVid from '@/components/topic/TopicVid'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      meta: { auth: false},
      component: About
    },
    {
      path: '/login',
      meta: { auth: false },
      component: Login
    },
    {
      path: '/signout',
      component: Signout
    },
    {
      path: '/my/home/', // 我的个人中心
      meta: { auth: false },
      component: MyHome
    },
    {
      meta: { auth: false },
      path: '/my/message/', // 我的消息
      component: MyMessages
    },
    {
      path: '/user/:username', // 查看用户信息
      meta: { auth: false },
      component: MyUsername
    },
    {
      path: '/topic/create', // 创建帖子
      meta: { auth: false},
      component: TopicCreate
    },
    {
      path: '/topic/:vid', //查看帖子信息
      meta: { auth: false},
      component: TopicVid
    }
  ]
})
