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
    this.$store.dispatch('left/getData');
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
</style>
