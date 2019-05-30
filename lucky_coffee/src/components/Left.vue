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
  methods: {
    click(id){
      this.$store.commit('click', id);
    }
  }
}
</script>

<style>
  .active{
    color: brown;
  }
</style>
