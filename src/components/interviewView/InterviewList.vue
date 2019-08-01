<template>
	<div class="question_list_container">
		<drop-down></drop-down>
		<ul class="question_list">
			<li
				class="question_item"
				v-for="(interview, $index) in interviews"
				:key="$index"
				data-aos="slide-up"
				data-aos-offset="100"
				data-aos-easing="ease-out-back"
			>
				<interview-list-item :interview="interview"></interview-list-item>
			</li>
			<infinite-loading
				:identifier="infiniteId"
				@infinite="loadMore"
			></infinite-loading>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

import bus from '../../utils/bus.js';
import DropDown from './DropDown.vue';
import InterviewListItem from './InterviewListItem.vue';

export default {
	components: {
		DropDown,
		InterviewListItem,
	},

	computed: {
		...mapGetters({
			interviews: 'fetchedInterviews',
			infiniteId: 'fetchedInfiniteId',
		}),
	},

	created() {
		this.$store.dispatch('FETCH_INTERVIEWS');
	},

	updated() {
		bus.$emit('execute:highlight');
	},

	methods: {
		loadMore($state) {
			const nextUrl = this.$store.state.interviewModule.nextUrl;

			this.$store.dispatch('FETCH_MORE_INTERVIEWS', nextUrl).then(() => {
				if (nextUrl != null) {
					$state.loaded();
				} else if (nextUrl === null) {
					$state.complete();
				}
			});
		},

		changeType() {
			this.infiniteId += 1;
		},
	},
};
</script>

<style scoped>
.question_list {
	list-style: none;
	padding: 0 14.3%;
	min-height: 720px;
}
.question_item {
	margin-bottom: 70px;
}

.tags_dropdown {
	width: 200px;
	height: 100px;
	color: #419fe6;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
	.question_list {
		padding: 0;
	}
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
	.question_list {
		padding: 0;
	}
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
