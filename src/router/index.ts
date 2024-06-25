import GameView from "@/views/GameView.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import EnterGameView from "../views/EnterGameView.vue";
import WinView from "@/views/WinView.vue";

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
  {
    path: "/win",
    name: "win",
    component: WinView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
