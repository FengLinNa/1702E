<template>
  <div>
    <li v-for="(item) in list" :key="item.id" @click="click(item.id)" :class="{active: item.id==curId}">
      <img :src="item.img" alt="">
      <div>
        <p>{{item.title}}</p>
        <p>{{item.text}}</p>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  computed: {
    list(){
      return this.$store.state.right.cur
    }
  }
}
</script>
