export default{

    saveUserData(state,payload){
        state.userAge = payload.userAge
        state.userEmail = payload.userEmail
        state.userName = payload.userName
    },

    updateUserProfile(state,payload){
        localStorage.setItem('age',payload.age)
        localStorage.setItem('userName',payload.name)

    },
    updatePostCount(state,payload){
      state.postCount = payload.postCount
      
    },
    updateLikeData(state,payload){
        state.likeCount = payload.likeCount
        state.likedPost = payload.likedPost
    }
}