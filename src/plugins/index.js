import Vue from "vue";

import Multiselect from "vue-multiselect";
import VueShowdown from "vue-showdown";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: "animated"
});

Vue.use({
  Multiselect,
  VueShowdown
});
