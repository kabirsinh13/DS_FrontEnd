<template>
   <base-card>
     <img src="https://ui-avatars.com/api/?name=&&rounded=true">
     <v-divider></v-divider>
     <div>Name: {{ userName }}</div>
     <div>Email: {{ userEmail }}</div>
     <div>Age: {{ userAge }}</div>
     <div>Uploaded Post: <router-link style="text-decoration: none;" to='/mypost'>{{ postCount }}</router-link></div>
     <div>Post Liked: <router-link style="text-decoration:none;" :likedPostData="likedPostData" to="/likedpost">{{ likedPostCount }}</router-link></div>
   </base-card>


</template>

<script>
export default{
    data(){
        return {
           likedPostData:[]
        }
    },
    
    computed:{
        userName(){
            return this.$store.state.user.userName;
        },
        userAge(){
            return this.$store.state.user.userAge
        },
        userEmail(){
            return this.$store.state.user.userEmail
        },
        postCount(){
            return this.$store.state.user.postCount
        },
        likedPostCount(){
            return this.likedPostData.length
        }
    },
   async created(){
        const token = this.$store.getters.getToken
          const response = await fetch('http://localhost:3000/user/likedpost',{
            headers:{
                'authorization':`Bearer ${token}`
            }
          })

          this.likedPostData = await response.json()
          console.log(this.likedPostData)
          this.$store.state.user.likedPost= this.likedPostData
    }
}

</script>

<style scoped>

div{
    font-weight: bold;
}

</style>