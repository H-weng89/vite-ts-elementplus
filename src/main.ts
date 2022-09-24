import { createApp } from 'vue'
import router from './router/index'
import './style.css'
import App from './App.vue'
import '@/assets/nomalize.css'
const app = createApp(App)
import {initStore} from '@/store'

initStore(app)
app.use(router)
app.mount('#app')
