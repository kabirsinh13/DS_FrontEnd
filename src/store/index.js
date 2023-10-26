
import { createStore } from "vuex"
import authModules from './modules/auth/index.js'
import userModules from "./modules/user/index.js";

const store = createStore({
    modules:{
        auth:authModules,
        user:userModules
    },

    getters:{
        getToken(state){
            return state.auth.token;
        },
        getUserId(state){
            return state.auth.userId;
        },
        getUserName(state){
            // console.log(state)
            return state.user.userName
        },
        islikeOrNot(state){
            return state.isLike
        }
    }
    
})

export {store}