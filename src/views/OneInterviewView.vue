<template>
	<section class="one_interview_section">
		<h2 class="section_title">인터뷰 상세보기</h2>
		<div class="interview_container">
			<div class="section_intro">
				<div class="intro_title animated slideInDown">멘탈 +1</div>
				<p class="intro_content">어때요 도움이 되셨나요?</p>
			</div>
			<div class="content_box">
				<interview-card></interview-card>
			</div>
		</div>
	</section>
</template>

<script>
import InterviewCard from '../components/interviewView/InterviewCard.vue';

export default {
	name: 'oneInterview',
	components: {
		InterviewCard,
	},
};
</script>

<style scoped>
@import '../../public/prism.css';

label {
	margin: 0px;
}

.one_interview_section {
	background: linear-gradient(to bottom, #006ef0, #00e1f0);
	color: #fff;
	text-align: center;
}

.interview_container {
	min-height: 720px;
}

.section_title {
	display: none;
}

.section_intro .intro_title {
	padding-top: 100px;
	font-weight: 800;
	font-size: 28px;
}

.content_box {
	margin: 0 auto;
	padding: 30px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
	.interview_container {
		padding: 0;
	}
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}
</style>
