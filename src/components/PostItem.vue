<template>
    <div class="post-item d-flex justify-content-between align-items-center">
        <div>
            <h3>{{post.name}}</h3>
            <h5>{{post.body}}</h5>
        </div>
        <div class="d-flex gap-3">
            <my-button @click="$router.push(`/posts/${post.id}`)">Open</my-button>
            <my-button @click="deletePost">Delete</my-button>
        </div>

    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";


export default {
    components: {MyButton},
    props: {
        post:{
            type: Object,
            required: true
        }
    },
    methods: {
        deletePost(post){
            this.$emit('delete', post)
        }
    }

}
</script>

<style lang="sass" scoped>

.post-item
    border: 1px solid darkgreen
    padding: 20px
    margin-bottom: 20px

</style>