<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import Prism from "prismjs";
import bus from "./utils/bus.js";

export default {
  components: {
    NavBar,
    FooterBar
  },

  methods: {
    highlightCode() {
      Prism.highlightAll();
    }
  },

  created() {
    bus.$on("execute:highlight", this.highlightCode);
  },

  beforeDestroy() {
    bus.$off("execute:highlight", this.highlightCode);
  }
};
</script>
<style>
#app {
  font-family: "Noto Sans KR", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.3rem;
    font-weight: bolder;
  }
  .content_box {
    font-size: 0.9rem;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.3rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
