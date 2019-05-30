const state = {
  list: [{
      "id": "1",
      "item": "大师咖啡"
    },
    {
      "id": "2",
      "item": "零度拿铁"
    }, {
      "id": "3",
      "item": "纳瑞冰"
    }, {
      "id": "4",
      "item": "经典饮品"

    }, {
      "id": "5",
      "item": "健康轻饮"
    }, {
      "id": "6",
      "item": "鲜榨果蔬汁"
    }
  ],
  curId: 1
}

const mutations = {
  click(state, payload){
    state.curId = payload
  }
}

export default {
  state,
  mutations
}
