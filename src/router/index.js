import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index/index'
import news from '@/pages/news/news'
import module from '@/pages/module/module'
import user from '@/pages/user/user'
import newsHome from '@/pages/newsHome/newsHome'
import newsDetail from '@/pages/newsDetail/newsDetail'

Vue.use(Router)

export default new Router({
	mode: 'history',//去掉地址#  默认hash模式
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/news',
      component: news,
      children: [
        {
          path: '/',
          component: newsHome
        },
        {
          path: 'newsDetail',
          name: 'newsDetail',
          component: newsDetail
        }
      ]
    },
    {
      path: '/module',
      name: 'module',
      component: module
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
