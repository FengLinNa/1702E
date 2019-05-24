<template>
  <ul>
     <li v-for="(item, index) in list" :key="index">
      <img :src="item.img">
      <div>
        <p>{{item.nm}}</p>
        <p>{{item.sc?'猫眼评分:'+item.sc:'暂无评分'}}</p>
        <p>{{item.star}}</p>
        <p>{{item.showInfo}}</p>
      </div>
      <button :class="item.globalReleased?'purchase':'pre'">{{item.globalReleased?'购票':'预售'}}</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    movieList: {
      type: Array,  // 要传递过来props的类型
      default: []   // 如果没传使用的默认值
    }
  },
  computed: {
    list(){
      let list = [...this.movieList];
      list.forEach(item=>{
        item.img = item.img.replace('w.h', '128.180')
      })
      return list;
    }
  }
}
</script>

<style lang="scss" scoped>
li{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .24rem .54rem .24rem .3rem;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  &:last-child{
    border: none;
  }
  img{
    width: 1.28rem;
  }
  button{
    width: .94rem;
    height: .54rem;
    border-radius: .06rem;
  }
}
div{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  // flex: 1;
  width: 4rem;
  box-sizing: border-box;
  padding-left: .2rem;
  height: 1.8rem;
  p{
    width: 100%;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  p:nth-child(1){
    font-size: .34rem;
    color: #333;
    font-weight: 700;
    padding-right: .01rem;
  }
  p:nth-child(2){
    font-size: .28rem;
    color: #777;
  }
  p:nth-child(3), p:nth-child(4){
    font-size: .26rem;
    color: #666;
  }
}
.purchase{
  color: #fff;
  background: #f03d37;
}
.pre{
  color: #fff;
  background: #3c9fe6;
}
</style>
