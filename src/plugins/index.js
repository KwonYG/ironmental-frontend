import Vue from 'vue';

import Multiselect from 'vue-multiselect';
import swal from 'sweetalert';
import VueScrollTo from 'vue-scrollto';
import infiniteScroll from 'vue-infinite-scroll'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
});
Vue.use({
    Multiselect,
    swal,
    VueScrollTo,
    infiniteScroll
});