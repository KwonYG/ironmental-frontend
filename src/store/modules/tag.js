import { tags } from '../../api/tags.js';

export const tagModule = {
    state: {
        tags:['all'],
    },

    getters: {
        fetchedTags(state){
            return state.tags;
        }
    },

    mutations: {
        SET_TAGS(state, tagDatas){
            state.tags = state.tags.concat(tagDatas);
        }
    },

    actions: {
        FETCH_TAGS({ commit }){
            return tags.fetchTags()
                        .then(({ data })=>{
                            commit('SET_TAGS',data.tags);
                        })
                        .catch(err=>{
                            console.log(err);
                        });
        }
    }
}
