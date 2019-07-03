<template>
    <section class="one_interview_section">
        <div class="interview_container">
            <div class="section_intro">
                <h2 class="intro_title animated slideInDown">
                    멘탈 +1
                </h2>
                <p class="intro_content">어때요 도움이 되셨나요?</p>
            </div>
            <div class="content_box">
                <question-card></question-card>
            </div>
        </div>
    </section>
</template>

<script>
import QuestionCard from '../components/interviewView/QuestionCard.vue';

export default {
name: "oneInterview",
    components: {
        QuestionCard,
    },
};
</script>

<style scoped>

label{
    margin: 0px;
}
.one_interview_section{
    background: linear-gradient( to bottom, #006EF0, #00E1F0 );
    color:#FFF;
    text-align: center;
}
.section_intro .intro_title{
    padding-top:100px;
    font-weight: 800;
}
.content_box{
    margin: 50px auto;
    padding: 30px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
    .interview_container{
        padding: 0;
    }
 }

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {  
  
}

</style>
