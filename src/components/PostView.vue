<template>


<div  class="d-flex flex-wrap justify-space-around mb-6 ">
    <post-card class="mt-6" v-for="index in 10" :key="index"></post-card>

</div>
</template>


<script>
import PostCard from './PostCard.vue'
export default{
    components:{
        'post-card':PostCard
    }
}

</script>