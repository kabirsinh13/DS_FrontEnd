export default{
    setUser(context,payload){
        context.commit('loginUser',payload)
    },
    setUserName(context,payload){
        context.commit('addUserName',payload)
    },

    deleteUser(context){
        context.commit('logoutUser')
    },

    likeStatus(context,payload){
        context.commit('setLike',payload)
    }
}