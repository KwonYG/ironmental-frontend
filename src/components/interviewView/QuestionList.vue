<template>
<div class="question_list_container">
    <div class="tags_dropdown">
      <label class="typo__label">Select tag</label>
        <multiselect v-model="value" :options="tags" :searchable="false" :close-on-select="true" :show-labels="false" placeholder="Pick a tag"></multiselect>
      <pre class="language-json"><code>{{ value }}</code></pre>
    </div>
    <ul class="question_list">

        <div>    
            <li class="question_item" v-for="interview in interviews" :key=interview._id>
                <question-list-item :interview="interview"></question-list-item>
            </li>      
            <infinite-loading @infinite="infiniteHandler"></infinite-loading>
        </div>
    </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import QuestionListItem from './QuestionListItem.vue';
import Multiselect from 'vue-multiselect'


export default {
    data(){
        return{
            tag:'',
            offset:4,
            value: '',
            list:[]
        }
    },

    components:{
        QuestionListItem,
        Multiselect
    },

    created(){
        this.$store.dispatch('FETCH_INTERVIEWS');
        this.$store.dispatch('FETCH_TAGS');
    },

    computed:{
        ...mapGetters({
            interviews:'fetchedInterviews',
                tags:'fetchedTags'
            }),

    },

    watch:{
        value:function(){
            this.offset = 4;
            this.tag = this.value;
            this.list = [];
            this.$store.dispatch('FETCH_SPECIFIC_INTERVIEWS',{ tag: this.tag });
        }
    },

    methods:{
        infiniteHandler($state) {
            this.$store.dispatch('FETCH_MORE_INTERVIEWS', {tag: this.tag, offset: this.offset})
                        .then((data)=>{
                            console.log('data: ', data);
                            if (data.length) {
                                this.offset += 4;
                                this.list.push(...data);
                                $state.loaded();
                            } else {
                                $state.complete();
                            }
                        })
        },
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
