import {getUserList} from '@/api/index'
// 模块数据
const state =  {
  list: []
}

// 模块同步操作
const mutations = {
  updateList(state, payload){
    state.list = payload
  }
}

// 模块异步操作
const actions = {
  getUserList({commit}, payload){
    console.log(123)
    return new Promise((resolve, reject)=>{
      getUserList().then(res=>{
        console.log('res...', res)
        commit('updateList', res.data);
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
