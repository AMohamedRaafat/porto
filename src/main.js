import './assets/main.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(createPinia())
app.use(Toast)
app.use(VueCookies)
app.use(router)

app.mount('#app')
