<template>
    <div>
        <h2 class="mb-3 text-center">Add recipe</h2>
        <div class="d-flex justify-content-center">
            <form @click.prevent="" >
                <div v-if="showForm">
                <my-input
                    class="mb-4 w-500"
                    placeholder="Title"
                    v-model="recipe.title"
                />
                <my-input
                    class="w-500"
                    placeholder="Description"
                    v-model="recipe.description"
                />
                </div>
                <div class="mt-3 d-flex justify-content-between w-500">
                    <my-button @click="addRecipe">Add recipe</my-button>
                    <my-button @click="removeForm">{{showForm ? 'Remove form' : "Show form"}}</my-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
    components: {MyButton, MyInput},
    data(){
        return{
            recipe:{
                title: '',
                description: '',
            },
            showForm: true

        }
    },
    methods: {
        removeForm(){
            this.showForm = !this.showForm
        },
        addRecipe(){
          this.recipe.id = Date.now()
            this.$emit('addRecipe', this.recipe)
            this.recipe={
              title: '',
                description: ''
            }

        }
    }

}
</script>

<style lang="sass" scoped>

.w-500
  width: 500px

</style>