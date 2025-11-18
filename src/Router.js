import { createWebHistory, createRouter } from "vue-router";
import HomeCubos from "./components/HomeCubos.vue";
import MarcaCubos from "./components/MarcaCubos.vue";
import SeguridadCubos from "./components/SeguridadCubos.vue";
import PerfilComponent from "./components/PerfilComponent.vue";
import CubosCompras from "./components/CubosCompras.vue";
import InsertCompras from "./components/InsertCompras.vue";

const myRoutes = [
  {
    path: "",
    component: HomeCubos,
  },
  { path: "/marca/:marca", component: MarcaCubos },
  { path: "/seguridad", component: SeguridadCubos },
  { path: "/perfil", component: PerfilComponent },
  { path: "/compras", component: CubosCompras },
  { path: "/insertcompras", component: InsertCompras },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
