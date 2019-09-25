<template>
	<div class="interview_wrap">
		<section class="interview_section">
			<h2 class="section_title">인터뷰</h2>
			<div class="interview_container">
				<div class="tags_dropdown">
					<label class="typo__label">Tags</label>
					<multiselect
						v-model="value"
						:options="tags"
						:searchable="true"
						:close-on-select="true"
						:show-labels="false"
						placeholder="Pick a tag"
						@select="asyncFind"
					></multiselect>
				</div>
				<interview-list :interviews="interviews"></interview-list>
				<infinite-loading
					:identifier="infiniteId"
					@infinite="loadMore"
				></infinite-loading>
			</div>
		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Multiselect from 'vue-multiselect';
import bus from '../utils/bus.js';
import InterviewList from '../components/interviewView/InterviewList.vue';

export default {
	components: {
		InterviewList,
		Multiselect,
	},

	data() {
		return { infiniteId: +new Date(), value: '' };
	},

	computed: {
		...mapGetters({
			interviews: 'fetchedInterviews',
			tags: 'fetchedTags',
		}),
	},

	created() {
		bus.$on('clickTag', this.changeType);
		this.$store.dispatch('FETCH_INTERVIEWS');
		this.$store.dispatch('FETCH_TAGS');
	},

	updated() {
		bus.$emit('execute:highlight');
	},

	beforeDestroy() {
		bus.$off('clickTag', this.changeType);
	},

	methods: {
		asyncFind(actionName) {
			this.$store.dispatch('UPDATE_VALUE_ACTION', { value: actionName });
			this.changeType();
		},

		loadMore($state) {
			setTimeout(() => {
				const nextUrl = this.$store.state.interviewModule.nextUrl;

				this.$store.dispatch('FETCH_MORE_INTERVIEWS', nextUrl).then(() => {
					if (nextUrl != null) {
						$state.loaded();
					} else if (nextUrl === null) {
						$state.complete();
					}
				});
			}, 700);
		},

		changeType(tag) {
			window.scrollTo(0, 0);
			this.value = tag;
			this.infiniteId += 1;
		},
	},
};
</script>

<style>
.multiselect {
	width: 250px;
	margin-bottom: 50px;
}
.interview_section {
	background-color: #e2f6fe;
}
.section_title {
	display: none;
}

.interview_container {
	padding: 30px;
}
</style>
