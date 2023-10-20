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
            ></v-list-item>
            <v-list-item v-if="isAuth"
              prepend-icon="mdi-account"
              title="My Account"
              value="account"
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
          this.userName = this.$store.getters.getUserName
          this.isAuth = this.$store.getters.isAuthenticated
      },
      data() {
        return {
          drawer: true,
          rail: true,
          userName:'',
          isAuth:false
        }
      },
    }
  </script>
  