<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          location="right"
          @click="rail = false"
        >
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/10.jpg"
            :title="userName"
            nav
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>
          <br>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item
              prepend-icon="mdi-home-city"
              title="Home"
              value="home"
              @click="toHome"
            ></v-list-item>
            <v-list-item v-if="isAuth"
              prepend-icon="mdi-account"
              title="My Account"
              value="account"
              @click="showAccount"
            ></v-list-item>
            
            <v-list-item v-if="isAuth"
              prepend-icon="mdi-file-upload"
              title="Create Post"
              value="post"
              @click="toCreatepost"
            ></v-list-item>
            <v-list-item v-if="isAuth"
              prepend-icon="mdi-image"
              title="My Post"
              value="mypost"
              @click="toMypost"
            ></v-list-item>
            <v-list-item v-if="isAuth"
              prepend-icon="mdi-logout"
              title="Logout"
              value="logout"
              @click="toLogout"
            ></v-list-item>
            <v-list-item v-if="!isAuth"
              prepend-icon="mdi-login"
              title="Login"
              value="login"
              @click="toLogin"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main>
            <router-view></router-view>
        
        </v-main>
      </v-layout>
    </v-card>
  </template>
  
  <script>
    export default {
      created(){
          
      },
      computed:{
           userName(){ 
               return this.$store.getters.getUserName
           },
           isAuth(){
            return this.$store.getters.isAuthenticated
           }
      },
      data() {
        return {
          drawer: true,
          rail: true,
        }
      },
      methods:{
        toHome(){
          if(!this.rail){
            this.$router.replace('/')
          }
        },
        toLogin(){
          if(!this.rail)
          this.$router.replace('/login')
        },
        toCreatepost(){
          if(!this.rail)
          this.$router.replace('/upload')
        },
        toMypost(){
          if(!this.rail){
            this.$router.replace('/mypost')
          }
        },
        toLogout(){
          if(!this.rail){
            this.$store.dispatch('logout')
          }
        },
        showAccount(){
          if(!this.rail){
          this.$router.push('/myaccount')}
        }
      }
    }
  </script>
  