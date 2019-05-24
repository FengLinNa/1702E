<template>
  <div id="app">
    <keep-alive include="City">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  font-size: calc(100/750*100vw)
}
body{
  font-size: 12px;
}
*{
  margin: 0;
  padding: 0;
  border: none;
}
li,ul{
  list-style: none;
}
html,body,#app, #app>div{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
