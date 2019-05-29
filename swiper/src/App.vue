<template>
  <div id="app">
    <p>当前最热门的五大网游</p>
    <p>
      <span v-for="(item, index) in list" :key="item" :class="cur==index?'active':''" @click="change(index)">{{item}}</span>
    </p>
    <Swiper :cur="cur" :change="change"/>
  </div>
</template>

<script>
import Swiper from './components/Swiper'

export default {
  name: 'App',
  data(){
    return {
      cur: 0,
      list: ['英雄联盟','守望先锋','穿越火线','绝地求生','贪玩蓝月']
    }
  },
  components: {
    Swiper
  },
  methods: {
    change(cur){
      this.cur = cur;
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
ul,li{
  width: 100%;
}
img{
  width: 100%;
}
.active{
  color: lightcoral;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
