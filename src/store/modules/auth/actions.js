export default{
    setUser(context,payload){
        context.commit('loginUser',payload)
    },
    deleteUser(context){
        context.commit('logoutUser')
    }
}