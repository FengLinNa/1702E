<template>
  <div id="app">
    <Left/>
    <Right/>
  </div>
</template>

<script>
import Left from './components/Left';
import Right from './components/Right';
export default {
  name: 'app',
  components: {
    Left,
    Right
  },
  created(){
    // 提交action获取数据
    this.$store.dispatch('left/getData').then(res=>{
       // 触发右边的click第一项
      this.$store.commit('right/click', 1);
    })
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
</style>
