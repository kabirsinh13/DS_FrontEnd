export default{
    loginUser(state,payload){
        state.userId = payload.id,
        state.token = payload.token
        state.userName = payload.userName
        state.userEmail = payload.userEmail
        state.userAge = payload.userAge
      
    },
    logoutUser(state){
        state.userId = null,
        state.token = null
    },
    setLike(state,payload){
        state.isLike=payload.like
    }
}