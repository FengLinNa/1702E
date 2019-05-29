// index模块里面的数据
const state = {
  count: 10000
}

// 数据同步改变, 改变state的唯一途径
const mutations = {
  // state表示模块内的状态，payload表示触发当前mutation携带的数据
  changeCount(state, payload){
    payload == '+'?state.count++: state.count--;
  }
}
export default {
  state,
  mutations
}
