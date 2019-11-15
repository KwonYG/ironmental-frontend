<template>
	<div class="interview_wrap">
		<section class="interview_section">
			<h2 class="section_title">인터뷰</h2>
			<div class="interview_container">
				<div class="util_container">
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

					<div class="search_input">
						<mdbIcon icon="search" size="lg" />
						<input
							class="form-control mr-sm-2"
							type="text"
							v-model="searchWord"
							placeholder="Search"
							aria-label="Search"
						/>
					</div>
				</div>
				<div class="spinner_container">
					<spinner v-if="loading" class="loading_spinner"></spinner>
				</div>
				<div
					class="no_data"
					v-if="interviews.length === 0 && loading === false"
				>
					찾으시는 데이터가 없습니다.
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
import { mdbIcon } from 'mdbvue';
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
	},

	data() {
		return {
			loading: false,
			infiniteId: +new Date(),
			value: '',
			searchWord: '',
		};
	},

	computed: {
		...mapGetters({
			interviews: 'fetchedInterviews',
			tags: 'fetchedTags',
		}),
	},

	watch: {
		searchWord() {
			this.searchInterview(this.searchWord);
		},
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
			this.$store.dispatch('UPDATE_SELECTED_TAG', {
				value: actionName,
				searchWord: this.searchWord,
			});
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

		searchInterview(searchWord) {
			this.loading = true;
			this.$store
				.dispatch('FETCH_SPECIFIC_INTERVIEWS', {
					tag: this.value,
					searchWord,
				})
				.then(() => {
					this.loading = false;
				});
		},
	},
};
</script>

<style>
.util_container {
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 50px;
}

.util_container .multiselect {
	width: 250px;
	margin-bottom: 30px;
}

.util_container .search_input {
	margin-top: 4px;
}

.search_input i {
	margin-bottom: 10px;
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

.no_data {
	text-align: center;
}
@media (max-width: 575.98px) {
	.util_container {
		display: block;
		margin-bottom: 30px;
	}
}
</style>
