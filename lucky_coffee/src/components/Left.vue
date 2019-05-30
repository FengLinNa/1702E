<template>
  <div>
    <li v-for="(item) in list" :key="item.id" @click="click(item.id)" :class="{active: item.id==curId}">{{item.item}}</li>
  </div>
</template>

<script>
export default {
  computed: {
    list(){
      return this.$store.state.left.list
    },
    curId(){
      return this.$store.state.left.curId
    }
  },
  created(){
    // 触发右边的click
    this.$store.commit('right/click', 1);
  },
  methods: {
    click(id){
      // 触发左边的click
      this.$store.commit('left/click', id);
      // 触发右边的click
      this.$store.commit('right/click', id);
    }
  }
}
</script>

<style>
  .active{
    color: brown;
  }
</style>
