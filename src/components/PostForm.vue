<template>
    <form @submit.prevent class="d-flex flex-column gap-3">
        <my-input
                v-focus
                v-model="post.name"
                placeholder="Title"/>
        <my-input
                v-model="post.body"
                placeholder="Body" />
<!--        <input-->
<!--            type="text"-->
<!--            placeholder="Title"-->
<!--            v-bind:value="post.name"-->
<!--            @input="post.name = $event.target.value"-->
<!--        >-->
<!--                <input-->
<!--                    type="text"-->
<!--                    placeholder="Title"-->
<!--                    v-model="post.name"-->
<!--                >-->
<!--        <input-->
<!--            type="text"-->
<!--            placeholder="Title"-->
<!--            v-model="post.body"-->
<!--        >-->

        <mu-button @click="createPost">Add Post</mu-button>
    </form>
</template>

<script>

import MyInput from "@/components/UI/MyInput.vue";
import MuButton from "@/components/UI/MyButton.vue";

export default {
    components: {MuButton, MyInput},

    data(){
        return{
            post:{
                name: '',
                body: ''
            }
        }

    },
    methods: {
        createPost(){
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }

    }
}
</script>

<style lang="sass" scoped>

.button-text
    font-size: 14px
    font-weight: 600
    color: white


</style>