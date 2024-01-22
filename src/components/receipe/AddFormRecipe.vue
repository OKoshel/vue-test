<template>
    <div>
        <h2 class="mb-3 text-center">Add recipe</h2>
        <div class="d-flex justify-content-center">
            <form @click.prevent="" >
                <div v-if="showForm">
                <my-input
                    class="mb-4 w-500"
                    placeholder="Title"
                    v-model="form.title"
                />
                <my-input
                    class="w-500"
                    placeholder="Description"
                    v-model="form.description"
                />
                </div>
                <div class="mt-3 d-flex justify-content-between w-500">
                    <my-button @click="addRecipe">Add recipe</my-button>
                    <my-button @click="toogle">{{showForm ? 'Remove form' : "Show form"}}</my-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {useToggle} from "@/composition/toggle.js";
import {useForm} from "@/composition/form.js";

export default {
    components: {MyButton, MyInput},
    props: {
        onAdd: {
            type: Function,
            required: true
        }

    },

    setup(props){

        // const {toogle, showForm: show} = useToggle() //другой вариант доставани ясвойств

        return{
          ...useForm(props),
            ...useToggle()
        }

    },

}
</script>

<style lang="sass" scoped>

.w-500
  width: 500px

</style>