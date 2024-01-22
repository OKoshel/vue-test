import {ref} from "vue";

export function useToggle(){
    let showForm = ref(true);

    const toogle = () => {
        showForm.value = !showForm.value

    }

    return{
        showForm, toogle

    }
}