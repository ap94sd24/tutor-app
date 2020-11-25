import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      tutors: [
        {
          id: "t1",
          firstName: "James",
          lastName: "Lee",
          areas: ["frontend", "backend", "database"],
          description:
            "I'm  James and I work as a full stack developer, creating web platform that ppl happy.",
          hourlyRate: 100,
        },
        {
          id: "t2",
          firstName: "John",
          lastName: "Doe",
          areas: ["frontend", "design"],
          description:
            "I'm John and I am a frontend developer that specializes in front end ui and responsive design.",
          hourlyRate: 80,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
