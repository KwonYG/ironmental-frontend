<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
import Prism from 'prismjs'
import bus from './utils/bus.js'

export default {
  components:{
    NavBar,
    FooterBar
  },

  methods:{
    highlightCode(){
      console.log('app.vue 의 prism: ', Prism);
      Prism.highlightAll();
    }
  },

  created(){
    bus.$on('execute:highlight', this.highlightCode);
  },

  beforeDestroy(){
    bus.$off('execute:highlight', this.highlightCode);
  }
}
</script>
<style>
@import './../public/prism.css'; /* registed prism.css globaly*/

#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
