import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import MyHome from '@/components/MyHome'
import MyMessages from '@/components/MyMessages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/my/home/', // 我的个人中心
      meta: { auth: false },
      component: MyHome
    },
    {
      meta: { auth: false },
      path: '/my/messages/', // 我的消息
      component: MyMessages
    },
  ]
})
