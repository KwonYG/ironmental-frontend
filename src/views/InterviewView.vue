<template>
<div class="interview_wrap">
    <section class="interview_section">
        <div class="interview_container">
            <question-list></question-list>
        </div>
    </section>
</div>
    
</template>

<script>
import QuestionList from "../components/interviewView/QuestionList.vue";

export default {
    components:{
        QuestionList,
    }
}
</script>

<style>
.interview_section{
    min-height: 800px;
    background-color: #E2F6FE;
}
.interview_container{
    padding:30px;
}
</style>
