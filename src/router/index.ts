import GameView from "@/views/GameView.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import EnterGameView from "../views/EnterGameView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: EnterGameView,
  },
  {
    path: "/game",
    name: "game",
    component: GameView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
