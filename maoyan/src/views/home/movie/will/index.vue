<template>
  <div>
    <section class="expect">
      <h2>近期最受期待</h2>
      <expect-list/>
    </section>
  </div>
</template>

<script>
import ExpectList from '@/components/expectList'
export default {
  components: {
    ExpectList
  }
}
</script>

<style lang="scss" scoped>
h2{
  text-align: left;
}
.expect{
  padding: .24rem .3rem;
}
</style>
