import {getData} from '../../api/index'

const state = {
  list: [],
  curId: 1
}

// 由state派生出来的数据
const getters = {

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
  async getData({commit}, payload){
    // 返回promise，控制action的状态
    return new Promise((resolve, reject)=>{
      getData().then(res=>{
        console.log('res...', res);
        // 提交局部mutation
        commit('updateList', res.list);
        // 提交全局mutation
        commit('right/updateTotal', res.total, {root:true});
        // 修改action的状态
        resolve();
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
