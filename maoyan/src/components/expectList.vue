<template>
  <div class="wrap" @scroll="scroll">
    <div ref="scrollEle">
      <li v-for="(item) in list" :key="item.id">
        <img :src="item.img" alt="">
        <p>{{item.nm}}</p>
        <p>{{item.comingTitle.split(' ')[0]}}</p>
        <span>{{`${item.wish}人想看`}}</span>
      </li>
    </div>
  </div>
</template>

<script>
import {getExpectList} from '@/api/index'
export default {
  data(){
    return {
      offset: 0,
      hasMore: true,
      flag: true,
      coming: []
    }
  },
  methods: {
    async scroll(e){
      // 判断是否还有分页数据
      if (!this.hasMore){
        return;
      }
      // 判断请求是否完成
      if (!this.flag){
        return;
      }
      let parentWidth = e.target.offsetWidth,
          scrollWidth = this.$refs.scrollEle.offsetWidth,
          scrollLeft = e.target.scrollLeft;

      // 判断是否滚动到最右边
      if (parentWidth + scrollLeft == scrollWidth){
        // 设置锁的状态，加锁
        this.flag = false;
        let data = await getExpectList({offset: this.offset});
        // 如果请求没数据，设置后续没有分页数组
        if (!data.coming.length){
          this.hasMore = false;
        }
        // 分页一定是合并数据不是覆盖数据
        this.coming = [...this.coming, ...data.coming]
        this.offset = this.coming.length;
        // 恢复锁的状态，解锁
        this.flag = true;
      }
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
    this.offset = this.coming.length;
  }
}
</script>


<style lang="scss" scoped>
.wrap{
  width: 100%;
  overflow-x: scroll;
}
div{
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
