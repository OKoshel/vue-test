<template>
    <div>
        <add-form-recipe @addRecipe="addRecipe" />
        <div class="d-flex justify-content-center mt-4">
            <recipe-list  :lists="lists" @select="selectRecipe" />
            <receipe-detail :recipe="current" @deleteRecipe="deleteItem" />
        </div>
    </div>
</template>

<script>
import AddFormRecipe from "@/components/receipe/AddFormRecipe.vue";
import RecipeList from "@/components/receipe/RecipeList.vue";
import ReceipeDetail from "@/components/receipe/ReceipeDetail.vue";

export default {
    components: {ReceipeDetail, RecipeList, AddFormRecipe},
    data(){
        return{
            lists: [],
            current: null
        }
    },
    methods: {
        addRecipe(newItem){
            this.lists.push(newItem)
        },
        selectRecipe(id){
         this.current =  this.lists.find((elem) => elem.id === id)

        },
        deleteItem(id){
            this.current = null
            this.lists = this.lists.filter((elem) => elem.id !== id)

        }

    }

}
</script>


<style lang="scss" scoped>

</style>