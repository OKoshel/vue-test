<template>

        <modal-window :show-form="showForm" :close-window="closeWindow">
            <template v-slot:header>
                <h3 class="text-center mb-0">Todo List</h3>
            </template>
            <template v-slot:text>
                <todo-form @updateForm="updateDataForm"/>
            </template>
        </modal-window>

    <v-btn  @click="toogle" color="black">
        <v-icon icon="mdi-plus"  color="white"/>
        Add todo
    </v-btn>

    <div class="mt-5">
            <h3 v-if="loading">Loading...</h3>
            <div v-else>

                <div class="d-flex justify-content-between mb-4 mt-4">
                    <div class="col-6 ">
                        <my-input
                            :model-value="searchInput"
                            @update:model-value="setSearchInput"

                        />
                    </div>

                    <div class="col-3 d-flex align-items-center gap-3 justify-content-end">
                        <input type="checkbox" @change="selectAllCheckbox">
                        <div class="">Done All</div>
                    </div>
                </div>
                <todo-list :todos="getTitleBySearchQuery" @deleteTodo="deleteTodo"/>
                <my-pagination :total="total" :page="page" @change="handlePageChange" />
                <my-button
                    @click="deleteAllDone"
                    icon-type="mdi-delete"
                >Delete select</my-button>
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
import MyPagination from "@/components/UI/MyPagination.vue";

export default {
    components: {MyPagination, ModalWindow, MyInput, MyButton, TodoForm, TodoList},

    computed: {
        ...mapGetters("todo", ["getAllTodos", 'getLoadingTodos', 'getTitleBySearchQuery', 'getTotalPageLength']),
        ...mapState("todo", ["todos", "loading", 'searchInput', 'page', 'limit', 'total']),

    },
    methods: {

        ...mapActions('todo', ['fetchTodos']),
        ...mapMutations('todo', ['setPage', 'addTodoToMassive', "deleteTodoFromMassive", 'checkedAllTodos', 'deleteAllDoneTodo', 'setSearchInput', 'getTotalPage']),

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

        handlePageChange(newPage){
            this.setPage(newPage)
            this.fetchTodos()
        }

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