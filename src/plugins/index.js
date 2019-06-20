import Vue from 'vue';

import Multiselect from 'vue-multiselect';
import infiniteScroll from 'vue-infinite-scroll';
import swal from 'sweetalert';
import InfiniteLoading from 'vue-infinite-loading';
import VueScrollTo from 'vue-scrollto';

Vue.use(InfiniteLoading, { /* options */ });
Vue.use({
    Multiselect,
    infiniteScroll,
    swal,
    VueScrollTo
});