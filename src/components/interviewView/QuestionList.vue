<template>
<div class="question_list_container">
    <drop-down></drop-down>
    <ul class="question_list">

        <div>    
            <li class="question_item" v-for="interview in interviews" :key=interview._id>
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
    },

    computed:{
        ...mapGetters({
            interviews:'fetchedInterviews',
            }),
    },
    
    methods:{

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
