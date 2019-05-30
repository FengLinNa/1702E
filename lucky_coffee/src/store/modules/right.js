const state = {
  cur: [],
  total: []
}

const mutations = {
  click(state, payload) {
    state.cur = state.total.filter(item=>item.type==payload);
  },
  updateTotal(state, payload){
    state.total = payload;
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
