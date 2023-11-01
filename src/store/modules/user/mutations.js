export default{

    saveUserData(state,payload){
        state.postCount = payload.postCount
        state.userAge = payload.userAge
        state.userEmail = payload.userEmail
        state.userName = payload.userName
        state.likeCount = payload.likeCount
    },

    updateUserProfile(state,payload){
        localStorage.setItem('age',payload.age)
        localStorage.setItem('userName',payload.name)

    },
}