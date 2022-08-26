import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import '@/assets/nomalize.css'
const app = createApp(App)
import {initRouter} from '@/router'
import {initStore} from '@/store'
initRouter(app)
initStore(app)
app.mount('#app')
