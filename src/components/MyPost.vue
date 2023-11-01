<template>


<div  class="d-flex flex-wrap justify-space-around mb-6 ">
    <post-card class="mt-6" v-for="post in posts" :key="post._id" :title="post.title" :description="post.description" :image="post.file" :id="post._id" :allrate="post.ratedBy"></post-card>

</div>

</template>


<script>
import PostCard from './PostCard.vue'

export default{
    components:{
        'post-card':PostCard
    },

    data(){
       return {
        posts:[],
        userId:"",
        token:null
       }
    },
    async created(){
        this.userId = this.$store.getters.getUserId
        this.token = this.$store.getters.getToken
        // if(this.userId === null){
        //     this.$router.replace('/login');
        //     alert("You must be login")
        // }
        const response = await fetch("http://localhost:3000/mypost",{
            method:'POST',
            headers:{
                "Content-Type":'application/json',
                'authorization':`Bearer ${this.token}`
            },
            body:JSON.stringify({
                id:this.userId
            })
        })

        const responseData = await response.json()
        this.posts = responseData
    }
}

</script>