<template>
    <div v-for="todo in todos"  :class="{'todo-item-completed': todo.completed, 'todo-item-uncompleted': !todo.completed}" class="d-flex gap-3 align-items-center justify-content-between mb-3 todo-item ">
        <div class="d-flex align-items-center gap-3">
            <input type="checkbox"  v-model="todo.completed" />
            <div class="d-flex flex-column gap-2">
                <div>{{todo.title}}</div>
            </div>
        </div>
        <div class="d-flex gap-3">
            <button class="btn btn-outline-success" @click="$emit('deleteTodo', todo.id)">{{todo.completed ? 'Done' : "Active"}}</button>
            <my-button @click="$emit('deleteTodo', todo.id)">Delete</my-button>
        </div>

    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
    components: {MyButton},
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
}
</script>

<style lang="sass" scoped>

.todo-item
    border: 1px solid grey
    padding: 20px
    &-completed
        background-color: azure
    &-uncompleted
        background-color: #d9f1d9


</style>