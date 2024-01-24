import {createStore} from "vuex";
import {postModule} from "@/store/PostModule.js";
import {recipeModule} from "@/store/RecipeModule.js"

export default  createStore({
    modules: {
        post: postModule,
        recipe: recipeModule

    }

})