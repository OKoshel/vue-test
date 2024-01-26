<template>
    <form class="d-flex flex-column align-items-center"  @submit.prevent="submit">
        <div class="mb-4">
            <my-input
                    placeholder="Add todo title"
                    class="mb-4 w-500"
                    v-model="todo.title"
            />

        </div>
        <button type="submit"  class="btn btn-success">Add Todo</button>
    </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";

export default {
    components: {MyInput},

    data(){
        return{
            todo: {
                title: '',
                completed: false
            }
        }
    },
    methods: {
        submit(){

            const newTodo={
                id: Date.now(),
                title: this.todo.title,
                completed: false
            }
            this.$emit('updateForm', newTodo)
        }
    }

}
</script>

<style lang="scss" scoped>

</style>