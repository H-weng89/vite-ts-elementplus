import {createStore} from 'vuex'
import {App} from 'vue'
import {userInfo} from '@/api'
import {UPDATEMENUS} from './type'
import { InputNumberEmits } from 'element-plus'
interface menuObj{
    parentId:number,
    id:number,
    children?:menuObj[],
    name:string
}
interface state{
    menus:menuObj[]
}
const store = createStore<state>({
    state(){
        return{
            menus:[]
        }
    },
    getters:{
        getNewMenus(state){
            const menus = state.menus
            const newMenus =  menus.map((item)=>{
                if(item.parentId==0){
                   return  {...item,
                    children:menus.filter(e=>e.parentId==item.id)}
                }
            })
            return newMenus.filter(item=>item)
        }
    },
    mutations:{
        [UPDATEMENUS](state,payload){
            state.menus = payload
        }
    },
    actions:{
        async [UPDATEMENUS]({commit}){
          
            const info = await userInfo()
            commit(UPDATEMENUS,info.data.menus)
        }
    },
    modules:{}

})


export const initStore = (app:App)=>{
    app.use(store)
}

export default store