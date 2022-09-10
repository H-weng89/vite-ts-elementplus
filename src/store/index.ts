import {createStore} from 'vuex'
import {App} from 'vue'
import {userInfo} from '@/api'
import state from './state'
import getters from './getters'
import mutations from './mutation'
import actions  from './actions'

import { InputNumberEmits } from 'element-plus'
interface state {

}
const store = createStore<state>({
    state,
   getters,
   mutations,
   actions,
    modules:{}

})


export const initStore = (app:App)=>{
    app.use(store)
}

export default store