
<template>
    <header>
      <nav>
        <h1><router-link to='/' class="grey--text d-flex justify-end">Desti Share</router-link></h1>
        <ul>
          <li v-if="!isLogin">
            <router-link to="/login">Login</router-link>
          </li>
          <!-- <li v-if="isLogin">
            <base-button link to="/upload">CreatePost</base-button>
          </li>
          <li v-if="isLogin">
             <base-button link to="/mypost">MyPost</base-button>
          </li>
          <li v-if="isLogin">
            <base-button  @click="logout">Logout</base-button>
          </li> -->
        </ul>
      </nav>
    </header>
  </template>



<script>
export default{
  data(){
    return {

    }
  },
  computed:{
    isLogin(){
      return this.$store.getters.isAuthenticated
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
    }
  }
    
}


</script>

<style scoped>
  header {
  width: 100%;
  height: 4rem;
  background-color: #3d008d;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: auto;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  /* margin: auto; */
  padding: auto;
  display: flex;
  /* justify-content: space-between;
  align-items: center; */
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
  </style>