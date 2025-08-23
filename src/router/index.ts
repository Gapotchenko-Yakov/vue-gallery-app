import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import GalleryPage from "../views/GalleryPage.vue";

export const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/gallery', name: 'Gallery', component: GalleryPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
