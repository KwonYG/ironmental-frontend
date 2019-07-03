<template>
  <mdb-card class="question_card">
      <div class="card_header">
          <div class="stamp_container">
              <img src="../../assets/envelopeGray.svg">
          </div>
          <div class="tag_container">
              <mdb-badge class="tag_badge" pill color="indigo" v-for="tag in interview.tags" :key="tag">{{ tag }}</mdb-badge>
          </div>
      </div>
    <mdb-card-body>
      <mdb-card-title class="interview_title"><router-link :to="`/interviews/${interview.id}`">{{ interview.question}}</router-link></mdb-card-title>
        <mdb-btn color="info-color" @click="show=!show">ANSWER >></mdb-btn>
        <div class="mark_down_body">
            <VueShowdown ref="answer" v-show="show" :markdown="`${interview.answer}`"/>
        </div>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import { VueShowdown } from 'vue-showdown' 
import { mdbCard, mdbCardBody, mdbCardTitle, mdbBtn, mdbBadge } from 'mdbvue';

export default {
    components: {
        mdbCard,
        mdbCardBody,
        mdbCardTitle,
        mdbBtn,
        mdbBadge,
        VueShowdown
    },

    props: {
        interview: Object,
    },
    
    data(){
        return{
            show: false,
            content:'',
            tagColor:{},
        }
    },
}
</script>
<style scoped>

.interview_title a{
    color: black;
}

.interview_title a:hover{
    text-decoration: underline;
}

.question_card{
    background-color: #F2F2F2;
}

.card_header{
    padding: 10px;
    display:flex;
}

.stamp_container img{
    margin-left:10px;
    width: 50px;
    height: 50px;
}

.tag_container{
    margin-left: 20px;
}

.tag_badge{
    margin: 0 2px;
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
