<template>
  <div>
    <movie-list :movieList="movieList"></movie-list>
  </div>
</template>

<script>
import {getHotList} from '@/api'
import MovieList from '@/components/movieList'

export default {
  data(){
    return {
      movieList: []
    }
  },
  components: {
    MovieList
  },
  async created(){
    let data = await getHotList();
    console.log('data...', data);
    this.movieList = data.movieList;
  }
}
</script>
