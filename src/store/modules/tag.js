import { tags } from '../../api/tags.js';

export const tagModule = {
	state: {
		selectedTag: 'all',
		tags: ['all'],
	},

	getters: {
		fetchedTags(state) {
			return state.tags;
		},
	},

	mutations: {
		UPDATE_SELECTED_TAG(state, selectedTagData) {
			state.selectedTag = selectedTagData;
		},

		SET_TAGS(state, tagDatas) {
			state.tags = ['all'].concat(tagDatas);
		},
	},

	actions: {
		FETCH_TAGS({ commit }) {
			return tags
				.fetchTags()
				.then(({ data }) => {
					commit('SET_TAGS', data.tags);
				})
				.catch(err => {
					console.log(err);
				});
		},

		UPDATE_SELECTED_TAG({ commit, dispatch }, { value }) {
			commit('UPDATE_SELECTED_TAG', value);
			dispatch('FETCH_SPECIFIC_INTERVIEWS', { tag: value });
		},
	},
};
