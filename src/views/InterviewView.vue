<template>
  <div class="interview_wrap">
    <section class="interview_section">
      <h2 class="section_title">인터뷰</h2>
      <div class="interview_container">
        <question-list></question-list>
      </div>
    </section>
  </div>
</template>

<script>
import QuestionList from "../components/interviewView/QuestionList.vue";

export default {
  components: {
    QuestionList
  }
};
</script>

<style>
.interview_section {
  min-height: 800px;
  background-color: #e2f6fe;
}
.section_title {
  display: none;
}

.interview_container {
  padding: 30px;
}
</style>
