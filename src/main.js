import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import components from "../src/components/UI"
import "bootstrap/dist/css/bootstrap.min.css";
import router from "@/router.js";
import directives from "@/directives/index.js";
import store from "@/store/index.js";


const app = createApp(App)

components.forEach((component) => {
    app.component(component.name, component)

})

directives.forEach((directive) => {
    app.directive(directive.name, directive)
})

app
    .use(router)
    .use(store)
    .mount('#app')
