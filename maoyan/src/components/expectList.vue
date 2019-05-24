<template>
  <div class="wrap">
    <ul>
      <li v-for="(item) in list" :key="item.id">
        <img :src="item.img" alt="">
        <p>{{item.nm}}</p>
        <p>{{item.comingTitle.split(' ')[0]}}</p>
        <span>{{`${item.wish}人想看`}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {getExpectList} from '@/api/index'
export default {
  data(){
    return {
      coming: []
    }
  },
  computed: {
    list(){
      let list = this.coming;
      list.forEach(item=>{
        item.img = item.img.replace('w.h', '170.230')
      })
      return list;
    }
  },
  async created(){
    let data = await getExpectList({offset: 0});
    console.log('data...', data);
    this.coming = data.coming;
  }
}
</script>


<style lang="scss" scoped>
.wrap{
  width: 100%;
  overflow-x: scroll;
}
ul{
  display: flex;
  li{
    position: relative;
    width: 1.7rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-right: .2rem;
  }
  span{
    position: absolute;
    width: 100%;
    text-align: center;
    top: 1.95rem;
    left: 0;
    color: #faaf00;
    font-weight: 600;
    font-size: .22rem;
  }
  img{
    // width: 100%;
    width: 1.7rem;
    height: 2.3rem;
  }
  p:nth-child(2){
    width: 100%;
    font-size: .26rem;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;
    font-weight: 700;
  }
  p:nth-child(3){
    font-size: .24rem;
    color: #999;
  }
}
</style>
