import {ref} from "vue";

export function useToggle(){
    let showForm = ref(false);


    const toogle = () => {
        showForm.value = !showForm.value
    }
    const closeWindow = () => {
        showForm.value = false
    }




    return{
        showForm, toogle, closeWindow

    }
}