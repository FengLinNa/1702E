<template>
  <div class="wrap">
    <h2>猫眼电影</h2>
    <nav>
      <span>北京</span>
      <span @click="changeRouter('/home/movie/hot')" :class="{active: path=='/home/movie/hot'}">正在热映</span>
      <span @click="changeRouter('/home/movie/will')" :class="path=='/home/movie/will'?'active':''">即将上映</span>
      <i></i>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      path: '/home/movie/hot'
    }
  },
  methods: {
    changeRouter(path){
      this.path = path;
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &>div{
    flex: 1;
    overflow-y: scroll;
  }
}
h2{
  width: 100%;
  height: 1rem;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  font-size: .36rem;
  line-height: 1rem;
  font-weight: 400;
}
nav{
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 .3rem;
  height: 44px;
  justify-content: space-between;
  font-size: .3rem;
  border-bottom: 1px solid #e6e6e6;
  span:nth-child(2),span:nth-child(3){
    font-weight: 700;
    height: 100%;
    line-height: .88rem;
    border-bottom: 2px solid transparent;
    padding: 0 .1rem;
  }
}
nav span.active{
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
</style>

