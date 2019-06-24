import { interview } from '../../api/interviews.js';

export const interviewModule = {
    state: {
        interviewItem: {},
        interviews: {},
        nextUrl:''
    },

    getters: {
        fetchedInterviews(state) {
            return state.interviews;
        },

        fetchedInterviewItem(state) {
            return state.interviewItem;
        }
    },

    mutations: {
        SET_INTERVIEW_ITEM(state, interviewData) {
            state.interviewItem = interviewData;
        },

        SET_INTERVIEWS(state, interviewDatas) {
            state.interviews = interviewDatas;
        },

        ADD_MORE_INTERVIEWS(state, interviewDatas) {
            state.interviews = state.interviews.concat(interviewDatas);
        },

        SET_NEXT_URL(state, url){
            state.nextUrl = url
        }
    },

    actions: {
        FETCH_INTERVIEWS({ commit }) {
            return interview.fetchInterviews()
                .then(({ data }) => {
                    commit('SET_INTERVIEWS', data.datas);
                    commit('SET_NEXT_URL', data.links.next);
                })
                .catch(err => {
                    console.log(err);
                });
        },

        FETCH_INTERVIEW_BY_ID({ commit }, { id }) {
            return interview.fetchInterviewById(id)
                .then(({ data }) => {
                    console.log(data);
                    commit('SET_INTERVIEW_ITEM', data);
                })
                .catch(err => {
                    console.log(err);
                });
        },

        FETCH_SPECIFIC_INTERVIEWS({ commit }, { tag }) {
            return interview.fetchSpecificInterviews(tag)
                .then(({ data }) => {
                    console.log(`특정 태그! ${tag}: `, data.datas);
                    commit('SET_INTERVIEWS', data.datas);
                })
                .catch(err => {
                    console.log(err);
                });
        },

        FETCH_MORE_INTERVIEWS({ commit }, nextUrl) {
            return interview.fetchMoreInterviews(nextUrl)
                .then(({ data }) => {
                    console.log('fetchMore:', data);
                    commit('ADD_MORE_INTERVIEWS', data.datas);
                    commit('SET_NEXT_URL', data.links.next);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
}