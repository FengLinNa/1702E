<template>
  <div>
    <button @click="changeCount('+')">+</button>
    <span>{{count}}</span>
    <button @click="changeCount('-')">-</button>
  </div>
</template>

<script>
export default {
  computed: {
    count(){
      return this.$store.state.index.count
    }
  },
  methods: {
    changeCount(type){
      // 组件内部触发一个mutation
      this.$store.commit('changeCount', type);
    }
  },
  mounted(){
    // 获取store里的数据
    console.log(this.$store);
  }
}
</script>
