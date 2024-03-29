import axios from "axios";

export const todoModule = {
    state : () => ({
        todos: [],
        loading: false,
        searchInput: '',
        error: '',
        page: 1,
        limit: 5,
        total: 1

    }),
    getters: {
        getAllTodos(state){
           return  state.todos
        },
        getLoadingTodos(state){
            return  state.loading
        },
        getTitleBySearchQuery(state){
        return state.todos.filter((elem) => elem.title.toLowerCase().includes(state.searchInput))
        },

    },


    mutations: {
        setPage(state, newPage){
            return state.page = newPage
        },
        getTotalPage(state, total){
            return state.total = total
        },
        setSearchInput(state, searchInput){
            state.searchInput = searchInput
        },
        fetchTodosFromServer(state, todos){
            return state.todos = todos
        },
        loadingFromServer(state, bool){
            return state.loading= bool
        },
        addTodoToMassive(state, todo){
            return state.todos.unshift(todo)
        },
        deleteTodoFromMassive(state, todoId){
            state.todos = state.todos.filter((todo) => todo.id !== todoId)
        },
        deleteAllDoneTodo(state){
            state.todos = state.todos.filter(todo => !todo.completed);

        },
        checkedAllTodos(state, checked) {
            if(checked){
                state.todos.forEach(todo => {
                    todo.completed = true;
                });
            }
            else {
                state.todos.forEach(todo => {
                    todo.completed = false;
                });

            }

        }


    },
    actions: {
        async fetchTodos({state, commit}){

            try {
                commit('loadingFromServer', true)
                const response=  await axios.get('https://jsonplaceholder.typicode.com/todos', {
                    params:{
                        _page: state.page,
                        _limit: state.limit
                    }

                })
                commit('fetchTodosFromServer', response.data);
                const totalCount = response.headers['x-total-count'];
                commit('getTotalPage', Math.ceil(totalCount / state.limit));

            }
            catch (error){
                console.log(error)
            }
            finally {
                commit('loadingFromServer', false)
            }

        },




    },
    namespaced: true


}