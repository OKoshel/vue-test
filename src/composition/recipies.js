import {ref} from "vue";

export function useRecipies(){
    const lists = ref([])
    const current = ref(null)

    const addRecipe = (newItem) => {
        lists.value.push(newItem)
    }
    const selectRecipe = (id) => {
        current.value =  lists.value.find((elem) => elem.id === id)

    }
    const deleteItem = (id) =>{
        current.value = null
        lists.value = lists.value.filter((elem) => elem.id !== id)

    }
    return{
        lists, current,
        addRecipe, selectRecipe, deleteItem
    }
}