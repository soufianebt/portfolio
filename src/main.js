import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/scss/main.scss"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab)

const app = createApp(App)

app.use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
