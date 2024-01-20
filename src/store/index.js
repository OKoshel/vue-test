import {createStore} from "vuex";
import {postModule} from "@/store/PostModule.js";

export default  createStore({
    modules: {
        post: postModule

    }

})