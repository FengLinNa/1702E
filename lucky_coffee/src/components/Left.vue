<template>
  <div>
    <li v-for="(item) in list" :key="item.id" @click="click(item.id)" :class="{active: item.id==curId}">{{item.item}}</li>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  computed: {
    ...mapState({
      list: state=>state.left.list,
      curId: state=>state.left.curId
    }),
    // list(){
    //   return this.$store.state.left.list
    // },
    // curId(){
    //   return this.$store.state.left.curId
    // }
  },
  created(){

  },
  methods: {
    ...mapMutations({
      leftClick: 'left/click',
      rightClick: 'right/click'
    }),
    click(id){
      // 触发左边的click
      this.leftClick(id);
      // this.$store.commit('left/click', id);
      // 触发右边的click
      this.rightClick(id);
      // this.$store.commit('right/click', id);
    }
  }
}
</script>

<style>
  .active{
    color: brown;
  }
</style>
