<template>
  <div class="home">
      <section>
        <router-view></router-view>
      </section>
      <footer>
        <router-link to="/home/movie" tag="div">
          <i class="iconfont icon-movie"></i>
          <span>电影</span>
        </router-link>
        <router-link to="/home/cinema" tag="div">
          <i class="iconfont icon-cinema"></i>
          <span>影院</span>
        </router-link>
        <router-link to="/home/my" tag="div">
          <i class="iconfont icon-my"></i>
          <span>我的</span>
        </router-link>
      </footer>
  </div>
</template>

<script>
import '@/assets/font/iconfont.css'

export default {

}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  footer{
    height: .97rem;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  footer div{
    display: flex;
    flex-direction: column;
    align-items: center;
    i{
      font-size: .5rem;
    }
    span{
      font-size: .24rem;
    }
  }
  footer div.router-link-active{
    color:#f03d37
  }
  section{
    flex: 1;
  }
}

</style>

