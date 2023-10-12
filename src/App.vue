<template>
  <app-header></app-header>

  <router-view></router-view>
  
  
</template>

<script>
import HeaderView   from './components/HeaderView.vue'

export default {
  name: 'App',
  data(){
    return {
      authenticated:this.$store.getters.isAuthenticated
    }
  },
  components:{
    'app-header':HeaderView
  },
   created(){
    console.log("auth " + this.authenticated)
   }
  
}
</script>

<style scpoed>

/* .post{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
 
} */

</style>
