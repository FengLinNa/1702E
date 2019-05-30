import Vue from 'vue';
import Vuex from 'vuex';
// 引入日志
import Logger from 'vuex/dist/logger';

Vue.use(Vuex);

// 引入子模块
import left from './modules/left';
import right from './modules/right';


export default new Vuex.Store({
  modules: {
    left,
    right
  },
  state:{a:1,b:2},
  getters: {c(){
    return undefined;
  }},
  actions: {},
  mutations: {},
  plugins: [Logger()]
})
