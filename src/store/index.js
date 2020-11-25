import Vuex from "vuex";
import Vue from "vue";

import tutorsModule from "./modules/tutors/index.js";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    tutors: tutorsModule,
  },
});

export default store;
