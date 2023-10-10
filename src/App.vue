<template>
  <app-header></app-header>

  <router-view></router-view>
  
  
</template>

<script>
import HeaderView   from './components/HeaderView.vue'

export default {
  name: 'App',
  components:{
    'app-header':HeaderView
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
