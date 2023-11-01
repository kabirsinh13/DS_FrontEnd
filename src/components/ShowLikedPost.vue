<template>


    <post-card class="mt-6" v-for="post in Post" :key="post.postId._id" :title="post.postId.title" :description="post.postId.description" :image="post.postId.file" :id="post.postId._id" :allrate="post.postId.ratedBy"></post-card>
</template>


<script>
import PostCard from './PostCard.vue'
export default{

    components:{
      'post-card':PostCard
    },
    data(){
        return {
        }
    },
    computed:{
        Post(){
            return this.$store.state.user.likedPost
        }
    },
    async created(){
        if(this.Post === null){
            await this.$store.dispatch('user/getlikeCount')
        }
    },

}

</script>


<style>


</style>