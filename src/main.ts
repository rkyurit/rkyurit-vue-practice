import { createApp } from 'vue'
import { createPinia } from 'pinia'
import simpleToast from './plugins/simple-toast'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(simpleToast)

app.mount('#app')
