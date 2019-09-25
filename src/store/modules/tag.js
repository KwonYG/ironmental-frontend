import { tags } from '../../api/tags.js';

export const tagModule = {
	state: {
		value: 'all',
		tags: ['all'],
	},

	getters: {
		fetchedTags(state) {
			return state.tags;
		},
	},

	mutations: {
		UPDATE_VALUE(state, valueData) {
			state.value = valueData;
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

		UPDATE_VALUE_ACTION({ commit, dispatch }, { value }) {
			commit('UPDATE_VALUE', value);
			dispatch('FETCH_SPECIFIC_INTERVIEWS', { tag: value });
		},
	},
};
