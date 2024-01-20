import Home from "@/pages/HomeStore.vue";
import {createRouter, createWebHistory} from "vue-router";
import Posts from "@/pages/Posts.vue";
import Post from "@/pages/Post.vue";
import HomeStore from "@/pages/HomeStore.vue";

const routes = [
    {
        path: '/',
        component: HomeStore
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/posts/:id',
        component: Post
    }
    ]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router