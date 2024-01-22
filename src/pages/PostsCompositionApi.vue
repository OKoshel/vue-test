<template>
    <div>
        <add-form-recipe :onAdd="addRecipe" />
        <div class="d-flex justify-content-center mt-4">
            <recipe-list  :lists="lists" @select="selectRecipe" />
            <recipe-detail :recipe="current" @deleteRecipe="deleteItem" />
        </div>
    </div>
</template>

<script>
import AddFormRecipe from "@/components/receipe/AddFormRecipe.vue";
import RecipeList from "@/components/receipe/RecipeList.vue";
import RecipeDetail from "@/components/receipe/RecipeDetail.vue";
import {useRecipies} from "@/composition/recipies.js";

export default {
    components: {RecipeDetail, RecipeList, AddFormRecipe},

    setup(){

        return{
          ...useRecipies()

        }
    }


}
</script>


<style lang="scss" scoped>

</style>