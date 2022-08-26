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
    if(localStorage.getItem('token')&& store.state.menus.length==0){
       await  store.dispatch(UPDATEMENUS)
       await store.getters.getNewMenus.forEach((item: { name: any; children: any[] })=>{
        router.addRoute(
           {
               path:`/${item.name}`,
               component:()=>import('@/pages/main/Main.vue'),
               children:item.children?.map(e=>{
                   return {
                       path:`${e.name}`,
                       component:()=>import(`@/pages/${e.name}/${e.name}.vue`),
   
                   }
               })
           }
        ) 
      })
       console.log(router,router.hasRoute('/pms'))
       next(to.fullPath)
    }

    if(!localStorage.getItem('token')&&from.fullPath!='/'){
        router.push('/')
    }
   
    next()


})
export const initRouter = (app:App<Element>)=>{
    app.use(router)
}

