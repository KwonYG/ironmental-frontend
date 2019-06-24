<template>
<div class="question_list_container">
    <drop-down></drop-down>
    <ul class="question_list">
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
            <li class="question_item" v-for="interview in interviews" :key=interview._id data-aos="slide-up" data-aos-offset="100" data-aos-easing="ease-out-back">
                <question-list-item :interview="interview"></question-list-item>
            </li>
        </div>
    </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

import DropDown from './DropDown.vue';
import QuestionListItem from './QuestionListItem.vue';

export default {
    components:{
        DropDown,
        QuestionListItem,
    },

    created(){
        this.$store.dispatch('FETCH_INTERVIEWS');
        // window.addEventListener('scroll', this.onScroll);
    },

    computed:{
        ...mapGetters({
            interviews:'fetchedInterviews',
            }),
    },

    destroyed() {
        // window.removeEventListener('scroll', this.onScroll);
    },

    methods:{
        loadMoreInterviews(){

        },

        // onScroll ({ target: { scrollTop, clientHeight, scrollHeight }}) {
        //     console.log('감지!')
        //     if (scrollTop + clientHeight >= scrollHeight) {
        //         console.log('아래다!')
        //     }
        // }
    }
}
</script>

<style>
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
</style>
