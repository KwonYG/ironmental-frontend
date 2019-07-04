<template>
<div class="question_list_container">
    <drop-down></drop-down>
    <ul class="question_list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
        <li class="question_item" v-for="interview in interviews" :key=interview._id data-aos="slide-up" data-aos-offset="100" data-aos-easing="ease-out-back">
            <question-list-item :interview="interview"></question-list-item>
        </li>
    </ul>
    <spinner v-if="isLoading"></spinner>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import infiniteScroll from 'vue-infinite-scroll'
import bus from '../../utils/bus.js';
import DropDown from './DropDown.vue';
import QuestionListItem from './QuestionListItem.vue';
import Spinner from '../Spinner.vue';

export default {
    components:{
        DropDown,
        QuestionListItem,
        Spinner
    },

    directives: {
        infiniteScroll
    },

    data() {
        return{
            limit: 4,
            busy: false,
            isLoading: true,
        }
    },

    computed:{
        ...mapGetters({
            interviews:'fetchedInterviews',
            }),
    },

    created(){
        this.$store.dispatch('FETCH_INTERVIEWS').then(()=>{
                this.changeIsLoading()
        });
    },

    updated(){
        bus.$emit('execute:highlight');
    },

    methods:{
        changeIsLoading(){
            this.isLoading = !this.isLoading;
        },

        loadMore() {
            const nextUrl = this.$store.state.interviewModule.nextUrl;
            
            this.busy = true;
            this.changeIsLoading();
            this.$store.dispatch('FETCH_MORE_INTERVIEWS',nextUrl)
            .then(()=>{
                this.changeIsLoading();
            });
            this.busy = false;        
        }
    }
}
</script>

<style scoped>
.question_list{
    padding: 0;
    list-style: none;
}
.question_item{
    margin: 0 30px;
    margin-bottom: 70px;
}
.tags_dropdown{
    width:200px;
    height: 100px;
    color: #419FE6;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
    .question_item{
        margin: 30px 0;
    }
 }

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {  
    .question_item{
        margin: 0;
    }
}

</style>
