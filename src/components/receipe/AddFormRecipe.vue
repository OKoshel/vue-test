<template>
    <div>
        <h2 class="mb-3 text-center">Add recipe</h2>
        <div class="d-flex flex-column justify-content-center align-items-center">
            <form @submit.prevent>
                <div >
                    <my-input class="mb-4 w-500" placeholder="Title" v-model="form.title" />
                    <my-input class="w-500" placeholder="Description" v-model="form.description" />
                </div>
            </form>
                <div class="mt-3 d-flex justify-content-between w-500">
                    <my-button type="submit" @click="submitForm">Add recipe</my-button>
                    <my-button >{{ showForm ? 'Remove form' : 'Show form' }}</my-button>
                </div>
        </div>
    </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
import { useToggle } from "@/composition/toggle.js";

export default {
    components: { MyButton, MyInput },
    // props: {
    //     onAdd: {
    //         type: Function,
    //         required: true,
    //     },
    // },
    data() {
        return {
            form: {
                title: "",
                description: "",
                id: Date.now()
            },
        };
    },
    methods: {
        submitForm() {
            if (this.form.title.trim() === "" || this.form.description.trim() === "") {
                return;
            }

            this.$emit("addRecipe", this.form);

            this.form = {
                title: "",
                description: "",
            };
        },

    },
    setup(){
        return{
            ...useToggle(),
        }
    }
};
</script>

<style lang="sass">
.w-500
    width: 500px

</style>

