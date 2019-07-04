import { sub } from "../../api/sub.js";

export const subModule = {
  state: {
    subResult: {
      isSub: false,
      isCertify: false
    }
  },

  getters: {
    fetchedSubResult(state) {
      return state.subResult;
    }
  },

  mutations: {
    SET_SUB_RESULT(state, subData) {
      state.subResult = subData;
    }
  },

  actions: {
    POST_SUBSCRIPTION({ commit }, { email }) {
      return sub
        .postRequestToSub({ email })
        .then(({ data }) => {
          commit("SET_SUB_RESULT", data);
        })
        .catch(err => {
        });
    }
  }
};
