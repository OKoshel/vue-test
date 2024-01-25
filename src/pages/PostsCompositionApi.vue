<template>
    <div>
        <add-form-recipe @addRecipe="handleAddRecipe" />
        <div class="d-flex justify-content-center mt-4">
            <recipe-list :lists="lists" @select="setToCurrent"  />
            <recipe-detail :recipe="current" @deleteRecipe="deleteItem" />
        </div>
    </div>
</template>

<script>
import AddFormRecipe from "@/components/receipe/AddFormRecipe.vue";
import RecipeList from "@/components/receipe/RecipeList.vue";
import RecipeDetail from "@/components/receipe/RecipeDetail.vue";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
    components: { RecipeDetail, RecipeList, AddFormRecipe },

    computed: {
        ...mapGetters("recipe", ["getAllRecipes", "getCurrentRecipe"]),
        ...mapState("recipe", ["current", "lists"]),
    },

    methods: {
        ...mapMutations("recipe", ["addRecipe",  "deleteRecipe", "setAsCurrent"]),
        ...mapActions('recipe', ['fetchAllPosts']),
        handleAddRecipe(newRecipe) {
            this.addRecipe(newRecipe);
        },
        deleteItem(recipeId) {
            this.deleteRecipe(recipeId);
        },
        setToCurrent(id){
            this.setAsCurrent(id)
        }
    },
    mounted(){
        this.fetchAllPosts()
    }
};
</script>

<style lang="scss" scoped>

</style>
