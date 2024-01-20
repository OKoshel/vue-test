<template>
    <div v-if="posts.length>0" class="mt-4">
        <h4 class="mb-4">Post List:</h4>
        <post-item
            v-for="post in posts"
            :post="post"
            @delete="$emit('delete', post)"
            :key="post.id"
        />
    </div>
    <h2 v-else class="mt-4" style="color: red"> Post list is empty</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
    components: {PostItem},
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    methods: {

    }

}
</script>

<style lang="scss" scoped>

</style>