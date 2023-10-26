export default{

    saveUserData(state,payload){
        state.postCount = payload.postCount
        state.userAge = payload.userAge
        state.userEmail = payload.userEmail
        state.userName = payload.userName
    }
}