import Vue from "vue";

import Multiselect from "vue-multiselect";
import VueShowdown from "vue-showdown";
import InfiniteLoading from 'vue-infinite-loading';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: "animated"
});

Vue.use(InfiniteLoading, {
  props: {
    spinner: 'waveDots',
  },
});
Vue.use({
  Multiselect,
  VueShowdown
});
