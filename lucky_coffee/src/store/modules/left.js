import {getData} from '../../api/index'

const state = {
  list: [],
  curId: 1
}

// 同步数据改变
const mutations = {
  click(state, payload){
    state.curId = payload
  },
  updateList(state, payload){
    state.list = payload;
  }
}

// 异步数据改变
const actions = {
  getData({commit}, payload){
    getData().then(res=>{
      console.log('res...', res);
      commit('updateList', res.list);
      commit('right/updateTotal');
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
