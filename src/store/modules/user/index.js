import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

export default{
    namespaced:true,
    state(){
        return {
            userEmail:null,
            userAge:null,
            userName:null,
            postCount:0,
            likePostCount:0,
            likedPost:[]
        }
    },
    actions,
    getters,
    mutations
}