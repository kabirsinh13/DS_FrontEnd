
import { createStore } from "vuex"
import authModules from './modules/auth/index.js'

const store = createStore({
    modules:{
        auth:authModules
    },

    getters:{
        getToken(state){
            return state.auth.token;
        }
    }
    
})

export {store}