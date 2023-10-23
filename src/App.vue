<template>
  <div class="column">
    <app-header></app-header>
   
   <nav-drawer></nav-drawer>
  </div>

  
  
  
</template>

<script>
import HeaderView   from './components/HeaderView.vue'
import NavDrawer    from './components/NavigationDrawer.vue'

export default {
  name: 'App',
  data(){
    return {
      authenticated:this.$store.getters.isAuthenticated
    }
  },
  components:{
    'app-header':HeaderView,
    'nav-drawer':NavDrawer
  },
   async created(){
    await this.$store.dispatch('tryLogin')
    console.log("auth " + this.$store.getters.isAuthenticated)
   }
  
}
</script>

<style scpoed>

</style>
