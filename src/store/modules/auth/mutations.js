export default{
    loginUser(state,payload){
        state.userId = payload.id,
        state.token = payload.token
    },
    logoutUser(state){
        state.userId = null,
        state.token = null
    }
}