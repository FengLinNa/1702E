import Vue from 'vue';
import Vuex from 'vuex';

// 日志中间件
import Logger from 'vuex/dist/logger';

Vue.use(Vuex);
// 引入子模块
import index from './modules/index';

// 生成一个vuex的实例
export default new Vuex.Store({
  modules: {
    index
  },
  plugins: [Logger()]
});
