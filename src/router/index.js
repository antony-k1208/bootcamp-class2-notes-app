import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotesDetail from "../views/NotesDetail.vue";
import NewNote from "../views/NewNote.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/notes/create",
    name: "NewNote",
    component: NewNote,
  },
  {
    path: "/notes/:id",
    name: "NotesDetail",
    component: NotesDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
