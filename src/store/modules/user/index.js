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
            likedPost:null,
            likeCount:0,
            postCount:0
        }
    },
    actions,
    getters,
    mutations
}