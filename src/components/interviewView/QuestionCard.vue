<template>
<div>
    <mdb-card class="question_card">
        <mdb-card-header class="card_header" color="info-color">
            <!-- badge는 v-for와 v-if문으로 해결-->
            <mdb-badge pill color="indigo">HTML</mdb-badge>
            <mdb-badge pill color="purple">CSS</mdb-badge>
            <mdb-badge pill color="orange">JavaScript</mdb-badge>
        </mdb-card-header>
        <mdb-card-body>
            <mdb-card-title>{{ interview.question }}</mdb-card-title>
            <div class="interview_content" v-html="contentHtml">
                <!-- <VueShowdown ref="answer" :markdown="`${interview.answer}`"/> -->
            </div>
        </mdb-card-body>
    </mdb-card>
</div>
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

    mounted(){
        bus.$emit('execute:highlight');
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

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
    h1, h4{
        color: red;
    }

}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {  
    .question_item{
        margin: 0;
    }
}

</style>
