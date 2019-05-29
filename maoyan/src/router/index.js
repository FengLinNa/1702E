import Vue from 'vue'
import Router from 'vue-router'

import {getToken} from '@/utils'

// 一级路由
import Login from '@/views/login/'
import Home from '@/views/home/'
import City from '@/views/city/'
import Detail from '@/views/detail/'

// 二级路由
import Movie from '@/views/home/movie'
import Cinema from '@/views/home/cinema'
import My from '@/views/home/my'

// 三级路由
import Hot from '@/views/home/movie/hot'
import Will from '@/views/home/movie/will'


Vue.use(Router)

let router = new Router({
  // 切换路由模式 history | hash
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id?',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/movie',
      children: [{
        path: '/home/movie',
        redirect: '/home/movie/hot',
        name: 'Movie',
        component: Movie,
        children: [{
          path: 'hot',
          name: 'Hot',
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
