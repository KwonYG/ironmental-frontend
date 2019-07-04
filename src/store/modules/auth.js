import { auth } from "../../api/auth.js";

export const authModule = {
  state: {},

  getters: {},

  mutations: {},

  actions: {
    REQUEST_AUTH({ commit }, { confirmCode }) {
      return auth
        .RequestToAuth({ confirmCode })
        .then(res => {
        })
    }
  }
};
