<template>
  <div class="wrap">
    <section>
      <div v-for="(item, index) in list" :key="index" @click="selectCity">
        <p>{{index}}</p>
        <ul>
          <li v-for="(value) in item" :key="value.id">{{value.nm}}</li>
        </ul>
      </div>
    </section>
    <section class="letters">
      <li v-for="(item) in letters" :key="item">{{item}}</li>
    </section>
  </div>
</template>

<script>
import {getCityList} from '@/api/index'
export default {
  name: 'City',
  data(){
    return {
      letters: [],
      list: {}
    }
  },
  methods: {
    selectCity(e){
      if (e.target.tagName == 'LI'){
        let city = e.target.innerText;
        // 本地存储
        window.localStorage.setItem('city', city);
        // 路由回跳
        this.$router.replace({name: 'Hot', params: {city}});
      }
    }
  },
  async created(){
    let data = await getCityList();
    // 把数据排序
    data.cts.sort((a, b)=>a.py[0].localeCompare(b.py[0]))

    // 获取首字母
    let letters = data.cts.map(item=>item.py[0].toUpperCase());
    // 字母去重
    letters = ['定位','热门'].concat([...new Set(letters)]);

    // 按照字母组装数据
    let list = {};
    data.cts.forEach(item=>{
      let letter = item.py[0].toUpperCase();
      if (list[letter]){
        list[letter].push(item);
      }else{
        list[letter] = [item];
      }
    })
    // 给数据排序

    this.letters = letters;
    this.list = list;
    console.log('data...', data, letters, list);
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  background: #ebebeb;
  text-align: left;
  height: 100%;
  overflow-y: scroll;
  color: #333;
}
p{
  font-size: .28rem;
  line-height: .6rem;
  padding-left: .5rem;
}
ul{
  background: #f5f5f5;
  margin-right: .4rem;
}
ul li{
  height: .88rem;
  line-height: .88rem;
  margin-left: .3rem;
  font-size: .28rem;
  border-bottom: 1px solid #c8c7cc;
}
li:last-child{
  border-bottom: none;
}
.letters{
  position: fixed;
  right: .2rem;
  top: 50%;
  transform: translateY(-50%);
  li{
    font-size: .24rem;
    height: 2.8vh;
    text-align: right;
  }
}
</style>
