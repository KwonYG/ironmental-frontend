<template>
  <mdb-card class="question_card">
      <div class="card_header">
          <div class="stamp_container">
              <img src="../../assets/envelopeGray.svg">
          </div>
          <div class="tag_container">
              <mdb-badge class="tag_badge" pill color="indigo" v-for="tag in interview.tags" :key=interview.tag>{{ tag }}</mdb-badge>
              <!-- <mdb-badge pill color="purple">CSS</mdb-badge>
              <mdb-badge pill color="orange">JavaScript</mdb-badge> -->
          </div>
      </div>
    <mdb-card-body>
      <mdb-card-title class="interview_title"><router-link :to="`/interviews/${interview.id}`">{{ interview.question}}</router-link></mdb-card-title>
        <mdb-btn color="info-color" @click="show = !show">ANSWER >></mdb-btn>
        <mdb-card-text>
            <p v-if="show">
                {{ interview.answer }}
            </p>
        </mdb-card-text>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import { mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbBadge } from 'mdbvue';
export default {
    components: {
        mdbCard,
        mdbCardBody,
        mdbCardTitle,
        mdbCardText,
        mdbBtn,
        mdbBadge
    },
    props: {
        interview: Object,
    },
    data(){
        return{
            show: false,
            tagColor:{},
        }
    }
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
</style>
