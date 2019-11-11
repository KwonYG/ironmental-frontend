<template>
	<div class="interview_wrap">
		<section class="interview_section">
			<h2 class="section_title">인터뷰</h2>
			<div class="interview_container">
				<div class="util_container">
					<div class="tags_dropdown">
						<label class="typo_label">Tags</label>
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

					<mdb-form-inline>
						<mdbIcon icon="search" size="lg" />
						<br />
						<input
							class="form-control mr-sm-2"
							type="text"
							placeholder="Search"
							aria-label="Search"
						/>
					</mdb-form-inline>
				</div>
				<div class="spinner_container">
					<spinner v-if="loading" class="loading_spinner"></spinner>
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
import { mdbIcon, mdbFormInline } from 'mdbvue';
import { mapGetters } from 'vuex';
import Multiselect from 'vue-multiselect';
import bus from '../utils/bus.js';
import Spinner from '../components/Spinner.vue';
import InterviewList from '../components/interviewView/InterviewList.vue';

export default {
	components: {
		Multiselect,
		Spinner,
		InterviewList,
		mdbIcon,
		mdbFormInline,
	},

	data() {
		return {
			loading: false,
			infiniteId: +new Date(),
			value: '',
		};
	},

	computed: {
		...mapGetters({
			interviews: 'fetchedInterviews',
			tags: 'fetchedTags',
		}),
	},

	created() {
		bus.$on('clickTag', this.changeType);
		this.loading = true;
		this.$store.dispatch('FETCH_INTERVIEWS').then(() => {
			this.loading = false;
		});
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
			this.$store.dispatch('UPDATE_SELECTED_TAG', { value: actionName });
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
.util_container {
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
}

/* 검색 인풋 */
.util_container .form-inline {
	1display: inline-block;
}

.util_container .form-inline i {
	1margin-bottom: 13px;
	margin-right: 10px;
}

.util_container .form-inline input {
	min-height: 40px;
}

.util_container .multiselect {
	width: 250px;
}

.spinner_container {
	text-align: center;
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
