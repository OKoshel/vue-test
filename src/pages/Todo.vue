<template>
    <div>
        <h3 class="text-center mb-4">Todo List</h3>
        <todo-form @updateForm="updateDataForm"/>
        <div class="mt-4">
            <h3 v-if="loading">Loading...</h3>
            <div v-else>
                <div class="d-flex justify-content-end mb-4">
                    <div class="d-flex align-items-center gap-3">
                        <input type="checkbox" @change="selectAllCheckbox">
                        <div class="">Done All</div>
                    </div>
                </div>
                <todo-list :todos="todos" @deleteTodo="deleteTodo"/>
                <my-button @click="deleteAllDone">Delete select</my-button>
            </div>
        </div>
    </div>
</template>

<script>
import TodoForm from "@/components/todo/TodoForm.vue"
import TodoList from "@/components/todo/TodoList.vue"
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import MyButton from "@/components/UI/MyButton.vue";
export default {
    components: {MyButton, TodoForm, TodoList},
    computed: {
        ...mapGetters("todo", ["getAllTodos", 'getLoadingTodos']),
        ...mapState("todo", ["todos", "loading"]),
    },
    methods: {
        ...mapActions('todo', ['fetchTodos']),
        ...mapMutations('todo', ['addTodoToMassive', "deleteTodoFromMassive", 'checkedAllTodos', 'deleteAllDoneTodo']),

        updateDataForm(newTodo){
            this.addTodoToMassive(newTodo)
        },
        deleteTodo(todoId){
            this.deleteTodoFromMassive(todoId)
        },
        selectAllCheckbox(event) {
            const checked = event.target.checked;
            this.checkedAllTodos(checked)
        },
        deleteAllDone(){
            this.deleteAllDoneTodo()

        }

    },

    mounted() {
        this.fetchTodos()
    }


}
</script>

<style lang="scss" scoped>

</style>