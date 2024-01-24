import {reactive} from "vue";

export function useForm(props){
    const form = reactive({
        title:'',
        description: ''
    })

    // const addRecipe = () =>{
    //     if(form.title.length>0 && form.description.length>0){
    //         const recipe = {
    //             id: Date.now(),
    //             title: form.title,
    //             description: form.description
    //         }
    //
    //         props.onAdd(recipe)
    //         form.title = form.description = ''
    //     }
    //
    //
    // }

    return{
        // addRecipe,
        form

    }
}