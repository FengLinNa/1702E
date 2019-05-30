import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 一级路由
import Login from '@/views/login'
import User from '@/views/user'

// 二级路由
import UserList from '@/views/user/list'
import UserAdd from '@/views/user/add'


export default new VueRouter({
  routes: [{
    path: '/login',
    component: Login
  },{
    path: '/user',
    component: User,
    children: [{
      path: '/user/list',
      component: UserList
    }, {
      path: '/user/add',
      component: UserAdd
    }]
  },{
    path: '*',
    redirect: '/user/list'
  }]
})
