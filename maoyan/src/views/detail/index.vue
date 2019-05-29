<template>
  <div>

  </div>
</template>


<script>
import {getMovieDetail} from "@/api/index";
export default {
  data(){
    return {

    }
  },
  async created(){
    let data = await getMovieDetail(this.$route.params.id);
    console.log('movie detail...', data);
  }
}
</script>
