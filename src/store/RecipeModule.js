import axios from "axios";

export const recipeModule = {
    state : () => ({
        lists: [],
        loading: false,
        current: null

    }),
    getters: {
        getAllRecipes(state){
            return state.lists
        },
        getCurrentRecipe(state){
            return state.current
        },

    },

    mutations: {
        addRecipe (state, newRecipe) {
         state.lists.push(newRecipe)

        },
        deleteRecipe(state, id) {
            state.lists = state.lists.filter((elem) => elem.id !== id)
            state.current = null


        },
        setAsCurrent(state, id){
           state.current =  state.lists.find(elem => elem.id === id)

        },
        fetchNewPosts(state, posts){
            state.lists = posts
        }

    },
    actions: {
        async fetchAllPosts(ctx){
            const response=  await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params:{
                    _page: 1,
                    _limit: 5
                }

            })

            ctx.commit('fetchNewPosts', response.data)

        }
    },

    namespaced: true

}