import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/ui/App.vue'
import router from './app/router'

import '@/assets/index.scss';
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
