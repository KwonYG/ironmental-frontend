<template>
	<div class="interview_wrap">
		<section class="interview_section">
			<h2 class="section_title">인터뷰</h2>
			<div class="interview_container">
				<interview-list></interview-list>
			</div>
		</section>
	</div>
</template>

<script>
import InterviewList from '../components/interviewView/InterviewList.vue';

export default {
	components: {
		InterviewList,
	},
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
