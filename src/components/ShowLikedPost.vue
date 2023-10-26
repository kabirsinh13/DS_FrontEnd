<template>


    <post-card class="mt-6" v-for="post in Post" :key="post.postId._id" :title="post.postId.title" :description="post.postId.description" :image="post.postId.file" :id="post.postId._id"></post-card>
</template>


<script>
import PostCard from './PostCard.vue'
export default{

    components:{
      'post-card':PostCard
    },
    data(){
        return {
            Post:[]
        }
    },
    created(){
        this.Post = this.$store.state.user.likedPost
    },

}

</script>


<style>


</style>