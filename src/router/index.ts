import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import BlogPage from "../views/BlogPage.vue";

export const routes = [
    { path: '/', name: 'Главная', component: MainPage },
    { path: '/blog', name: 'Блог', component: BlogPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
