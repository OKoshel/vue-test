<template>
    <div class="recipe-list" >
        <div v-if="recipe">
            <h4>{{recipe.title}}</h4>
            <p>{{recipe.description}}</p>
            <my-button @click="this.$emit('deleteRecipe', recipe.id)">Delete</my-button>
        </div>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
    components: {MyButton},
    props: {
        recipe: {
            type: Object,
            required: true
        }

    },

}
</script>

<style lang="scss" scoped>

</style>