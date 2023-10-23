export default{
    loginUser(state,payload){
        state.userId = payload.id,
        state.token = payload.token
      
    },
    logoutUser(state){
        state.userId = null,
        state.token = null
    },
    addUserName(state,payload){
        state.userName = payload.userName
    },
    setLike(state,payload){
        state.isLike=payload.like
    }
}