import { interview } from '../../api/interviews.js';

export const interviewModule = {
	state: {
		interviewItem: {},
		interviews: [],
		nextUrl: '',
	},

	getters: {
		fetchedInterviews(state) {
			return state.interviews;
		},

		fetchedInterviewItem(state) {
			return state.interviewItem;
		},
	},

	mutations: {
		SET_INTERVIEW_ITEM(state, interviewData) {
			state.interviewItem = interviewData;
		},

		SET_INTERVIEWS(state, interviewDatas) {
			// state.interviews = interviewDatas;
			state.interviews = interviewDatas.datas;

			state.nextUrl = interviewDatas.links.next;
		},

		ADD_MORE_INTERVIEWS(state, interviewDatas) {
			state.interviews = state.interviews.concat(interviewDatas.datas);
			state.nextUrl = interviewDatas.links.next;
		},

		SET_NEXT_URL(state, url) {
			state.nextUrl = url;
		},

		SET_INFINITE_ID(state) {
			state.infiniteId += 1;
		},
	},

	actions: {
		FETCH_INTERVIEWS({ commit }) {
			return interview
				.fetchInterviews()
				.then(({ data }) => {
					// commit 두번 쓰지말고 한번 쓰게 로직변경해보기

					commit('SET_INTERVIEWS', data);
					// commit('SET_INTERVIEWS', data.datas);
					// commit('SET_NEXT_URL', data.links.next);
				})
				.catch(err => {});
		},

		FETCH_INTERVIEW_BY_ID({ commit }, { id }) {
			return interview.fetchInterviewById(id).then(({ data }) => {
				commit('SET_INTERVIEW_ITEM', data);
			});
		},

		FETCH_SPECIFIC_INTERVIEWS({ commit }, { tag }) {
			return interview
				.fetchSpecificInterviews(tag)
				.then(({ data }) => {
					commit('SET_INTERVIEWS', data);
				})
				.catch(err => {});
		},

		FETCH_MORE_INTERVIEWS({ commit }, nextUrl) {
			return interview
				.fetchMoreInterviews(nextUrl)
				.then(({ data }) => {
					commit('ADD_MORE_INTERVIEWS', data);
				})
				.catch(err => {});
		},
	},
};
