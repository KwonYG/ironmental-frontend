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
        QuestionCard
    }
};
</script>

<style scoped>

label{
    margin: 0px;
}
.one_interview_section{
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    /* background-color:#AF2030; */
    
    /* background: linear-gradient( to bottom, #0174E8, #24B3B5 ); */
    background: linear-gradient( to bottom, #006EF0, #00E1F0 );
    color:#FFF;
    text-align: center;
    /* 라운드 경계선 */
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%
    /* clip-path: polygon(
        0 0,
        100% 0,
        100% 100%,
        0 calc(100% - 5vw)
    ); */
}
.section_intro .intro_title{
    margin-top:100px;
    font-weight: 800;
}
.content_box{
    margin: 50px auto;
    padding: 30px;
}

</style>
