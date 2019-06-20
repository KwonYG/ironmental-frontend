<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
  components:{
    NavBar
  }
}
</script>
<style>

#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
