import {createRouter, createWebHistory} from "vue-router";
import Posts from "@/pages/Posts.vue";
import Post from "@/pages/Post.vue";
import HomeStore from "@/pages/HomeStore.vue";
import PostsCompositionApi from "@/pages/PostsCompositionApi.vue";

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
    },
    {
        path: '/composition',
        component: PostsCompositionApi
    }

    ]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router