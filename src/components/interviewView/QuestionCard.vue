<template>
<section class="interview_card_section">
    <mdb-card class="question_card">
        <mdb-card-header class="card_header" color="info-color">
            <mdb-badge class="tag_badge" v-for="tag in tags" :key="tag.name" pill :color="tag.color">{{ tag.name }}</mdb-badge>
        </mdb-card-header>
        <mdb-card-body>
            <h3>{{ interview.question }}</h3>
            <div class="interview_content" v-html="contentHtml">
                <!-- <VueShowdown ref="answer" :markdown="`${interview.answer}`"/> -->
            </div>
        </mdb-card-body>
    </mdb-card>
</section>
</template>

<script>
import { VueShowdown } from 'vue-showdown' 
import { mapGetters } from 'vuex';
import { mdbCard, mdbCardBody, mdbCardHeader, mdbCardTitle, mdbBadge } from 'mdbvue';
import bus from '../../utils/bus.js';
import showdown from 'showdown';

export default {
    name: 'QuestionCard',
    components: {
        mdbCard,
        mdbCardBody,
        mdbCardHeader,
        mdbCardTitle,
        mdbBadge,
        VueShowdown,
    },
    
    data(){
        return {
            loadingStatus: false,
            contentHtml: '',
            tagColors:["indigo", "purple", "orange", "green", "pink", "badge-light"],
            tags:[],
        }  
    },

    computed:{
        ...mapGetters({
            interview: 'fetchedInterviewItem'
        })
    },

    created(){
        const converter = new showdown.Converter();
        const text = this.interview.answer;
        const html = converter.makeHtml(text);

        this.contentHtml = html;
    },

    methods:{
        setTagColors(){
            const tagDatas = this.interview.tags;
            const colorLength = this.tagColors.length;
            
            let index = 0;
            tagDatas.forEach(tag => {
                if(index === colorLength - 1){
                    index = 0;
                }

                this.tags.push({
                    name: tag,
                    color: this.tagColors[index],
                })

                index++;
            })
        }
    },

    mounted(){
        bus.$emit('execute:highlight');
        this.setTagColors();
    },
}
</script>

<style scoped>
.question_card{
    width:100%;
    border-radius: 30px;
    color:black;
}

.card-header:first-child{
    border-radius: 30px
}

.interview_content{
    text-align: left;
}

.interview_content h1, .interview_content h2, .interview_content h3, .interview_content h4{
    font-size: 5rem;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 

}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {  
    .question_item{
        margin: 0;
    }
}

</style>
