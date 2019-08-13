<template>
	<section class="interview_card_section">
		<mdb-card class="question_card">
			<mdb-card-header class="card_header" color="info-color">
				<mdb-badge
					class="tag_badge"
					v-for="tag in interview.tags"
					:key="tag.name"
					pill
					color="indigo"
					>{{ tag }}</mdb-badge
				>
			</mdb-card-header>
			<mdb-card-body>
				<h3 class="interview_title">{{ interview.question }}</h3>
				<div class="interview_content">
					<div class="markdown-body">
						<VueShowdown ref="answer" :markdown="interview.answer" />
					</div>
				</div>
			</mdb-card-body>
		</mdb-card>
	</section>
</template>

<script>
import { VueShowdown } from 'vue-showdown';
import { mapGetters } from 'vuex';
import { mdbCard, mdbCardBody, mdbCardHeader, mdbBadge } from 'mdbvue';
import bus from '../../utils/bus.js';

export default {
	name: 'QuestionCard',
	components: {
		mdbCard,
		mdbCardBody,
		mdbCardHeader,
		mdbBadge,
		VueShowdown,
	},

	data() {
		return {
			loadingStatus: false,
			contentHtml: '',
		};
	},

	computed: {
		...mapGetters({
			interview: 'fetchedInterviewItem',
		}),
	},

	mounted() {
		bus.$emit('execute:highlight');
	},
};
</script>

<style scoped>
@import url('../../../public/github-markdown.css');

.question_card {
	width: 100%;
	border-radius: 30px;
	color: black;
}

.card-header:first-child {
	border-radius: 30px;
}

.interview_title {
	margin-bottom: 30px;
}

.interview_content {
	text-align: left;
}

.markdown-body {
	font-family: 'Noto Sans KR', sans-serif;
	padding: 0 30px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
	.markdown-body {
		padding: 0 5px;
	}
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
	.question_item {
		margin: 0;
	}
}
</style>
