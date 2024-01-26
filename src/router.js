import {createRouter, createWebHistory} from "vue-router";
import Posts from "@/pages/Posts.vue";
import Post from "@/pages/Post.vue";
import HomeStore from "@/pages/HomeStore.vue";
import PostsCompositionApi from "@/pages/PostsCompositionApi.vue";
import TodoList from "@/pages/Todo.vue";

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
    },
    {
        path: '/todos',
        component: TodoList

    }

    ]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router