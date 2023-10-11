export default{
    saveUser(state,payload){
        state.userId = payload.id,
        state.token = payload.token
    }
}