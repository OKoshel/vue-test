
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
        }

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

        }

    },
    actions: {},

    namespaced: true

}