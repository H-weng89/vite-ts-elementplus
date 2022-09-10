import * as M from './mutation-types'
const mututations = {
    [M.UPDATEMENUS](state,payload){
        state.menus = payload
    }
}

export default mututations