<template>

        <modal-window :show-form="showForm" :close-window="closeWindow">
            <template v-slot:header>
                <h3 class="text-center mb-0">Todo List</h3>
            </template>
            <template v-slot:text>
                <todo-form @updateForm="updateDataForm"/>
            </template>
        </modal-window>

        <my-button @click="toogle">Add todo</my-button>

        <div class="mt-4">
            <h3 v-if="loading">Loading...</h3>
            <div v-else>
                <div class="d-flex justify-content-between mb-4">
                    <div>
                        <my-input
                            type="search"
                            :model-value="searchInput"
                            @update:model-value="setSearchInput"
                            placeholder="Search by title"
                            />
                    </div>
                    <div class="d-flex align-items-center gap-3">
                        <input type="checkbox" @change="selectAllCheckbox">
                        <div class="">Done All</div>
                    </div>
                </div>
                <todo-list :todos="getTitleBySearchQuery" @deleteTodo="deleteTodo"/>
                <my-button @click="deleteAllDone">Delete select</my-button>
            </div>
        </div>

</template>

<script>
import TodoForm from "@/components/todo/TodoForm.vue"
import TodoList from "@/components/todo/TodoList.vue"
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import ModalWindow from "@/components/UI/ModalWindow.vue";
import {useToggle} from "@/composition/toggle.js";
export default {
    components: {ModalWindow, MyInput, MyButton, TodoForm, TodoList},

    computed: {
        ...mapGetters("todo", ["getAllTodos", 'getLoadingTodos', 'getTitleBySearchQuery']),
        ...mapState("todo", ["todos", "loading", 'searchInput']),

    },
    methods: {
        ...mapActions('todo', ['fetchTodos']),
        ...mapMutations('todo', ['addTodoToMassive', "deleteTodoFromMassive", 'checkedAllTodos', 'deleteAllDoneTodo', 'setSearchInput']),

        updateDataForm(newTodo){
            this.addTodoToMassive(newTodo)
            this.closeWindow()

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

        },

    },
    setup(){
        return{
            ...useToggle(),
        }
    },

    mounted() {
        this.fetchTodos()
    }


}
</script>

<style lang="scss" scoped>

</style>