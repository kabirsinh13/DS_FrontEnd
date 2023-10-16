<template>

<h1>All Post</h1>
<div  class="d-flex flex-wrap justify-space-around mb-6 " v-if="allPosts.length>0">
    <post-card class="mt-6" v-for="post in allPosts" :key="post._id" :title="post.title" :description="post.description" :image="post.file" :id="post._id"></post-card>

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
            allPosts:[]
        }
    },

    async created(){
        const response  = await fetch("http://localhost:3000/allpost")
        const responseData = await response.json()
        this.allPosts =responseData
    }
}

</script>