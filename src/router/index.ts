import { App } from 'vue'
import {createRouter,createWebHashHistory, RouteRecordRaw} from 'vue-router'
import store from '@/store'
import {UPDATEMENUS} from '@/store/type'


let routes: RouteRecordRaw[] = [
    {
        path:'/',
        component:()=>import('@/pages/login/Login.vue')
    },
   
   
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
router.beforeEach(async (to,from,next)=>{
    
})
export const initRouter = (app:App<Element>)=>{
    app.use(router)
}

