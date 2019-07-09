import { sub } from "../../api/sub.js";

export const subModule = {
  state: {
    subResult: {
      isSub: false,
      isCertify: false,
      message: "",
      userState: "",
      alertType: ""
    }
  },

  getters: {
    fetchedSubResult(state) {
      return state.subResult;
    }
  },

  mutations: {
    SET_SUB_RESULT(state, subData) {
      if (subData.isSub === true && subData.isCertify === true) {
        subData.userState = "구독 중";
        subData.alertType = "success";
      } else if (subData.isCertify === false && subData.isSub === true) {
        subData.userState = "미인증 구독자";
        subData.alertType = "error";
      } else if (subData.isCertify === false) {
        subData.userState = "구독 신청 완료!";
        subData.alertType = "success";
      }

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
        .catch(err => {});
    }
  }
};
