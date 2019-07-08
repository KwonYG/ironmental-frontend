import Vue from "vue";
import Vuex from "vuex";

import { interviewModule } from "./modules/interview.js";
import { subModule } from "./modules/sub.js";
import { tagModule } from "./modules/tag.js";
import { authModule } from "./modules/auth.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    interviewModule,
    subModule,
    tagModule,
    authModule
  }
});
