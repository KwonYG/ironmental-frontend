import { sub } from '../../api/sub.js';

export const subModule = {
    state: {
        subResult: {
            isSub: false,
            isCertify: false,
        }
    },

    getters: {
        fetchedSubResult(state){
            return state.subResult;
        }
    },

    mutations: {
        SET_SUB_RESULT(state, subData){
            state.subResult = subData; // 결과가 객체로 날아오겠지?
        }
    },

    actions: {
        POST_SUBSCRIPTION({ commit }, { email }){
            return sub.postRequestToSub( { email } )
                        .then(({ data }) => {
                            console.log('success');
                            commit('SET_SUB_RESULT', data);
                        })
                        .catch(err => {
                            console.log(err);
                        });
        }
    }
}
