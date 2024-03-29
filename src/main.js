import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import directives from "@/directives/index.js";
import myComponents from "../src/components/UI"
import router from "@/router.js";
import store from "@/store/index.js";
import * as components from 'vuetify/components'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import {aliases} from "vuetify/iconsets/fa";
import {mdi} from "vuetify/iconsets/mdi";
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    ssr: true,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },

})

const app = createApp(App)

myComponents.forEach((component) => {
    app.component(component.name, component)
})

directives.forEach((directive) => {
    app.directive(directive.name, directive)
})

app
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#app')


