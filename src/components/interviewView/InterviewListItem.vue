<template>
	<mdb-card class="question_card">
		<div class="card_header">
			<div class="stamp_container">
				<img src="../../assets/envelopeGray.svg" alt="편지 봉투 사진" />
			</div>
			<div class="tag_container">
				<mdb-badge
					class="tag_badge"
					pill
					color="indigo"
					v-for="(tag, $index) in interview.tags"
					:key="$index"
					>{{ tag }}</mdb-badge
				>
			</div>
		</div>
		<mdb-card-body>
			<mdb-card-title class="interview_title">
				<router-link :to="`/interviews/${interview.id}`">{{
					interview.question
				}}</router-link>
			</mdb-card-title>
			<mdb-btn class="answer_btn" color="info-color" @click="show = !show">
				ANSWER
				<mdb-icon icon="angle-down" size="lg" alt="아랫방향 앵글 아이콘" />
			</mdb-btn>
			<div class="markdown-body">
				<VueShowdown v-show="show" :markdown="`${interview.answer}`" />
			</div>
		</mdb-card-body>
	</mdb-card>
</template>

<script>
import { VueShowdown } from 'vue-showdown';
import {
	mdbCard,
	mdbCardBody,
	mdbCardTitle,
	mdbBtn,
	mdbIcon,
	mdbBadge,
} from 'mdbvue';

export default {
	components: {
		mdbCard,
		mdbCardBody,
		mdbCardTitle,
		mdbBtn,
		mdbIcon,
		mdbBadge,
		VueShowdown,
	},

	props: {
		interview: Object,
	},

	data() {
		return {
			show: false,
			content: '',
			tagColors: ['indigo', 'purple', 'orange', 'green', 'pink', 'badge-light'],
			tags: [],
		};
	},

	created() {
		this.setTagColors();
	},

	methods: {
		setTagColors() {
			const tagDatas = this.interview.tags;
			const colorLength = this.tagColors.length;

			let index = 0;
			tagDatas.forEach(tag => {
				if (index === colorLength - 1) {
					index = 0;
				}

				this.tags.push({
					name: tag,
					color: this.tagColors[index],
				});

				index++;
			});
		},
	},
};
</script>
<style scoped>
@import url('../../../public/github-markdown.css');

.interview_title a {
	color: black;
}

.interview_title a:hover {
	text-decoration: underline;
}

.question_card {
	background-color: #f2f2f2;
}

.card_header {
	padding: 10px;
	display: flex;
}

.stamp_container img {
	margin-left: 10px;
	width: 50px;
	height: 50px;
}

.tag_container {
	margin-left: 20px;
}

.answer_btn {
	box-shadow: none;
	border: 1px solid #566270;
	border-radius: 5px;
}

.tag_badge {
	margin: 0 2px;
}

.markdown-body {
	margin-top: 15px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
	.question_item {
		margin: 30px 0;
	}
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
	.question_item {
		margin: 0;
	}
}
</style>
