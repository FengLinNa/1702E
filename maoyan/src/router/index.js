import Vue from 'vue'
import Router from 'vue-router'

import {getToken} from '@/utils'

// 一级路由
import Login from '@/views/login/'
import Home from '@/views/home/'

// 二级路由
import Movie from '@/views/home/movie'
import Cinema from '@/views/home/cinema'
import My from '@/views/home/my'

// 三级路由
import Hot from '@/views/home/movie/hot'
import Will from '@/views/home/movie/will'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/movie',
      children: [{
        path: '/home/movie',
        redirect: '/home/movie/hot',
        component: Movie,
        children: [{
          path: 'hot',
          component: Hot
        }, {
          path: 'will',
          component: Will
        }]
      }, {
        path: '/home/cinema',
        component: Cinema
      }, {
        path: '/home/my',
        name: 'My',
        component: My
      }]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

// 路由跳转前
router.beforeEach((to, from ,next)=>{
  console.log('to...', to, from);
  // 在去我的页面之前判断是否登陆
  if (to.path == '/home/my'){
    if (getToken()){
      next();
    }else{
      next('/login')
    }
  }else{
    next();
  }
})

// 路由跳转后
router.afterEach((to, from)=>{
  console.log(2334);
})

export default router;
