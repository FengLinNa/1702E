import Vue from 'vue'
import Router from 'vue-router'


// 一级路由
import Login from '@/views/login/'
import Home from '@/views/home/'

// 二级路由
import Movie from '@/views/home/movie'
import Cinema from '@/views/home/cinema'
import My from '@/views/home/my'


Vue.use(Router)

export default new Router({
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
        component: Movie,
        // children: [{
        //   path: '/',
        //   component: Hot
        // }, {
        //   path: 'will',
        //   component: Will
        // }]
      }, {
        path: '/home/cinema',
        component: Cinema
      }, {
        path: '/home/my',
        component: My
      }]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
