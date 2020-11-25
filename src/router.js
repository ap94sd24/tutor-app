import TutorDetail from "./pages/tutors/TutorDetail.vue";
import TutorsList from "./pages/tutors/TutorsList.vue";
import TutorsRegistration from "./pages/tutors/TutorsRegistration.vue";
import ContactTutor from "./pages/questions/ContactTutor.vue";
import QuestionsReceived from "./pages/questions/QuestionsReceived.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", redirect: "/tutors" },
  { path: "/tutors", component: TutorsList },
  {
    path: "/tutors/:id",
    component: TutorDetail,
    children: [{ path: "contact", component: ContactTutor }],
  },
  { path: "/register", component: TutorsRegistration },
  { path: "/contact", component: QuestionsReceived },
  { path: "/:notFound(.*)", component: NotFound },
];

export default routes;
