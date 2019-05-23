import Vue from 'vue'
import App from './App'
import router from './router'

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

// 挂载mint-ui
Vue.use(MintUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
