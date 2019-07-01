import Vue from 'vue';

import Multiselect from 'vue-multiselect';
import swal from 'sweetalert';
import VueScrollTo from 'vue-scrollto';
import VueShowdown from 'vue-showdown';
import Prism from 'prismjs';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
});
Vue.use({
    Prism,
    Multiselect,
    swal,
    VueScrollTo,
    VueShowdown
});