export default{
   async getlikeCount(context){
        const token = context.rootGetters.getToken
        const response = await fetch('http://localhost:3000/user/likedpost',{
          headers:{
              'authorization':`Bearer ${token}`
          }
        })
        
        const result = await response.json()
        context.commit('updateLikeData',{likeCount:result.length,likedPost:result})
    },
    async getpostCount(context){
        const token = context.rootGetters.getToken
        const response = await fetch("http://localhost:3000/mypost",{
            method:'POST',
            headers:{
                "Content-Type":'application/json',
                'authorization':`Bearer ${token}`
            }
        })
        
        const result = await response.json()
        context.commit('updatePostCount',{postCount:result.length})
    }

}